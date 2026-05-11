import { SignInForm } from "@/components/auth/signin-form"

export default function SignInPage() {
  return (
    <div className="flex-1 flex flex-col bg-[var(--light-gray)]">
      <main className="flex-1 flex items-center justify-center p-4 pb-24">
        <div className="w-full max-w-md">

          {/* Brand Header */}
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-[var(--dark-sapphire)]">To The Pub</h1>
            <p className="text-sm text-[var(--charcoal-gray)] mt-1">Venue & event management</p>
          </div>

          {/* Sign In Card */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="h-1 bg-[var(--vibrant-teal)]" />
            <div className="p-8">
              <div className="mb-6">
                <h2 className="text-xl font-semibold text-[var(--dark-sapphire)]">Welcome back</h2>
                <p className="text-sm text-[var(--charcoal-gray)] mt-1">Sign in to access your dashboard</p>
              </div>
              <SignInForm />
            </div>
          </div>

        </div>
      </main>
    </div>
  )
}
