import CountriesList from "./components/CountriesList";
import Filterbar from "./components/Filterbar";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App bg-lightModeBg">
      <Navbar />
      <Filterbar />
      <CountriesList />
    </div>
  );
}

export default App;
