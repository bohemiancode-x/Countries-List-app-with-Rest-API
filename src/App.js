import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import CountriesList from "./pages/CountriesList";
import Navbar from "./components/Navbar";
import NotFoundPage from "./pages/NotFoundPage";
import Country from "./pages/Country";
import { useTheme } from "./hooks/useTheme";

function App() {
  const { mode } = useTheme();

  return (
    <div className={`App ${mode}`}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<CountriesList />} />
          <Route path="/country/:id" element={<Country />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
