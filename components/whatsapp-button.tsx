"use client"

import { MessageCircle } from "lucide-react"

const WHATSAPP_URL =
  "https://wa.me/9203435050786?text=Hi%20Ahmad%2C%20I%20saw%20your%20agency%20induction.io.%20I%27d%20like%20to%20automate%20some%20of%20my%20business%20processes.%20Tell%20me%20more."

export function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-sm font-semibold text-white shadow-lg transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(37,211,102,0.4)]"
      aria-label="Start Automating via WhatsApp"
    >
      <MessageCircle className="h-5 w-5" />
      <span className="hidden sm:inline">Start Automating</span>
    </a>
  )
}
