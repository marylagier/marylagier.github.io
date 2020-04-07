import React, { useEffect, useState } from 'react';
import { css } from 'aphrodite';
import { styles } from './styles';

const Fade = ({ show, children, duration, delay }) => {
    const [ render, setRender ] = useState( show );
    
    useEffect(() => {
        if ( show ) setRender( true );
        if ( !show ) {
            const timer = setTimeout(() => {
                setRender( false );
            }, duration );
            return () => clearTimeout( timer );
        }
    }, [ show ]);

    const defaultStyles = {
        opacity: 0,
        animationDuration: `${ duration }ms`,
        animationDelay: `${ delay }ms`,
        animationFillMode: 'forwards',
    };

    return (
        render && (
            <div
                className={ css( show ? styles.fadeIn : styles.fadeOut )}
                style={ defaultStyles }
            >
                { children }
            </div>
        )
    );
}

Fade.defaultProps = {
    show: true,
    duration: 300,
    delay: 0,
};

export default Fade;