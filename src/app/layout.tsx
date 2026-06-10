import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Fix My World Cup Tickets - FWC2026 Diagnostic Tool',
  description: 'Crowdsourced troubleshooting wizard for missing, pending, or broken FIFA World Cup 2026 mobile ticket transfers.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50 min-h-screen font-sans text-gray-900 antialiased">
        {children}
      </body>
    </html>
  )
}