import React, { useState } from 'react'
import { useTheme } from '../hooks/useTheme'

export default function Filterbar(props) {
    const [search, setSearch] = useState("")
    const [selectedRegion, setSelectedRegion] = useState("")
    const { mode } = useTheme()

    const handleSearch = e => {
        props.searchByCountry(e)
        setSearch(e)
        setSelectedRegion("")
    }
    const handleSelect = (e) => {
        
        props.fetchByRegion(e);
        setSelectedRegion(e);
        setSearch("")
    }

  return (
    <div className={`flex justify-between p-5 ${mode}`}>
        <form  className='searchform dark:bg-darkModeElements'>
            <img className='opacity-50 h-5' src={mode === 'light' ? "./images/search_black.svg" : "./images/search_white.svg"} alt="search" />
            <input className='text-sm w-full focus:outline-none dark:bg-darkModeElements'
             type="text" 
             placeholder='Search for a country...'
             onChange={(e) => handleSearch(e.target.value)}
             value={search}            
             />
        </form>

        <form className='w-32 sm:w-48 pr-1 overflow-hidden rounded shadow dark:bg-darkModeElements'>
            <select onChange={(e) => {handleSelect(e.target.value)}} value={selectedRegion} className='w-full p-3 dark:bg-darkModeElements' name="countries">
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
