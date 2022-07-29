import React from 'react'
import { useTheme } from '../hooks/useTheme'

export default function Navbar() {
  const { changeMode, mode } = useTheme()

  const toggleMode = () => {
    changeMode(mode === 'dark' ? 'light' : 'dark')
  }

  return (
    <div className={mode === 'light' ? 'nav' : 'nav bg-darkModeElements'}>
        <h1 className='font-bold text-lg pl-8'>Where in the world?</h1>
        <div onClick={toggleMode}  className='flex gap-2 items-center text-sm cursor-pointer hover:font-bold'>
            <img src={ mode === 'dark' ? "./images/light_mode_white.svg" : "./images/darkmode.svg" } alt="mode" className='h-5' />
            <p>{ mode === 'dark' ? 'Light Mode' : 'Dark mode' }</p>
        </div>
    </div>
  )
}
