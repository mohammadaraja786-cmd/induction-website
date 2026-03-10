import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Target, Eye, Rocket } from "lucide-react"

export const metadata: Metadata = {
  title: "Induction.io | AI Automation Founder Mohammad Ahmad",
  description:
    "Meet Mohammad Ahmad, the visionary behind Induction.io. Learn about our mission to transform businesses through intelligent AI automation.",
}

export default function AboutPage() {
  return (
    <div className="flex flex-col pt-20">
      {/* Hero */}
      <section className="relative overflow-hidden py-24">
        <div className="absolute top-0 right-1/4 h-[400px] w-[400px] rounded-full bg-primary/5 blur-[100px] glow-pulse" />
        <div className="relative mx-auto max-w-7xl px-6 text-center">
          <h1 className="text-balance text-4xl font-bold text-foreground md:text-6xl">
            About <span className="text-primary">Induction.io</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
            We are on a mission to democratize business automation, making AI-powered
            solutions accessible to companies of every size, everywhere in the world.
          </p>
        </div>
      </section>

      {/* Founder */}
      <section className="border-t border-border/50 bg-card/50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-16">
            {/* Photo */}
            <div className="flex-shrink-0">
              <div className="relative">
                <div className="absolute -inset-2 rounded-full bg-primary/30 blur-lg glow-pulse" />
                <div className="relative h-64 w-64 overflow-hidden rounded-full border-4 border-primary bg-card md:h-80 md:w-80">
                  <img
                    src="/images/ahmadpic.jpg"
                    alt="Mohammad Ahmad - Founder of Induction.io"
                    className="h-full w-full scale-[1.15] object-cover object-[center_10%]"
                  />
                </div>
              </div>
            </div>

            {/* Bio */}
            <div className="flex-1 text-center lg:text-left">
              <span className="mb-2 inline-block text-sm font-medium text-primary">
                Meet the Founder
              </span>
              <h2 className="text-balance text-3xl font-bold text-foreground md:text-4xl">
                Mohammad Ahmad
              </h2>
              <p className="mt-4 text-lg font-medium text-foreground/80">
                Visionary. Automation Architect. AI Strategist.
              </p>
              <p className="mt-4 max-w-xl text-pretty leading-relaxed text-muted-foreground">
                Mohammad Ahmad is the driving force behind Induction.io. With a deep
                passion for artificial intelligence and a relentless focus on practical
                business outcomes, he founded the agency with a simple belief: every
                business, no matter the size, deserves access to world-class automation.
              </p>
              <p className="mt-4 max-w-xl text-pretty leading-relaxed text-muted-foreground">
                His approach combines cutting-edge AI technology with a hands-on,
                client-first methodology. From custom chatbots to enterprise CRM
                integrations, Mohammad personally architects every solution to ensure it
                delivers measurable, lasting impact.
              </p>
              <Link
                href="/contact"
                className="group mt-8 inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-[0_0_20px_rgba(85,107,47,0.3)]"
              >
                Work With Mohammad
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Differentiators */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              {
                icon: Target,
                title: "Our Mission",
                description:
                  "To empower businesses worldwide with intelligent, custom-built AI solutions that eliminate friction, reduce costs, and accelerate growth.",
              },
              {
                icon: Eye,
                title: "Our Vision",
                description:
                  "A world where every business operates at peak efficiency, powered by AI systems that are as intuitive as they are powerful.",
              },
              {
                icon: Rocket,
                title: "Our Edge",
                description:
                  "Unlike one-size-fits-all platforms, we build bespoke automations tailored to your exact workflows. Every solution is unique because every business is unique.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="group rounded-xl border border-border/50 bg-card p-8 transition-all duration-300 hover:border-primary/30 hover:shadow-[0_0_30px_rgba(85,107,47,0.1)] hover:-translate-y-1"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary/20">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-3 text-xl font-bold text-foreground">{item.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
