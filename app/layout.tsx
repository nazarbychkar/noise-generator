import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
// import localFont from 'next/font/local'
import './globals.css'
// import Navbar from '@/components/ui/navbar'

// const harmond = localFont({src: 'C:\\data\\work\\js\\nextjs\\noise-generator-1\\public\\fonts\\Harmond-SemBdItaCond.otf'})

// const lfont = localFont({
//   src: '../public/fonts/Harmond-SemBdItaCond.otf',
//   variable: '--font-lfont',
// })

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Noise Generator',
  description: 'An app for you to focus, relax, and sleep.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} font-lfont antialiased`}
        >
          {/* <Navbar /> */}
          {children}
        </body>
    </html>
  )
}
