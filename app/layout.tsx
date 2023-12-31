import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from "@/components/header/header"
import Footer from "@/components/footer/footer"
import Providers from "./providers"

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Char1ies Portfolio',
  description: 'Char1ies Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="bg-primary">
          <Providers>
            <Header />
            {children}
            <Footer />
          </Providers>
        </div>
      </body>
    </html>
  )
}
