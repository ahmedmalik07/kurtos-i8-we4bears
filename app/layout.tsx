import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Kurtos I-8 Islamabad - Fresh Chimney Cakes & Cozy Coffee",
  description:
    "Authentic Hungarian chimney cakes (kürtőskalács) baked fresh daily in Islamabad. Build your own with premium coatings, fillings, and toppings.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="antialiased">
      <body>{children}</body>
    </html>
  )
}
