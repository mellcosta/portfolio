import './globals.css'
import { League_Spartan } from 'next/font/google'

const LeagueSpartan = League_Spartan({ subsets: ['latin'] })

export const metadata = {
  title: 'Portfolio - Melissa Costa',
  description: 'Portfolio de Melissa Costa',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={LeagueSpartan.className}>{children}</body>
    </html>
  )
}
