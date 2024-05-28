import React from 'react'

function Stripe({val}) {
  return (
    <div className='w-[16.66%] px-6 py-5 border-t-[1.2px] border-b-[1.2px] border-r-[1.2px] border-zinc-600 flex items-center justify-between'>
        <img className='h-5' src={val.url} alt="" />
        <span className='text-md font-sans font-bold text-white'>{val.number}</span>
    </div>
  )
}

export default Stripe
