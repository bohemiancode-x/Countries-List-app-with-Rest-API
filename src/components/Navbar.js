import React from 'react'

export default function Navbar() {
  return (
    <div className='flex justify-between p-5 h-20 shadow-lg'>
        <h1 className='font-bold text-lg pl-8'>Where in the world?</h1>
        <div className='flex gap-2 items-center text-sm cursor-pointer hover:font-bold'>
            <img src="./images/darkmode.svg" alt="mode" className='h-5' />
            <p>Dark Mode</p>
        </div>
    </div>
  )
}
