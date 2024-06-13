import React, { useEffect, useState } from 'react';
import '../styles/App.css';
import Projects from './components/Projects';
// import About from './components/About';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import useSound from "use-sound";
import bubbles from "../sounds/Bubbles.mp3";


function App() {

  const [isChecked, setChecked] = useState(true);
  const [playOn] = useSound(bubbles, { volume: 0.25 });

  const [theme, setTheme] = useState('#F4F4F3');
  const [icon, setIcon] = useState(true);


  // dark mode (#4E4E4E) => false
  // light mode (##F4F4F3) => true

  function handleClick() {
    setIcon(!icon);
    if (icon === false) {
      setTheme('#171C28');
    } else if (icon === true) {
      setTheme('#F4F4F3');
    }
  }

  useEffect(() => {
    if (theme === '#171C28') {
      document.body.style.color = "white"
    } else {
      document.body.style.color = "black"
    }
  })

  function handleMouseOver() {
    if (isChecked) {
      return playOn();
    }
  }

  // sound
  const toogle = () => {
    setChecked(!isChecked);
  }

  // change theme
  useEffect(() => {
    document.body.style.backgroundColor = theme;

  })

  return (
    <div className='container'>
      <Header
        handleMouseOver={handleMouseOver}
        toogle={toogle}
        isChecked={isChecked}
        handleClick={handleClick}
        icon={icon}
      />
      <Hero />
      {/* <About handleMouseOver={handleMouseOver} /> */}
      <Projects />
      <Footer theme={theme}/>
    </div>
  )
}

export default App;
