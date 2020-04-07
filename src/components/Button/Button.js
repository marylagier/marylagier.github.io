import React from 'react';
import { css } from 'aphrodite';

import { styles } from './styles';

const Button = ({
    onClick,
    children,
    theme,
}) => {
    return (
        <button
            className={ css( styles.button, styles[ theme ] ) }
            onClick={ () => onClick() }
        >
            { children }
        </button>
    );
};

export default Button;