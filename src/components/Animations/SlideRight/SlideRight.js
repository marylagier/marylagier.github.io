import React, { useEffect, useState } from 'react';
import { css } from 'aphrodite';
import { styles } from './styles';

const SlideRight = ({ show, children, duration, delay }) => {
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
        animationDuration: `${ duration }ms`,
        animationDelay: `${ delay }ms`,
    };

    return (
        render && (
            <div
                className={ css( styles.base, show ? styles.slideIn : styles.slideOut )}
                style={ defaultStyles }
            >
                { children }
            </div>
        )
    );
}

SlideRight.defaultProps = {
    show: true,
    duration: 300,
    delay: 0,
};

export default SlideRight;