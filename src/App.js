import React, { useState, useEffect } from 'react';
import './App.css';

//Components
import Cover from './components/cover/Cover';
import Navbar from './components/navbar/Navbar';
import About from './components/about/About';
import Slider from './components/slider/Slider';
import Info from './components/info/Info';
import Footer from './components/footer/Footer';

function App() {
  const [ scrollHeight, setScrollHeight ] = useState(0);
  const [ lang, setLang ] = useState(false);

  const changeLanguage = () => {
    if (lang) {
      setLang(false);
    } else {
      setLang(true);
    }
  };

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollHeight(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, [ scrollHeight ]);

  return (
    <div className="App">
      <Navbar isScrolling={scrollHeight} changeLanguage={changeLanguage} lang={lang} setLang={setLang} />
      <Cover lang={lang} />
      <About lang={lang} />
      <Slider lang={lang} />
      <Info lang={lang} />
      <Footer lang={lang} />
    </div>
  );
}

export default App;
