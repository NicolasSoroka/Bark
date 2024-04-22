import React from 'react'
import ProductDetail from './ProductDetail'
import { motion } from 'framer-motion'

const Articulo = ({ product }) => {
  return (
    <div className='flex relative w-full md:w-auto h-full items-center md:justify-between flex-col py-4 bg-[#D9D9D9]'>
      <h2 className='relative text-3xl border-b border-black tracking-widest'>
        {product.titulo}
      </h2>
      <motion.img
        className='relative object-contain max-h-[900px] h-[400px]'
        src={product.articulo}
        alt={product.alt}
        key={product.name}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      />
      <ProductDetail details={product} />
    </div>
  )
}

export default Articulo
