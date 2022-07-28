import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import CountriesList from "./pages/CountriesList";
import Navbar from "./components/Navbar";
import NotFoundPage from "./pages/NotFoundPage";
import Country from "./pages/Country";

function App() {
  return (
    <div className="App bg-lightModeBg">
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
