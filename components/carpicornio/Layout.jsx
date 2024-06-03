import { Link, ScrollRestoration } from 'react-router-dom'
import BurgerMenu from './BurgerMenu'
import ContactButton from './ContactButton'
import Footer from './Footer'
import WhatsappButton from './WhatsappButton'

const Layout = ({ children }) => {
  return (
    <div className='relative flex flex-col w-full'>
      <header className='fixed md:hidden flex h-[200px] flex-col gap-y-2 py-6 w-full bg-white items-center z-50'>
        <Link
          className='text-sm font-extrabold uppercase tracking-widest'
          to='/'
        >
          <img src='./logo.webp' alt='logo_capricornio' />
        </Link>
        <ContactButton />
        <BurgerMenu />
      </header>

      <header className='hidden md:flex h-[100px] z-50 w-full py-6 max-w-[1440px] bg-white items-center justify-evenly m-auto'>
        <div className='flex w-full justify-center'>
        </div>
        <Link
          className='flex m-auto justify-center w-full text-sm font-extrabold uppercase tracking-widest'
          to='/'
        >
          <img src='./logo.webp' alt='logo_capricornio' className='pl-10'/>
        </Link>
        <div className='flex w-full justify-end items-center gap-x-4 pr-12 '>
          <ContactButton />
          <BurgerMenu />
        </div>
      </header>

      <main className='relative mt-[200px] md:m-auto z-auto w-full overflow-x-hidden'>
        {children}
      </main>
      <Footer />
      <WhatsappButton />
      <ScrollRestoration />
    </div>
  )
}

export default Layout
