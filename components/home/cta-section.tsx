import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function CTASection() {
  return (
    <section className="border-t border-border/50 bg-card/50 py-24">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="text-balance text-3xl font-bold text-foreground md:text-4xl">
          Ready to Transform Your Business?
        </h2>
        <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
          Join forward-thinking businesses that are already leveraging AI to work
          smarter, faster, and more efficiently. Let us show you what is possible.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/contact"
            className="group flex items-center gap-2 rounded-lg bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-[0_0_30px_rgba(85,107,47,0.3)]"
          >
            Get in Touch
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            href="/about"
            className="rounded-lg border border-border px-8 py-3.5 text-sm font-semibold text-foreground transition-all hover:border-primary/50 hover:bg-secondary"
          >
            About the Founder
          </Link>
        </div>
      </div>
    </section>
  )
}
