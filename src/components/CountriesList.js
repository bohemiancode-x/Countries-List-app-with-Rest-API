import { useFetch } from '../hooks/useFetch'
import Countrycard from './Countrycard'

export default function CountriesList() {
    const { data } = useFetch('https://restcountries.com/v3.1/all')

  return (
    <div>
        <ul className=''>
            {data && <Countrycard countries={data} />}
        </ul>
    </div>
  )
}
