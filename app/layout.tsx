import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import NavTop from './components/NavBar/NavTop'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        
        <NavTop/>
        {children}</body>
    </html>
  )
}
