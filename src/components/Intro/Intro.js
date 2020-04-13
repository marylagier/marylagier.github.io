import React from 'react';
import { css } from 'aphrodite';

import Button from '../Button/Button';
import SlideLeft from '../Animations/SlideLeft/SlideLeft';
import SlideRight from '../Animations/SlideRight/SlideRight';

import { styles } from './styles';

const initialDelay = 900;

const About = () => {
    return (
        <div className={ css( styles.aboutSection ) }>
            <div className={ css( styles.textSection ) }>
                <SlideRight duration={ 600 } delay={ initialDelay + 150 }>
                    <p className={ css( styles.intro ) }>Hey there!</p>
                </SlideRight>
                <div className={ css( styles.headlines ) }>
                    <SlideLeft duration={ 600 } delay={ initialDelay + 300 }>
                        <h2 className={ css( styles.headline, styles.name ) }>I'm Mary Lagier.</h2>
                    </SlideLeft>
                    <SlideRight duration={ 600 } delay={ initialDelay + 450 }>
                        <h2 className={ css( styles.headline, styles.subtitle ) }>I love making the <em><u>internet beautiful</u></em>.</h2>
                    </SlideRight>
                </div>
                <SlideLeft duration={ 600 } delay={ initialDelay + 600 }>
                    <p className={ css( styles.about ) }>I am a software engineer based in San Luis Obispo, CA who knows her way around a CSS file and loves a good component library. I specialize in developing front end <b>web applications</b> and <b>websites</b> with a focus on clean code, reusable UI patterns, responsive develoment and making your product work across all browsers.</p>
                </SlideLeft>
                <SlideRight duration={ 600 } delay={ initialDelay + 750 }>
                    <Button theme='outline'>Say Hello!</Button>
                </SlideRight>
            </div>
        </div>
    );
};

export default About;