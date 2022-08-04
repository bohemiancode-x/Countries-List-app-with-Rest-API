import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import CountriesList from "./pages/CountriesList";
import Navbar from "./components/Navbar";
import NotFoundPage from "./pages/NotFoundPage";
import Country from "./pages/Country";
import { useTheme } from "./hooks/useTheme";
import { useEffect, useState } from "react";

const url = "https://restcountries.com/v3.1";

function App() {
  const { mode } = useTheme();
  const [isPending, setIsPending] = useState(true);
  const [countries, setCountries] = useState(null)
  const [error, setError] = useState(null)
 

  useEffect(() => {
    fetchAllCountries()
  },[])

  const fetchAllCountries = async () => {
    try {
      const res = await fetch(`${url}/all`);
      const data = await res.json()
      setIsPending(false);
      setCountries(data)
    } catch (err) {
      console.log(err);
      setError(err)
    }
  }

  const fetchByRegion = (region) => {
    setIsPending(true);
    (async () => {
      try {
        const res = await fetch(`${url}/region/${region}`);
        const data = await res.json()
        setCountries(data)
        setIsPending(false);
      } catch (err) {
        console.log(err);
        setError(err)
      }
    })();
  };

  const searchByCountry = (country) => {
    setIsPending(true);
    if (country === '') {
      fetchAllCountries();
      setIsPending(false);
    } else {
      (async () => {
        try {
          const res = await fetch(`${url}/name/${country}`);
          if(res.status == 404) {
            throw new Error('cannot fetch countries')
          }
          const data = await res.json();
          setCountries(data)
          setIsPending(false);
        } catch (err) {
          console.log(err);
          setIsPending(false)
          setError(err)
        }
      })();
    }
  }

  return (
    <div className={`App ${mode}`}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<CountriesList
                                     countries={countries}
                                      isPending={isPending}
                                        error={error}
                                        fetchByRegion={fetchByRegion}
                                          searchByCountry={searchByCountry}
                                        />
                                      } 
                                    />
          <Route path="/country/:id" element={<Country />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
