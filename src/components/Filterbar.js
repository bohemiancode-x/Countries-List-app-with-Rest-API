import React, { useState } from 'react'

export default function Filterbar(props) {
    const [search, setSearch] = useState('')

    
    const handleChange = () => {
        
    }
    const handleSubmit = e => {
        e.preventDefault()
        if(search != ''){props.func(search)}
        setSearch('')
    }

  return (
    <div className='flex justify-between p-5'>
        <form onSubmit={handleSubmit} className='flex justify-start gap-4 items-center shadow rounded py-3 pl-4 sm:w-96 w-64'>
            <img className='opacity-50 h-5' src="./images/search_black.svg" alt="search" />
            <input className='text-sm w-full focus:outline-none'
             type="text" 
             placeholder='Search for a country...'
             onKeyUp={handleChange}
             onChange={(e) => setSearch(e.target.value)}
             value={search}            
             />
        </form>

        <form className='w-32 sm:w-48 pr-1 overflow-hidden rounded shadow'>
            <select className='w-full p-3' name="countries">
                <option value="" hidden selected disabled>Filter by Region</option>
                <option value="Africa">Africa</option>
                <option value="America">America</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
            </select>
        </form>
        
    </div>
  )
}
