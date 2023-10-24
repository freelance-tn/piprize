import './globals.css'
import type { Metadata } from 'next'
import { ToastProvider } from '@/components/providers/toaster-provider'
import { Roboto } from 'next/font/google'

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Pi Prize',
  description: 'Pi is a new digital currency being developed by a group of Stanford PhDs. For a limited time, you can join the beta to earn Pi and help grow the network.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
    <body className={roboto.className} suppressHydrationWarning>
       <ToastProvider />
       {children}      
    </body>
  </html>    

  )
}
