import { useState } from 'react'
import { useFetch } from '../hooks/useFetch'
import Countrycard from '../components/Countrycard'
import Filterbar from '../components/Filterbar'

export default function CountriesList() {
    const [query, setQuery] = useState('all')

    const PullData = (data) => {
        console.log(`https://restcountries.com/v3.1/name/${data}`);
        if(query !== '')setQuery(`https://restcountries.com/v3.1/name/${data}`)
    }

    // const query = () => {
    //     let query = ''
    //     if(data = ''){
    //         query = 'all'
    //     } else {
    //         query = `name/${data}`
    //     }
    //     return query
    // }

    const { data: countries, isPending } = useFetch('https://restcountries.com/v3.1/' + query)

  return (
    <div>
        <ul className=''>
            <Filterbar func={PullData} />
            {isPending && <p className='w-screen h-screen text-center text-lg mt-52 font-bold'>Loading...</p>}
            {countries && <Countrycard countries={countries} />}
        </ul>
    </div>
  )
}
