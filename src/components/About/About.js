import React from 'react';
import { css } from 'aphrodite';
import Fade from 'react-reveal/Fade';

import { styles } from './styles';

const technologies = [ 'Responsive Development', 'Cross-Browser Development', 'Git', 'Photoshop', 'JavaScript (ES6+)', 'React', 'Redux', 'HTML & S(CSS)' ];

const About = () => {
    return (
        <div className={ css( styles.about ) }>
            <div className={ css( styles.section ) }>
                <div className={ css( styles.text ) }>
                    <div className={ css( styles.titleWrap ) }><h2 className={ css( styles.title ) }>About</h2></div>
                    <div className={ css( styles.paragraphWrap ) }>
                        <p className={ css( styles.paragraph ) }>I'm a Front End Software Engineer with <b>6+ years</b> of professional development experience and a background in design. Currently looking for contract/remote work. Strengths are in client facing product development with focus on clean and reusable code and components, mobile and cross browser functionality, and product and design team collaboration. I have an eye for beautiful design, love of team bonding, a severe coffee addiction, and a passion for high quality, well built, pixel perfect projects. When I'm not developing you can find me baking, blogging, or exploring the glorious city of SF.</p>
                    </div>
                    <h3 className={ css( styles.subheading ) }>Technologies I've worked with:</h3>
                    <ul className={ css( styles.technologies ) }>
                        { technologies.map( technology => (
                            <li className={ css( styles.technology ) }>
                                <span className={ css( styles.span ) }>{ technology }</span>
                            </li>
                        ) ) }
                    </ul>
                </div>
                <div className={ css( styles.imgWrap ) }>
                    <img className={ css( styles.image ) } src='/portrait-1.jpg' />
                </div>
            </div>
        </div>
    );
};

export default About;