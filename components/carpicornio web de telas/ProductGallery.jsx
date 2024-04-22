import React, { useState } from 'react'
import products from './data.json'
import Muestra from 'src/components/Muestra'
import Articulo from 'src/components/Articulo'

const ProductGallery = ({ filter }) => {
  const [selectedProduct, setSelectedProduct] = useState({
    name: 'CARNABY',
    articulo: '/assets/products/articulos/CARNABY.png',
    muestra: '/assets/products/muestras/CARNABY.png',
    titulo: "Carnaby",
    oz: "70% CO 28% PES 2% PUE",
    desc: "7.5 oz / Cetim / 1.37m útil",
    color: "Intense Black",
  })

  const filteredProducts = products.filter(
    item => item.category === Number(filter)
  )
  const [isActive, setIsActive] = useState(0)

  return (
    <div className='relative w-full justify-between h-[calc(100vh-100px)] max-h-[calc(100vh-100px)] hidden md:flex bg-[#D9D9D9] overflow-y-hidden'>
      <ul className='flex flex-col gap-y-4 overflow-y-scroll custom-scrollbar items-center bg-[#D9D9D9] w-full max-w-[400px] py-8'>
        {filteredProducts.map((element, index) => {
          if (index > filteredProducts.length / 2) return
          else {
            return (
              <Muestra
                src={element.muestra}
                alt={element.alt}
                name={element.titulo}
                key={element.name}
                pos={index}
                isActive={isActive === index}
                onClick={() => {
                  setIsActive(index)
                  setSelectedProduct(element)
                }}
              />
            )
          }
        })}
      </ul>
      <Articulo product={selectedProduct} />
      <ul className='flex flex-col gap-y-4 overflow-y-scroll custom-scrollbar items-center bg-[#D9D9D9] w-full max-w-[400px] py-8 scrollbar-left-container '>
        {filteredProducts.map((element, index) => {
          if (index <= filteredProducts.length / 2) return
          else {
            return (
              <Muestra
                src={element.muestra}
                alt={element.alt}
                name={element.titulo}
                key={element.name}
                pos={index - filteredProducts.length / 2 - 1}
                isActive={isActive === index}
                onClick={() => {
                  setIsActive(index)
                  setSelectedProduct(element)
                }}
              />
            )
          }
        })}
      </ul>
    </div>
  )
}

export default ProductGallery
