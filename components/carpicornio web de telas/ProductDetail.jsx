import React from 'react'

const ProductDetail = ({ details }) => {
  return (
    <div className='flex flex-col relative border-l min-w-[250px] max-w-[700px] md:max-h-[150px] h-[150px] md:h-[130px] '>
      <div className='flex flex-col w-full h-full border-l-[2px] border-black text-base'>
        <p className='pb-1 px-4'>{details.titulo}</p>
        <p className='w-full pl-4 py-1 border-t-[2px] border-black pr-4'>
          {details.desc}
        </p>
        <p className='w-full pl-4 py-1 border-t-[2px] border-black pr-4'>
          {details.oz}
        </p>
        <p className='w-full pl-4 pt-1 border-t-[2px] border-black pr-4'>
          {details.color}
        </p>
        <span className='flex rounded-full bg-black w-[7px] h-[7px] absolute -left-[3px] top-0'></span>
        <span className='flex rounded-full bg-black w-[7px] h-[7px] absolute -left-[3px] bottom-0'></span>
      </div>
    </div>
  )
}

export default ProductDetail

