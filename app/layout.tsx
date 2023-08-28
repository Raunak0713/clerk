import { ClerkProvider, SignIn, SignedIn, SignedOut } from '@clerk/nextjs'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import NavBar from '@/components/NavBar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Car',
  description: 'Car',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <SignedIn>
          <NavBar/>
          <body className={inter.className}>{children}</body>
        </SignedIn>
        <SignedOut>
          <SignIn/>
        </SignedOut>
      </html>
    </ClerkProvider>
  )
}
