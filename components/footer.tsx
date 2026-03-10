import Link from "next/link"
import { Zap } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border/50 bg-background">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="flex flex-col gap-12 md:flex-row md:justify-between">
          {/* Brand */}
          <div className="max-w-sm">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/20">
                <Zap className="h-5 w-5 text-primary" />
              </div>
              <span className="text-xl font-bold tracking-tight text-foreground">
                induction<span className="text-primary">.io</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-muted-foreground">
              We build intelligent automation solutions that transform how businesses
              operate. From custom AI bots to full CRM integrations, we help you
              scale smarter.
            </p>
          </div>

          {/* Links */}
          <div className="flex gap-16">
            <div>
              <h4 className="mb-4 text-sm font-semibold text-foreground">Pages</h4>
              <div className="flex flex-col gap-3">
                <Link href="/" className="text-sm text-muted-foreground transition-colors hover:text-primary">Home</Link>
                <Link href="/about" className="text-sm text-muted-foreground transition-colors hover:text-primary">About</Link>
                <Link href="/services" className="text-sm text-muted-foreground transition-colors hover:text-primary">Services</Link>
                <Link href="/contact" className="text-sm text-muted-foreground transition-colors hover:text-primary">Contact</Link>
              </div>
            </div>
            <div>
              <h4 className="mb-4 text-sm font-semibold text-foreground">Connect</h4>
              <div className="flex flex-col gap-3">
                <a
                  href="https://wa.me/9203435050786?text=Hi%20Ahmad%2C%20I%20saw%20your%20agency%20induction.io.%20I%27d%20like%20to%20automate%20some%20of%20my%20business%20processes.%20Tell%20me%20more."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  WhatsApp
                </a>
                <Link href="/contact" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                  Email Us
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-border/50 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} induction.io. All rights reserved. Founded by Mohammad Ahmad.
          </p>
        </div>
      </div>
    </footer>
  )
}
