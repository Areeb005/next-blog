import './globals.css'
import { Inter } from 'next/font/google'
import { Providers } from "./providers";
import Header from '@/components/header';
import Footer from '@/components/Footer';


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Blog App',
  description: 'blog app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='light'>
      <body className={inter.className}>
        <Providers>
          <div className='px-10 py-10 max-lg:px-4'>
            <Header />
            {children}
          </div>
          <Footer />
        </Providers>
      </body>
    </html >
  )
}
