import type { Metadata, Viewport } from "next"
import { Inter, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Toaster } from "sonner"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" })

export const metadata: Metadata = {
  title: "Induction.io | AI Automation Agency",
  description:
    "Induction.io - Premier AI Automation Agency founded by Mohammad Ahmad. We build custom bots, CRM integrations, and intelligent automation solutions for global businesses.",
  generator: "v0.app",
  keywords: [
    "AI automation",
    "business automation",
    "custom bots",
    "CRM integrations",
    "Mohammad Ahmad",
    "induction.io",
  ],
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/images/logo-clean.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export const viewport: Viewport = {
  themeColor: "#0f1210",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${geistMono.variable} font-sans antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
        <Toaster
          theme="dark"
          toastOptions={{
            style: {
              background: "#161b17",
              border: "1px solid #2a332b",
              color: "#e8e6e1",
            },
          }}
        />
        <Analytics />
      </body>
    </html>
  )
}
