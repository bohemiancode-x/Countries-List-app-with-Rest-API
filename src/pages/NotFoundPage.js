import React from 'react'
import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div className='h-screen flex flex-col w-full items-center pt-10'>
        <p className='font-bold'>This is not the page you are looking for.</p>
        <Link to='/'><p className='cursor-pointer text-red-300 hover:text-blue-400'>Go Home</p></Link>
    </div>
  )
}
