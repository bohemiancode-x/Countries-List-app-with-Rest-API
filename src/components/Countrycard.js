
export default function Countrycard({ countries }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-10 px-10 py-5">
       {countries.map((country) => {
               return <li className="shadow-lg rounded-lg overflow-hidden hover:scale-110 ease-in duration-300 bg-white text-lightModeText" key={country.name.official}>
                    <img className="h-1/2 w-full" src={country.flags.png} alt="" />
                    
                    <div className="py-5 px-3">
                    <h1 className="font-bold pb-4">{country.name.official}</h1>
                        <div className="flex gap-2 text-xs"><p className="font-bold">Population:</p><p>{country.population.toLocaleString()}</p></div>
                        <div className="flex gap-2 text-xs"><p className="font-bold">Region:</p><p>{country.region}</p></div>
                        <div className="flex gap-2 text-xs"><p className="font-bold">Capital:</p><p>{country.capital}</p></div>
                    </div>
               </li>
            })}
    </div>
  )
}
