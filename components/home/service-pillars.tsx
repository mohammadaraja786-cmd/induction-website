import Link from "next/link"
import { Bot, Workflow, Database, ArrowRight } from "lucide-react"

const pillars = [
  {
    icon: Bot,
    title: "Custom AI Bots",
    description:
      "Intelligent chatbots and virtual assistants that handle customer inquiries, schedule meetings, and automate support around the clock.",
    href: "/services",
  },
  {
    icon: Workflow,
    title: "Workflow Automation",
    description:
      "End-to-end process automation that connects your tools, eliminates manual tasks, and keeps your operations running seamlessly.",
    href: "/services",
  },
  {
    icon: Database,
    title: "CRM Integration",
    description:
      "Deep integrations with Salesforce, HubSpot, and custom CRMs that unify your data and supercharge your sales pipeline.",
    href: "/services",
  },
]

export function ServicePillars() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <h2 className="text-balance text-3xl font-bold text-foreground md:text-4xl">
            Our Core Services
          </h2>
          <p className="mt-4 text-muted-foreground">
            Three pillars of automation excellence to transform your business.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {pillars.map((pillar) => (
            <Link
              key={pillar.title}
              href={pillar.href}
              className="group relative overflow-hidden rounded-xl border border-border/50 bg-card p-8 transition-all duration-300 hover:border-primary/40 hover:shadow-[0_0_40px_rgba(85,107,47,0.15)] hover:-translate-y-1"
            >
              {/* Glow overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />

              <div className="relative z-10">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/20">
                  <pillar.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="mb-3 text-xl font-bold text-foreground">{pillar.title}</h3>
                <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
                  {pillar.description}
                </p>
                <span className="inline-flex items-center gap-1 text-sm font-medium text-primary transition-all group-hover:gap-2">
                  Learn more <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
