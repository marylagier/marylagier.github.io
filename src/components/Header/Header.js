import React from 'react';
import { css } from 'aphrodite';

import Fade from '../Animations/Fade/Fade';
import SlideDown from '../Animations/SlideDown/SlideDown';

import { styles } from './styles';

const navItems = ['About', 'Experience', 'Portfolio', 'Contact'];

const Header = ({ navIndex }) => {
    return (
        <header className={ css( styles.header ) }>
            <Fade show duration={ 1000 }>
                <span className={ css( styles.logo ) }>ML</span>
            </Fade>
            <ul className={ css( styles.navigation ) }>
                { navItems.map( ( item, i ) => (
                    <SlideDown show duration={ 600 } delay={ (100 + ((i+1) * 150)) }>
                        <li className={ css( styles.navItem, navIndex === i && styles.selected )}>
                            { navItems[ i ] }
                        </li>
                    </SlideDown>
                ) ) }
            </ul>
        </header>
    )
};

Header.defaultProps = {
    navIndex: null,
};

export default Header;