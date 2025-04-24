import React, {useContext} from "react";
import HeroSection from "./components/HeroSection"; 
import { Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import BuyCredit from "./pages/BuyCredit";
import Result from "./pages/Result";
import ImageGen from "./ImageGen.jsx";
import Login from './components/Login';
import Gemini from './components/GeminiApp/GeminiAPK';
import { AppContext } from './context/AppContext';



const App = () => {
  const {showlogin}=useContext(AppContext);
  // 
  
  return (
    <section className="text-white min-h-screen w-full">
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/home" element={<Home />} />
        <Route path="/result" element={<Result />} />
        <Route path="/buy" element={<BuyCredit />} />
        <Route path="/ImageGen" element={<ImageGen />} />
        <Route path="/Gemini" element={<Gemini />} />

      </Routes>
      {showlogin && <Login/>}


      
    </section>
  );
};

export default App;
