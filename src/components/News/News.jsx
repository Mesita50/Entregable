import React from 'react'

export const News = ({children}) => {
  return (
    <div className="flex flex-col justify-center items-center w-[40%] mb-12 mt-8 p-8 text-white ml-10 border-neon border-3">{children}</div>
  )
}