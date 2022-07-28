import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"

export default function Country() {
    const [country, setCountry] = useState(null)
    const [isPending, setIsPending] = useState(true)
    const { id } = useParams()

    const fetchData = async () => {
        setIsPending(true)
        const res = await fetch('https://restcountries.com/v3.1/name/' + id)
        const data = await res.json()
        setCountry(data[0])
        setIsPending(false)
    }

    useEffect(() => {
        fetchData()
    },[]);


    //{!isPending && country.borders && console.log('omo')};

  return ( 
    <div className="h-screen">
        {isPending && <p className='w-screen h-screen text-center text-lg mt-52 font-bold'>Loading...</p>}
        {!isPending &&
        <div>
        <div>
            <Link className=" cursor-pointer flex shadow-lg rounded w-20 ml-3 my-10 items-center px-5 hover:font-bold" to='/'>
                <p>Back</p>
            </Link>
        </div>
            
        <div className="sm:flex">
            <img className="h-96 w-10/12 sm:w-5/12 my-10 sm:mx-5 mx-auto" src={country.flags.png} alt="flag" />
            <div className="my-20 ml-10">
                <h1 className="font-bold text-2xl pb-5 sm:pb-0">{country.name.common}</h1>
                <div className="sm:flex sm:mt-5">
                    <div>
                        <div className="p"><p className="font-bold pr-1">Native Name:</p><p> {Object.values(country.name.nativeName)[0].common}</p></div>
                        <div className="p"><p className="font-bold pr-1">Population:</p><p>{country.population.toLocaleString()}</p></div>
                        <div className="p"><p className="font-bold pr-1">Region:</p><p>{country.region}</p></div>
                        <div className="p"><p className="font-bold pr-1">Sub Region:</p><p>{country.subregion}</p></div>
                        <div className="p"><p className="font-bold pr-1">Capital:</p><p>{country.capital}</p></div>
                    </div>

                    <div className="sm:ml-8 mt-5">
                        <div className="p"><p className="font-bold pr-1">Top Level Domain:</p><p>{country.tld[0]}</p></div>
                        <div className="p"><p className="font-bold pr-1">Currencies:</p>{Object.values(country.currencies)[0].name}</div>
                        <div className="p"><p className="font-bold pr-1">Languages:</p>{Object.values(country.languages).map(l => {return <p className="pr-1" key={l}>{l},</p>})}</div>
                    </div>
                </div>

                <div className="p mt-16">
                    <p className="font-bold">Border Countries:</p>
                    <div className="grid grid-cols-3">{country.borders ? Object.values(country.borders).map(b => {return <p className="pr-1 shadow-inner shadow-gray-400 rounded w-20 ml-3 py-1 my-1 text-center" key={b}>{b}</p>}) : <p className="ml-1">unavailable</p>}</div>
                </div>
            </div>
        </div>
        </div>
        }
    </div>
    )
}
