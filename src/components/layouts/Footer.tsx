import Link from "next/link"
import Image from "next/image"
import { Mail, Instagram } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full border-t border-[var(--border-color)]/20 bg-white">
      <div className="container px-4 md:px-6 py-6 md:py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* Brand */}
          <div className="flex flex-col gap-2">
            <Link href="/">
              <Image
                src="/ToThePub-logo.png"
                alt="To The Pub"
                width={200}
                height={60}
                className="h-10 w-auto"
              />
            </Link>
            <p className="text-xs text-[var(--charcoal-gray)] max-w-[200px]">
              Connecting people with the best bars, pubs, and events near them.
            </p>
            <a
              href="https://apps.apple.com/us/app/to-the-pub/id6763960326"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 inline-block text-xs font-medium text-[var(--vibrant-teal)] hover:underline"
            >
              Download on the App Store →
            </a>
          </div>

          {/* Navigation */}
          <div className="flex flex-col gap-2">
            <h3 className="text-xs font-semibold text-[var(--text-on-light)] uppercase tracking-wider">
              Navigation
            </h3>
            <nav className="flex flex-col gap-1.5">
              <Link href="/" className="text-sm text-[var(--charcoal-gray)] hover:text-[var(--vibrant-teal)] transition-colors">
                Home
              </Link>
              <Link href="/the-app" className="text-sm text-[var(--charcoal-gray)] hover:text-[var(--vibrant-teal)] transition-colors">
                The App
              </Link>
              <Link href="/the-business" className="text-sm text-[var(--charcoal-gray)] hover:text-[var(--vibrant-teal)] transition-colors">
                For Business
              </Link>
              <Link href="/about" className="text-sm text-[var(--charcoal-gray)] hover:text-[var(--vibrant-teal)] transition-colors">
                About
              </Link>
              <Link href="/login" className="text-sm text-[var(--charcoal-gray)] hover:text-[var(--vibrant-teal)] transition-colors">
                Login
              </Link>
            </nav>
          </div>

          {/* Contact & Legal */}
          <div className="flex flex-col gap-2">
            <h3 className="text-xs font-semibold text-[var(--text-on-light)] uppercase tracking-wider">
              Contact
            </h3>
            <a
              href="mailto:tothepub.contact@gmail.com"
              className="flex items-center gap-1.5 text-sm text-[var(--charcoal-gray)] hover:text-[var(--vibrant-teal)] transition-colors"
            >
              <Mail size={13} />
              tothepub.contact@gmail.com
            </a>
            <a
              href="https://www.instagram.com/tothe_pub/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-[var(--charcoal-gray)] hover:text-[var(--vibrant-teal)] transition-colors"
            >
              <Instagram size={13} />
              @tothe_pub
            </a>
            <Link
              href="/privacy-policy"
              className="text-sm text-[var(--charcoal-gray)] hover:text-[var(--vibrant-teal)] transition-colors"
            >
              Privacy Policy
            </Link>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="mt-6 pt-4 border-t border-[var(--border-color)]/30">
          <p className="text-xs text-[var(--charcoal-gray)] text-center">
            &copy; {currentYear} To The Pub. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
