import { Link, Navigate } from "react-router-dom"

const ContactButton = ({text = 'Contacto'}) => {

  return (
    <button className="border border-black bg-white w-[115px] h-[35px] hover:bg-[#9B9B9B] transition-all duration-500	hover:border-zinc-300 hover:text-white">
      <Link className="text-sm font-extrabold uppercase tracking-widest" to='/contacto'>{text}</Link>
    </button>
  )
}

export default ContactButton