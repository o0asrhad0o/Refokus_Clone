import React from 'react'

function Footer() {
  return (
    <div className='w-full text-white pb-20 '>
      <div className='max-w-screen-xl m-auto  flex gap-1'>
        <div className='left basis-1/2'>
            <div className='left-top text-[10rem] font-sans font-semibold leading-none tracking-tight mb-10'>refokus.</div>
            <div className='flex gap-7'>
            {["Privacy Policy", "Cookie Policy", "Impressum", "Terms"].map((items, index) => <a key={index} href='#' className='left-bottom text-xs font-light text-zinc-400'>{items}</a>)}
            </div>

        </div>

        <div className='right basis-1/2 pl-32 flex items-start'>
            <div className='basis-1/4 text-sm text-zinc-500 flex flex-col gap-2'>
                <h3 className='mb-5'>Socials</h3>
                {["Instagram", "Twitter (X?)", "LinkdIn"].map((items, index) =>  <a key={index} href='#'>{items}</a>)}
            </div>

            <div className='basis-1/4 text-sm text-zinc-300 font-thin flex flex-col gap-2'>
                <h3 className='mb-5 text-zinc-500'>Sitemap</h3>
                {["Home", "Work", "Career", "Contact"].map((items, index) => <a key={index}>{items}</a>)}
            </div>

            <div className='basis-1/2 mt-10 flex flex-col items-end gap-5'>
                <p className='text-sm text-right text-zinc-300'>Refokus is a pioneering digital agency driven by design and empowered by technology.</p>
                <button className="px-3 py-2 font-semibold text-xs bg-blue-700 rounded-sm">Enterprise Partner</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
