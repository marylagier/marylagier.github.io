import React from 'react';
import { css } from 'aphrodite';

import { styles } from './styles';

const Button = ({
    children,
    theme,
}) => {
    return (
        <a
            className={ css( styles.button, styles[ theme ] ) }
            href='mailto:maryelizabethlagier@gmail.com'
        >
            { children }
        </a>
    );
};

export default Button;