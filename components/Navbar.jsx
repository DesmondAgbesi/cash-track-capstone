import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    <div className='flex justify-between px-28 py-3 z-50 sticky top-0'>
      <div className>
        <img src="" alt="" />
        <h1 className='abril  text-xl'>Cash <span className='bg-indigo-500 text-white px-2'>Track</span></h1>
      </div>
      <div>
        <ul className='flex gap-4 font-bold text-gray-400'>
          <li><Link href="/"><a>Home</a></Link></li>
          <li><Link href="/overview"><a>Overview</a></Link></li>
          <li><Link href="daily"><a>Daily</a></Link></li>
         
        </ul>
      </div>
      <div className=''>
        <Link href="/login">
         <button className='bg-indigo-500 py-1 text-center px-5 text-white rounded-md outline-none font-bold text-lg'>sign in </button>
        </Link>
      </div>
      {/* <div className='w-[75%] h-2 bg-indigo-500' style={{borderBottom: "solid 1px rgb(99 102 241)"}}></div> */}
    </div>
  )
}

export default Navbar