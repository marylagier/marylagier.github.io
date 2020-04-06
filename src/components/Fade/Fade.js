import React, { useEffect, useState } from 'react';
import { css } from 'aphrodite';
import { styles } from './styles';

const Fade = ({ show, children, duration }) => {
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

    return (
        render && (
            <div
                className={ css( show ? styles.fadeIn : styles.fadeOut )}
                style={{ animationDuration: `${ duration }ms` }}
            >
                { children }
            </div>
        )
    );
}

Fade.defaultProps = {
    show: true,
    duration: 300, //in miliseconds
};

export default Fade;