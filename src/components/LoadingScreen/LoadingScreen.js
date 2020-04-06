import React, { useState, useEffect } from 'react';
import { css } from 'aphrodite';
import { styles } from './styles.js';

const typewriterString = 'a person or thing that develops or innovates';

const LoadingScreen = () => {
    const [ typewriterText, updateTypewriterText ] = useState( '' );
    const [ blinkingCursor, setBlinkingCursor ] = useState( true );

    const typewrite = ( text, i ) => {
        setBlinkingCursor( false );
        if ( i < text.length ) {
            updateTypewriterText( text.substring( 0, i+1 ) );
            setTimeout(() => {
                typewrite( text, i+1 )
            }, 75);
        } else {
            setBlinkingCursor( true );
        }
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            typewrite( typewriterString, 0 );
        }, 2000);
        return () => clearTimeout( timer );
    }, []);

    return (
        <div className={ css( styles.loadingScreen ) }>
            <div className={ css( styles.textContainer ) }>
                <h1 className={ css( styles.title ) }>Mary Lagier</h1>
                <p className={css(styles.subtitle)}><span className={ css(styles.bold)}>Developer<span className={css(styles.dot)}>·</span></span>[dih-vel-uh-per]</p>
                <p className={ css( styles.definition ) }>“<span className={css(styles.typewriter, blinkingCursor && styles.typewriter_animate)}>{ typewriterText }</span>”</p>
            </div>
        </div>
    );
};

export default LoadingScreen;