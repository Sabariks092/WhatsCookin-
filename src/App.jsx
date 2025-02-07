import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import RecipeDetails from './pages/RecipeDetails';
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import About from './Components/About';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
const App = () => {
  return (
    <>
    <Navbar/>
    <div>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipe/:id" element={<RecipeDetails />} /> 
        <Route path="/about" element={<About/>} />      
      </Routes>
    </Router>
    </div>
    <div id='contact'>
    <Footer/>
    </div>
    </>
  );
};

export default App;
