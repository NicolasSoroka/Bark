import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ProductModal from './ProductModal'
import { useState } from 'react'
import useEscapeKey from '../hooks/useEscapeKey'
import products from './data.json'
import Muestra from './Muestra'

const MobileGallery = ({filter}) => {
  const [isModalShown, setIsModalShown] = useState(false)
  const [amountToShow, setAmountToShow] = useState(5)

  const [selectedProduct, setSelectedProduct] = useState({
    name: 'CARNABY',
    articulo: '/assets/products/articulos/CARNABY.png',
    muestra: '/assets/products/muestras/CARNABY.png',
    titulo: "Carnaby",
    oz: "70% CO 28% PES 2% PUE",
    desc: "7.5 oz / Cetim / 1.37m útil",
    color: "Intense Black",
  })

  const filteredProducts = products.filter( item => item.category === Number(filter))
  useEscapeKey(() => setIsModalShown(false))

  const handleModal = element => {
    setIsModalShown(prev => !prev)
    setSelectedProduct(element)
  }

  return (
    <>
      <ul className='flex md:hidden flex-col gap-y-4 overflow-y-scroll no-scrollbar bg-[#D9D9D9] items-center w-full py-6 z-auto'>
        {filteredProducts.map((element, index) => {
          if (index >= amountToShow) return
          else {
            return (
              <Muestra
                src={element.muestra}
                alt={element.name}
                key={element.name}
                name={element.titulo}
                pos={index}
                fixedRate={true}
                onClick={() => {
                  handleModal(element)
                }}
              />
            )
          }
        })}

        {filteredProducts.length - amountToShow > 0 && (
          <button
            className='border border-black bg-white w-[115px] h-[35px] hover:bg-[#9B9B9B] transition-all duration-500	hover:border-zinc-300 hover:text-white text-sm font-extrabold uppercase tracking-widest'
            onClick={() => setAmountToShow(prev => prev + 5)}
          >
            Ver mas
          </button>
        )}
      </ul>
      <AnimatePresence>
        {isModalShown && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <ProductModal article={selectedProduct} handleClose={handleModal} />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default MobileGallery
