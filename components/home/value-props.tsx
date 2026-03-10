import { Gauge, Shield, Globe, Lightbulb } from "lucide-react"

const props = [
  {
    icon: Gauge,
    title: "Rapid Deployment",
    description:
      "Go from concept to production in weeks, not months. Our streamlined process ensures fast, reliable automation rollouts.",
  },
  {
    icon: Shield,
    title: "Enterprise-Grade Security",
    description:
      "Every solution is built with robust security protocols, encrypted data handling, and compliance-ready architecture.",
  },
  {
    icon: Globe,
    title: "Global Scale",
    description:
      "Our automations are built to handle international operations, multi-timezone workflows, and cross-platform integrations.",
  },
  {
    icon: Lightbulb,
    title: "Custom Intelligence",
    description:
      "No cookie-cutter solutions. Every bot and workflow is tailored to your unique business processes and goals.",
  },
]

export function ValueProps() {
  return (
    <section className="border-t border-border/50 bg-card/50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <h2 className="text-balance text-3xl font-bold text-foreground md:text-4xl">
            Why Choose Induction.io
          </h2>
          <p className="mt-4 text-muted-foreground">
            Built on trust, powered by innovation, and designed for results.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {props.map((prop) => (
            <div
              key={prop.title}
              className="group rounded-xl border border-border/50 bg-card p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-[0_0_30px_rgba(85,107,47,0.1)] hover:-translate-y-1"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary/20">
                <prop.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">{prop.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{prop.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
