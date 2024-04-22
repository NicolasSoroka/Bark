import igLogo from '/assets/ig.svg'
import fbLogo from '/assets/fb.svg'
import ytLogo from '/assets/yt.svg'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='flex w-full justify-center p-4 bg-slate-400 text-white'>
      <div className='hidden md:flex w-full md:w-[600px] items-center justify-center'>
        <div className='flex flex-col w-full uppercase font-bold gap-y-1 text-xs tracking-widest'>
          <Link to={'/'} className='flex w-[100px]  '>
            home
          </Link>
          <Link to={'/productos'} className='flex w-[100px] '>
            productos
          </Link>
        </div>

        <div className='flex gap-x-3 w-full justify-center'>
          <span className='flex justify-center items-center bg-white rounded-full w-[30px] h-[30px]'>
            <img src={igLogo} alt='ig' className='w-[18px] h-[18px]' />
          </span>
          <span className='flex justify-center items-center pt-2 bg-white rounded-full w-[30px] h-[30px]'>
            <img src={fbLogo} alt='ig' className='w-[24px] h-[24px]' />
          </span>
          <span className='flex justify-center items-center bg-white rounded-full w-[30px] h-[30px]'>
            <img src={ytLogo} alt='ig' className='w-[18px] h-[18px]' />
          </span>
        </div>

        <div className='text-right flex flex-col uppercase items-end font-bold gap-y-1 text-xs tracking-widest w-full'>
          <Link to={'/contacto'} className='flex justify-end w-[100px]'>
            contacto
          </Link>
          <Link to={'/nosotros'} className='flex justify-end w-[100px]'>
            quienes somos
          </Link>
        </div>
      </div>

      <div className='flex flex-col md:hidden w-full'>
        <div className='flex gap-x-4'>
          <div className='flex flex-col gap-y-2'>
            <span className='flex justify-center items-center bg-white rounded-full w-[30px] h-[30px]'>
              <img src={igLogo} alt='ig' className='w-[18px] h-[18px]' />
            </span>
            <span className='flex justify-center items-center pt-2 bg-white rounded-full w-[30px] h-[30px]'>
              <img src={fbLogo} alt='ig' className='w-[24px] h-[24px]' />
            </span>
            <span className='flex justify-center items-center bg-white rounded-full w-[30px] h-[30px]'>
              <img src={ytLogo} alt='ig' className='w-[18px] h-[18px]' />
            </span>
          </div>

          <div className='flex flex-col w-full uppercase justify-center font-bold gap-y-2 text-xs tracking-widest'>
            <Link to={'/contacto'} className='w-[100px]'>
              contacto
            </Link>
            <Link to={'/nosotros'} className='w-[100px]'>
              quienes somos
            </Link>
            <Link to={'/'} className='w-[100px]'>
              home
            </Link>
            <Link to={'/productos'} className='w-[100px] '>
              productos
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
