import Header from '@/components/Header'
import './globals.css'
import { Podkova } from 'next/font/google'
import Footer from '@/components/Footer'
import Head from 'next/head'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const podkova = Podkova({ subsets: ['latin'] })

export const metadata = {
  title: 'Portfolio',
  description: 'This portfolio is for introduction',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head>
        <>
          <link rel="stylesheet" href="https://demos.creative-tim.com/notus-js/assets/styles/tailwind.css"></link>
          <link rel="stylesheet" href="https://demos.creative-tim.com/notus-js/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css"></link>
        </>
      </Head>
      <body className={`${podkova.className}`}>
        <Header/>
        <div className='max-w-[1300px] mx-auto'>
          <ToastContainer
            position="top-right"
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
          {children}
        </div>
        <Footer/>
      </body>
    </html>
  )
}
