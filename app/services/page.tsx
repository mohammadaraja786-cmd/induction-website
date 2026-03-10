import type { Metadata } from "next"
import Link from "next/link"
import {
  Bot,
  Workflow,
  Database,
  MessageSquare,
  Zap,
  BarChart3,
  ArrowRight,
  CheckCircle2,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Induction.io | AI Automation Services",
  description:
    "Explore our full range of AI automation services: custom bots, workflow automation, CRM integrations, conversational AI, and more.",
}

const services = [
  {
    icon: Bot,
    title: "Custom AI Bots",
    description:
      "Intelligent chatbots and virtual agents built from the ground up for your specific business needs. Our bots handle customer support, lead qualification, appointment scheduling, and more with human-like conversation.",
    features: [
      "Natural language understanding",
      "Multi-platform deployment",
      "24/7 autonomous operation",
      "Continuous learning & improvement",
    ],
    tags: ["LLM fine tuning", "Lead Gen", "Customer Support"]
  },
  {
    icon: Workflow,
    title: "Workflow Automation",
    description:
      "End-to-end process automation that connects every tool in your stack. We map your business processes, identify bottlenecks, and deploy automated workflows that save hours of manual work daily.",
    features: [
      "Cross-platform integration",
      "Conditional logic & branching",
      "Error handling & alerts",
      "Real-time monitoring dashboards",
    ],
    tags: ["Restaurants", "Healthcare", "E-commerce"]
  },
  {
    icon: Database,
    title: "CRM Integration",
    description:
      "Deep, bidirectional integrations with Salesforce, HubSpot, Zoho, and custom CRM platforms. We ensure your data flows seamlessly, your pipelines stay updated, and your team has real-time insights.",
    features: [
      "Salesforce & HubSpot connectors",
      "Automated lead scoring",
      "Pipeline sync & reporting",
      "Custom field mapping",
    ],
    tags: ["Salesforce", "HubSpot", "Zoho"]
  },
  {
    icon: MessageSquare,
    title: "Conversational AI",
    description:
      "Advanced AI-powered chat systems for WhatsApp, Telegram, and web platforms. These go beyond simple chatbots to deliver truly intelligent, context-aware conversations.",
    features: [
      "WhatsApp Business API",
      "Context memory & personalization",
      "Multi-language support",
      "Handoff to human agents",
    ],
      tags: ["WhatsApp", "Telegram", "Customer Engagement"]
  },
  {
    icon: Zap,
    title: "API Development & Integration",
    description:
      "Custom API development that connects your internal systems, third-party services, and AI models into a unified, automated ecosystem.",
    features: [
      "RESTful & GraphQL APIs",
      "Webhook orchestration",
      "Rate limiting & security",
      "Comprehensive documentation",
    ],
    tags: ["Custom Integrations", "Internal Tools", "SaaS Platforms"]
  },
  {
    icon: BarChart3,
    title: "Data Analytics & Reporting",
    description:
      "Automated reporting pipelines that gather, process, and visualize your business data. Get actionable insights delivered to your inbox or dashboard without lifting a finger.",
    features: [
      "Automated data collection",
      "Custom dashboard creation",
      "Scheduled report generation",
      "Predictive analytics",
    ],
    tags: ["Data Visualization", "Business Intelligence", "Predictive Analytics"]
  },
]

export default function ServicesPage() {
  return (
    <div className="flex flex-col pt-20">
      {/* Hero */}
      <section className="relative overflow-hidden py-24">
        <div className="absolute top-1/3 left-1/3 h-[500px] w-[500px] rounded-full bg-primary/5 blur-[120px] glow-pulse" />
        <div className="relative mx-auto max-w-7xl px-6 text-center">
          <h1 className="text-balance text-4xl font-bold text-foreground md:text-6xl">
            Our <span className="text-primary">Services</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
            Comprehensive AI automation solutions designed to transform every aspect
            of your business operations.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="border-t border-border/50 bg-card/50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="group rounded-xl border border-border/50 bg-card p-8 transition-all duration-300 hover:border-primary/30 hover:shadow-[0_0_40px_rgba(85,107,47,0.12)] hover:-translate-y-1"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/20">
                  <service.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="mb-3 text-xl font-bold text-foreground">{service.title}</h3>
                <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
  {service.tags && service.tags.map((tag) => (
    <span 
      key={tag} 
      className="px-2 py-0.5 text-[10px] uppercase tracking-wider font-bold border border-[#808b4d]/40 bg-[#808b4d]/10 text-[#a3b18a] rounded"
    >
      {tag}
    </span>
  ))}
</div>
                <ul className="flex flex-col gap-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-balance text-3xl font-bold text-foreground md:text-4xl">
            {"Don't See What You Need?"}
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            We build custom solutions for unique challenges. Reach out and tell us
            what you need automated, and we will make it happen.
          </p>
          <Link
            href="/contact"
            className="group mt-8 inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-[0_0_30px_rgba(85,107,47,0.3)]"
          >
            Start a Conversation
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </div>
  )
}
