import React , { useEffect } from 'react';
import { withRouter } from 'react-router';
import { HashLink as Link } from 'react-router-hash-link';
import { css } from 'aphrodite';

import Fade from '../Animations/Fade/Fade';
import SlideDown from '../Animations/SlideDown/SlideDown';

import { styles } from './styles';

const navItems = ['about', 'portfolio'];

const Header = ({ location }) => {
    useEffect(() => {
        if ( !location.hash ) {
            window.scrollTo({ top: 0, behavior: 'smooth' })
        }
    }, [ location ]);

    return (
        <header className={ css( styles.header ) }>
            <Fade show duration={ 1000 }>
                <Link to={ '/' }>
                    <span className={ css( styles.logo ) }>ML</span>
                </Link>
            </Fade>
            <ul className={ css( styles.navigation ) }>
                { navItems.map( ( item, i ) => (
                    <SlideDown show duration={ 600 } delay={ (100 + ((i+1) * 150)) }>
                        <Link to={ `#${ item }` } smooth>
                            <li className={ css( styles.navItem, location.hash.substring(1) === item && styles.selected )}>
                                { item }
                            </li>
                        </Link>
                    </SlideDown>
                ) ) }
                <SlideDown show duration={ 600 } delay={ (100 + ((navItems.length+1) * 150)) }>
                    <a href='mailto:maryelizabethlagier@gmail.com'>
                        <li className={ css( styles.navItem )}>
                            Contact
                        </li>
                    </a>
                </SlideDown>
            </ul>
        </header>
    )
};

export default withRouter( Header );