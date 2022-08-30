import { Link } from "react-router-dom"
import { useTheme } from "../hooks/useTheme"


export default function Countrycard({ countries }) {
  const { mode } = useTheme()

  return (
    <div className={`grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-10 px-10 py-5 ${mode}`}>
       {countries.map((country) => (
                <Link key={country.name.official} className="card dark:bg-darkModeElements dark:text-white"  to={`/country/${country.name.common}`}>
              
                    <img className="h-1/2 w-full" src={country.flags.png} alt="" />
                    
                    <div className="py-5 px-3">
                    <h1 className="font-bold pb-4">{country.name.official}</h1>
                        <div className="flex gap-2 text-xs"><p className="font-bold">Population:</p><p>{country.population.toLocaleString()}</p></div>
                        <div className="flex gap-2 text-xs"><p className="font-bold">Region:</p><p>{country.region}</p></div>
                        <div className="flex gap-2 text-xs"><p className="font-bold">Capital:</p><p>{country.capital}</p></div>
                    </div>
               
               </Link>
            ))}
            
    </div>
  )
}
