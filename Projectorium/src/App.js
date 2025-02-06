import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Footer from './components/footer/footer.js';
import Header from './components/header/header.js';
import ProjectZoom from './components/ProjectZoom/ProjectZoom.js';
import Home from './pages/Home';
import ProjectDetails from './pages/ProjectDetails';
import SignIn from './pages/SignIN';
import Signup from './pages/SignUp';
function App() { 
  return (
  <>
   <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProjectDetails />} />
          <Route path="/cart" element={<ProjectZoom />} />
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/Signup" element={<Signup />} />
        </Routes>
         <Footer />
    </BrowserRouter>
  </>
  );
}

export default App;
