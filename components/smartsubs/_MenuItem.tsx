import { Home } from 'lucide-react'

const MenuItem = () => {
  return (
    <li className="flex items-center justify-between rounded-md px-4 py-2">
    <div className="flex gap-x-3">
      <Home />
      <p>Inicio</p>
    </div>
    <span className="">chevron</span>
  </li>
  )
}

export default MenuItem