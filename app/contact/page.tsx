import type { Metadata } from "next"
import { ContactForm } from "@/components/contact/contact-form"
import { Mail, MapPin, MessageCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "Induction.io | Contact Us",
  description:
    "Get in touch with Induction.io to discuss your AI automation needs. Schedule a call or send us a message.",
}

const WHATSAPP_URL =
  "https://wa.me/9203435050786?text=Hi%20Ahmad%2C%20I%20saw%20your%20agency%20induction.io.%20I%27d%20like%20to%20automate%20some%20of%20my%20business%20processes.%20Tell%20me%20more."

export default function ContactPage() {
  return (
    <div className="flex flex-col pt-20">
      {/* Hero */}
      <section className="relative overflow-hidden py-24">
        <div className="absolute bottom-0 left-1/4 h-[400px] w-[400px] rounded-full bg-primary/5 blur-[100px] glow-pulse" />
        <div className="relative mx-auto max-w-7xl px-6 text-center">
          <h1 className="text-balance text-4xl font-bold text-foreground md:text-6xl">
            {"Let's"} <span className="text-primary">Connect</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
            Ready to automate your business? Send us a message and we will get back
            to you within 24 hours.
          </p>
        </div>
      </section>

      {/* Form & Info */}
      <section className="border-t border-border/50 bg-card/50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col gap-12 lg:flex-row lg:gap-16">
            {/* Contact Form */}
            <div className="flex-1">
              <div className="rounded-xl border border-border/50 bg-card p-8">
                <h2 className="mb-6 text-2xl font-bold text-foreground">Send a Message</h2>
                <ContactForm />
              </div>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col gap-6 lg:w-80">
              <div className="rounded-xl border border-border/50 bg-card p-6">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <MessageCircle className="h-5 w-5 text-primary" />
                </div>
                <h3 className="mb-1 font-semibold text-foreground">WhatsApp</h3>
                <p className="mb-3 text-sm text-muted-foreground">
                  Chat directly for a faster response.
                </p>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-primary transition-colors hover:text-primary/80"
                >
                  +92 343 5050786
                </a>
              </div>

              <div className="rounded-xl border border-border/50 bg-card p-6">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <h3 className="mb-1 font-semibold text-foreground">Email</h3>
                <p className="mb-3 text-sm text-muted-foreground">
                  For detailed proposals and inquiries.
                </p>
                <span className="text-sm font-medium text-primary">
                  hello@induction.io
                </span>
              </div>

              <div className="rounded-xl border border-border/50 bg-card p-6">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <h3 className="mb-1 font-semibold text-foreground">Global</h3>
                <p className="text-sm text-muted-foreground">
                  We serve clients worldwide. Remote-first, results-driven.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
