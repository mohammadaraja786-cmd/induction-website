"use client";
import Link from "next/link";
import { ArrowRight, Bot, Sparkles } from "lucide-react";
// removed unused useRef
import { useInView } from "@/hooks/use-inview";
import { useCountUp } from "@/hooks/use-countup";

export function HeroSection() {
  const [titleRef, titleInView] = useInView<HTMLHeadingElement>({ threshold: 0.12 });
  const [subRef, subInView] = useInView<HTMLParagraphElement>({ threshold: 0.12 });
  const [ctaRef, ctaInView] = useInView<HTMLDivElement>({ threshold: 0.12 });
  const a = useCountUp(50, 900);
  const b = useCountUp(98, 1000);
  const c = useCountUp(24, 1100);

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-20">
      {/* Background glow */}
      <div className="absolute top-1/4 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/8 blur-[120px] glow-pulse" />
      <div className="absolute bottom-1/4 right-1/4 h-[400px] w-[400px] rounded-full bg-primary/5 blur-[100px] glow-pulse" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 text-center">
        {/* Badge */}
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5">
          <Sparkles className="h-4 w-4 text-primary" />
          <span className="text-sm font-medium text-primary">AI-Powered Business Automation</span>
        </div>

        {/* Heading */}
        <h1
          ref={titleRef as any}
          style={{ ['--delay' as any]: '0s' }}
          className={`mx-auto max-w-4xl text-balance text-5xl font-bold leading-tight tracking-tight text-foreground md:text-7xl fade-up ${
            titleInView ? 'is-visible' : ''
          }`}
        >
          Automate your Operations
          <span className="block text-primary">Induce your Growth</span>
        </h1>

        {/* Subheading */}
        <p
          ref={subRef as any}
          style={{ ['--delay' as any]: '0.14s' }}
          className={`mt-6 text-lg text-muted-foreground max-w-2xl mx-auto fade-up ${
            subInView ? 'is-visible' : ''
          }`}
        >
          We design and deploy custom AI solutions to streamline workflows, reduce operational costs, and accelerate growth.
        </p>

        {/* CTAs */}
        <div
          ref={ctaRef as any}
          style={{ ['--delay' as any]: '0.28s' }}
          className={`mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row fade-up ${
            ctaInView ? 'is-visible' : ''
          }`}
        >
          <Link
            href="/contact"
            className="group flex items-center gap-2 rounded-lg bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground transition-transform transform hover:-translate-y-0.5 hover:scale-[1.01] hover:shadow-[0_8px_30px_rgba(85,107,47,0.15)]"
          >
            Schedule a Call
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            href="/services"
            className="flex items-center gap-2 rounded-lg border border-border px-8 py-3.5 text-sm font-semibold text-foreground transition-transform transform hover:-translate-y-0.5"
          >
            <Bot className="h-4 w-4" />
            View Services
          </Link>
        </div>

        {/* Stats */}
        <div className="mx-auto mt-20 grid max-w-3xl grid-cols-1 gap-8 sm:grid-cols-3">
          {[
            { value: `${a}+`, label: 'Automations Delivered', delay: 0.34 },
            { value: `${b}%`, label: 'Client Satisfaction', delay: 0.4 },
            { value: `${c}/7`, label: 'Uptime Guaranteed', delay: 0.46 },
          ].map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center gap-1 fade-up"
              style={{ ['--delay' as any]: `${stat.delay}s` }}
            >
              <span className="text-3xl font-bold text-primary md:text-4xl stat-number">{stat.value}</span>
              <span className="text-sm text-muted-foreground">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
