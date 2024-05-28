import React from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";

function Button({title = "Get Started"}) {
  return (
    <div className='w-fit text-zinc-900 px-5 py-2 rounded-3xl bg-white flex items-center gap-1'>
      <span className='text-[0.9vw] font-sans font-medium'>{title}</span>
      <IoIosArrowRoundForward />
    </div>
  )
}

export default Button
