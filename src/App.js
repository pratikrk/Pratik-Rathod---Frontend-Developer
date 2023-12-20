import "./App.css";
import Banner from "./Components/Banner/Banner";
import ShowData from "./Components/Filter/ShowData";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <Banner />
      <ShowData />
      <Footer />
    </div>
  );
}

export default App;
