import React, { useEffect, useState } from 'react';
import { css } from 'aphrodite';

import About from './components/About/About';
import Fade from './components/Animations/Fade/Fade';
import Header from './components/Header/Header';
import Intro from './components/Intro/Intro';
import LoadingScreen from './components/LoadingScreen/LoadingScreen';
import Social from './components/Social/Social';

import { styles } from './appStyles';

function App() {
  const [ showLoadingScreen, setShowLoadingScreen ] = useState( false );

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setShowLoadingScreen( false );
  //   }, 7300);
  //   return () => clearTimeout( timer );
  // }, []);

  return (
    <div className={ css( styles.app ) }>
      <Fade show={ showLoadingScreen } duration={ 300 }>
        <LoadingScreen />
      </Fade>
      { !showLoadingScreen && (
        <>
          <Header />
          <Social />
          <Intro />
          <About />
        </>
      ) }
    </div>
  );
}

export default App;
