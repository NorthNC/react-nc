import Header from '@/components/Header'
import '../styles/globals.css'
import Footer from '@/components/Footer'
import NavBar from '@/components/NavBar'
import { icons } from 'lucide-react'

export const metadata = {
  title: 'NORTH group',
  description: 'Description of your company website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
      <Header />
      <NavBar />
        {children}
      <Footer />
      </body>
    </html>
  )
}

