import React from 'react'

export const ItemsCards = ({ img, time, description }) => {
  return (
    <div className="flex  ">
        <div className="w-2/5 h-32  p-1">
            <img  className=" w-full h-24 "src={img} alt="sport-image" />
        </div>
        <div className='flex-col  w-3/5 h-26'>
        <h2 className='text-xs'>{time}</h2>
        <p className='text-xs mt-1 mb-0'> {description}</p>
        <hr className='mt-0'/>
        </div>
       

    </div>
  )
}