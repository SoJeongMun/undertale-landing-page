import Footer from './components/ui/Footer'
import Header from './components/ui/Header'
import './styles/globals.css'

export const metadata = {
  title: 'UNDERTALE',
  description: 'UNDERTALE Korean Page',
  icons: {
    icon: { url: '/favicon.ico', type: 'image/ico' },
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
