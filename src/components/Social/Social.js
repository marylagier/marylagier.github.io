import React from 'react';
import { SocialIcon } from 'react-social-icons';
import { css } from 'aphrodite';

import SlideRight from '../Animations/SlideRight/SlideRight';

import { colors } from '../../styleConstants';
import { styles } from './styles';

const size = { height: 25, width: 25 };

const Social = () => {
    return (
        <div className={ css( styles.social ) }>
            <SlideRight duration={ 600 } delay={ 1800 }>
                <div className={ css( styles.icon ) }>
                    <SocialIcon url='https://www.linkedin.com/in/mary-lagier-952b0864/' style={ size } bgColor={ colors.$rust } />
                </div>
            </SlideRight>
            <SlideRight duration={ 600 } delay={ 1950 }>
                <div className={ css( styles.icon ) }>
                    <SocialIcon url='https://github.com/marylagier' style={ size } bgColor={ colors.$rust } />
                </div>
            </SlideRight>
            <SlideRight duration={ 600 } delay={ 2100 }>
                <div className={ css( styles.icon ) }>
                    <SocialIcon url='mailto:maryelizabethlagier@gmail.com' style={ size } bgColor={ colors.$rust } />
                </div>
            </SlideRight>
        </div>
    );
};

export default Social;