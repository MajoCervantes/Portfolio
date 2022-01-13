import React from 'react';
import './App.css';

//Components
import Cover from './components/cover/Cover';
import Navbar from './components/navbar/Navbar';
import About from './components/about/About';
import Slider from './components/slider/Slider';
import Info from './components/info/Info';
import Footer from './components/footer/Footer';

//Context
import { LanguageProvider } from "./context/LanguageContext";

function App() {


  return (

    <LanguageProvider>
      <div className="App">
        <Navbar />
        <Cover />
        <About />
        <Slider />
        <Info />
        <Footer />
      </div>
    </LanguageProvider>

  );
}

export default App;
