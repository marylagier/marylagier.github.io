import React from 'react';
import { css } from 'aphrodite';

import { styles } from './styles';

const Experience = () => {
    return (
        <div className={ css( styles.section ) } id='portfolio'>
            <div className={ css( styles.wrap ) }>
                <h2 className={ css( styles.title ) }><u>Portfolio</u></h2>
                <div className={ css( styles.work ) }>
                    <div className={ css( styles.text ) }>
                        <a href='https://www.reflektive.com/products/performance-suite/11s/' target='_blank'>
                            <h3 className={ css( styles.header ) }>1:1 Product | Reflektive</h3>
                        </a>
                        <p className={ css( styles.description ) }>A new product vertical that facilitates 1:1 relationships between managers and direct reports. I was the team lead for this vertical from conception to successful launch and was responsible for significant extension of our reusable component library as well as establishing best practices for cross-browser and responsive development.</p>
                        <div className={ css( styles.buildWith ) }>
                            <h4 className={ css( styles.built ) }>Built with:</h4>
                            <p className={ css( styles.technologies ) }><span className={ css( styles.technology ) }>React</span>, <span className={ css( styles.technology ) }>Redux</span>, <span className={ css( styles.technology ) }>CSS in JS</span></p>
                        </div>
                        <p className={ css( styles.codelinks ) }>See code examples for this project here: <a className={ css( styles.codelink ) } href='https://gist.github.com/marylagier/fa1911bab3b44c0d08d1843ac873d166' target='_blank'>Gist 1</a>, <a className={ css( styles.codelink ) } href='https://gist.github.com/marylagier/1b122d145e2f3a183ef91217e5fd444b' target='_blank'>Gist 2</a>, <a className={ css( styles.codelink ) } href='https://gist.github.com/marylagier/453301daeb02eb93a47e55b8b0392d36' target='_blank'>Gist 3</a></p>
                    </div>
                    <div className={ css( styles.imgWrap ) }>
                        <a href='https://www.reflektive.com/products/performance-suite/11s/' target='_blank'>
                            <img className={ css( styles.image ) } src='/reflektive-screen.png' />
                        </a>
                    </div>
                </div>
                <div className={ css( styles.work, styles.rightAligned ) }>
                    <div className={ css( styles.text, styles.rightText ) }>
                        <a href='https://web.archive.org/web/20170330120847/https://www.bbh.com/en-us/regulatory-prioritization-matrix' target='_blank'>
                            <h3 className={ css( styles.header ) }>Interactive Chart | <span className={ css( styles.nowrap ) }>Brown Brothers Harriman</span></h3>
                        </a>
                        <p className={ css( styles.description, styles.rightDescription ) }>A dynamic and interactive javascript chart with onclick overlay information about each point and category filtering. Developed in VanillaJS to pull in data and visually render in the appropriate area on the chart. To see a version built with ReactJS, click here.</p>
                        <div className={ css( styles.buildWith ) }>
                            <h4 className={ css( styles.built ) }>Built with:</h4>
                            <p className={ css( styles.technologies ) }><span className={ css( styles.technology ) }>JavaScript</span>, <span className={ css( styles.technology ) }>CSS</span></p>
                        </div>
                        <p className={ css( styles.codelinks ) }>See a personal React example of this project here: <a className={ css( styles.codelink ) } href='http://maryelizabethelliott.com/wine-chart/index.html' target='_blank'>Wine Chart</a></p>
                    </div>
                    <div className={ css( styles.imgWrap, styles.leftImg ) }>
                        <a href='https://web.archive.org/web/20170330120847/https://www.bbh.com/en-us/regulatory-prioritization-matrix' target='_blank'>
                            <img className={ css( styles.image ) } src='/bbh-screen.png' />
                        </a>
                    </div>
                </div>
                <div className={ css( styles.work ) }>
                    <div className={ css( styles.text ) }>
                        <a href='http://marylagier.com/' target='_blank'>
                            <h3 className={ css( styles.header ) }>Wordpress Food Blog | Personal</h3>
                        </a>
                        <p className={ css( styles.description ) }>A WordPress site for my personal use in food blogging and photography portfolio complete with a Recipe Post Type. Check it out to see my personal food recipes, writing and photography!</p>
                        <div className={ css( styles.buildWith ) }>
                            <h4 className={ css( styles.built ) }>Built with:</h4>
                            <p className={ css( styles.technologies ) }><span className={ css( styles.technology ) }>Wordpress</span>, <span className={ css( styles.technology ) }>CSS</span></p>
                        </div>
                    </div>
                    <div className={ css( styles.imgWrap ) }>
                        <a href='http://marylagier.com/' target='_blank'>
                            <img className={ css( styles.image ) } src='/food-screen.png' />
                        </a>
                    </div>
                </div>
                <div className={ css( styles.work, styles.rightAligned ) }>
                    <div className={ css( styles.text, styles.rightText ) }>
                        <a href='https://tomandmary.travel/' target='_blank'>
                            <h3 className={ css( styles.header ) }>Wordpress Travel Blog | Personal</h3>
                        </a>
                        <p className={ css( styles.description, styles.rightDescription ) }>A Wordpress site for my partner and I's worldwide travel adventures. Check it out to hear about our experience quitting our jobs to travel, our best tips and tricks for the places we've visited and to see beautiful travel photography taken by me.</p>
                        <div className={ css( styles.buildWith ) }>
                            <h4 className={ css( styles.built ) }>Built with:</h4>
                            <p className={ css( styles.technologies ) }><span className={ css( styles.technology ) }>Wordpress</span>, <span className={ css( styles.technology ) }>CSS</span></p>
                        </div>
                    </div>
                    <div className={ css( styles.imgWrap, styles.leftImg ) }>
                        <a href='https://tomandmary.travel/' target='_blank'>
                            <img className={ css( styles.image ) } src='/travel-screen.png' />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Experience;