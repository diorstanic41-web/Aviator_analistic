import './globals.css'
import React from 'react'

export const metadata = {
  title: 'Aviator Analytics AI',
  description: 'Application d\'analyse et de prédiction pour Aviator',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className="bg-slate-900 text-slate-100 min-h-screen">
        {children}
      </body>
    </html>
  )
}
