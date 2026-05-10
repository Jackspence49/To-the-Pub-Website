# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server (http://localhost:3000)
npm run build    # Production build
npm run lint     # ESLint with Next.js rules (next/core-web-vitals + next/typescript)
npm start        # Run production server
```

There are no tests in this project.

## Architecture

**To The Pub** is a nightlife discovery platform for bars/venues and their events. It is a Next.js 15 (App Router) + React 19 + TypeScript frontend that acts as a proxy to a separate backend API.

### Backend connection

The backend runs at `NEXT_PUBLIC_API_BASE_URL` (default: `http://localhost:5000`). All Next.js API routes under `src/app/api/` are thin proxies that forward requests (including `Authorization` headers) to this backend. The proxy layer exists specifically to avoid exposing the upstream URL to the browser. Dashboard pages call these internal proxy routes via `api` from `src/lib/api.ts`; they never call the backend directly.

### Two-layer authentication

**Layer 1 — storage (`src/lib/auth.ts`)**: Raw JWT utilities that read/write `localStorage` (`authToken`, `user`, `authTokenExpires`). Decodes the JWT `exp` claim to track expiry. Guards all functions with `typeof window === 'undefined'` for SSR safety.

**Layer 2 — context (`src/contexts/AuthContext.tsx`)**: `AuthProvider` wraps the whole app in `src/app/layout.tsx`. It syncs auth state from `localStorage` on mount and on `storage` events (for multi-tab logout). It also listens for the custom `auth:unauthorized` event, which `src/lib/api.ts` emits on any `401` response, to clear auth state automatically. Use `useAuth()` from `@/hooks/useAuth` (which re-exports from `AuthContext`) in components to read `isAuthenticated`, `user`, `token`, or to call `login()`/`logout()`.

**Route protection**: The entire `/dashboard` subtree is protected by `PrivateRoute` (`src/components/dashboard/PrivateRoute.tsx`) mounted in `src/app/dashboard/layout.tsx`. This component checks token existence and expiry client-side (hydration-safe pattern) and redirects to `/login` otherwise. `usePrivateRoute` (`src/hooks/usePrivateRoute.ts`) is an equivalent hook for cases where you need the auth check inline rather than as a wrapper. `ProtectedRoute` (`src/components/dashboard/ProtectedRoute.tsx`) also exists as an alternative wrapper.

### Making API calls from dashboard pages

Use `api` from `@/lib/api`:

```ts
import { api } from '@/lib/api'

const response = await api.get('/api/bars/search?q=foo', { requireAuth: true })
const response = await api.put(`/api/bars/${id}`, payload, { requireAuth: true })
```

Pass `requireAuth: true` to forward the stored JWT. On a `401`, `apiClient` clears tokens and dispatches `auth:unauthorized`, which `AuthContext` picks up. `handleApiResponse<T>()` and `apiCall<T>()` are convenience wrappers that parse JSON and throw on non-OK responses.

### Navbar

`ConditionalNavbar` (`src/components/layouts/ConditionalNavbar.tsx`) renders `PublicNavbar` or `PrivateNavbar` based on `useAuth().isAuthenticated`. It returns `null` while auth is loading to prevent flash.

### Styling

Tailwind CSS v4. All design tokens are CSS variables defined in `src/app/globals.css`:

| Variable | Value | Role |
|---|---|---|
| `--dark-sapphire` | `#1A2B3C` | Page background (`--background`) |
| `--charcoal-gray` | `#333333` | Card background (`--card-background`) |
| `--vibrant-teal` | `#00B8D4` | Primary accent (`--accent`) |
| `--goldenrod` | `#FFC107` | Secondary accent (`--secondary-accent`) |
| `--light-gray` | `#E0E0E0` | Borders (`--border-color`) |

Always use these variables (e.g. `text-[var(--vibrant-teal)]`) rather than hardcoded hex values. Toast notifications use Sonner — import `toast` from `'sonner'` and place `<Toaster>` at the page level or rely on `ToastProvider` in the layout.

### Path aliases

`@/*` maps to `./src/*` — use this for all imports.

### API proxy surface

| Proxy route | Forwards to backend |
|---|---|
| `POST /api/users/login` | `POST {API_BASE}/users/login` |
| `GET/POST /api/bars` | `GET/POST {API_BASE}/bars` |
| `GET /api/bars/search` | `GET {API_BASE}/bars/search` |
| `GET/PUT /api/bars/[id]` | `GET/PUT {API_BASE}/bars/{id}` |
| `GET/PUT /api/bars/[id]/hours` | `GET/PUT {API_BASE}/bars/{id}/hours` |
| `GET/PUT /api/bars/[id]/tags` | `GET/PUT {API_BASE}/bars/{id}/tags` |
| `GET/POST /api/events` | `GET/POST {API_BASE}/events` |
| `GET/PUT/DELETE /api/events/[id]` | `GET/PUT/DELETE {API_BASE}/events/{id}` |
| `GET/POST /api/events/instances` | `GET/POST {API_BASE}/events/instances` |
| `GET/PUT/DELETE /api/events/instances/[id]` | per method |
| `GET/POST /api/tags` | tags |
| `GET/PUT/DELETE /api/tags/[id]` | tags |
| `GET/POST /api/event-tags` | event-tags |
| `GET/PUT/DELETE /api/event-tags/[id]` | event-tags |
| `GET/POST /api/barTags` | bar tags |
