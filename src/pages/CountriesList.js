import { useEffect, useState } from 'react'
import { useFetch } from '../hooks/useFetch'
import Countrycard from '../components/Countrycard'
import Filterbar from '../components/Filterbar'

export default function CountriesList(props) {
  const countries = props.countries;
  const isPending = props.isPending;


  return (
    <div>
        <ul className=''>
            <Filterbar searchByCountry={props.searchByCountry} fetchByRegion={props.fetchByRegion} />
            {isPending && <p className='w-screen h-screen text-center text-lg mt-52 font-bold'>Loading...</p>}
            {countries && <Countrycard countries={countries} />}
        </ul>
    </div>
  )
}
