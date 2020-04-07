import React, { useEffect, useState } from 'react';
import { css } from 'aphrodite';

import About from './components/About/About';
import Fade from './components/Animations/Fade/Fade';
import Header from './components/Header/Header';
import LoadingScreen from './components/LoadingScreen/LoadingScreen';

import { styles } from './appStyles';

function App() {
  const [ showLoadingScreen, setShowLoadingScreen ] = useState( true );

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoadingScreen( false );
    }, 7300);
    return () => clearTimeout( timer );
  }, []);

  return (
    <div className={ css( styles.app ) }>
      <Fade show={ showLoadingScreen } duration={ 300 }>
        <LoadingScreen />
      </Fade>
      { !showLoadingScreen && (
        <>
          <Header />
          <About />
        </>
      ) }
    </div>
  );
}

export default App;
