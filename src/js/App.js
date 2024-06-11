import React, {useState} from 'react';
import '../styles/App.css';
import About from './components/About';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import useSound from "use-sound";
import bubbles from "../sounds/Bubbles.mp3";

function App() {

  const [isChecked, setChecked] =  useState(true);
  const [playOn] = useSound(bubbles, {volume: 0.25});

  const handleMouseOver = () => {
    if(isChecked) {
      playOn();
    }
  }

  const toogleSound = ()=> {
    setChecked(!isChecked);
  }

  return (
    <div className='container'>
      <Header handleMouseOver={handleMouseOver} toogleSound={toogleSound} isChecked={isChecked}/>
      <Hero />
      <About handleMouseOver={handleMouseOver} />
      <Footer />
    </div>
  )
}

export default App;
