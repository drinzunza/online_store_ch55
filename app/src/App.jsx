import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Catalog from './pages/Catalog'
import About from './pages/About';

// load bootstrap and icons
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "@fortawesome/fontawesome-free/css/all.min.css";


function App() {

  return (
    <>
      <Navbar></Navbar>

      <Catalog></Catalog>

      <About></About>

      <Footer></Footer>
    </>
  )
}

export default App
