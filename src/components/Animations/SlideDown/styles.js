import { StyleSheet } from 'aphrodite';

const slideInKeyframe = {
    '0%': {
        opacity: 0,
        transform: 'translateY( -20px )',
    },
    '100%': {
        opacity: 1,
        transform: 'translateY( 0px )',
    }
};

const slideOutKeyframe = {
    '0%': {
        opacity: 1,
        transform: 'translateY( 0px )',
    },
    '100%': {
        opacity: 0,
        transform: 'translateY( -20px )',
    }
};

export const styles = StyleSheet.create({
    base: {
        opacity: 0,
        transform: 'translateY( -20px )',
        animationFillMode: 'forwards',
        '-webkit-animation-timing-function': 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    },

    slideIn: {
        animationName: slideInKeyframe,
    },

    slideOut: {
        animationName: slideOutKeyframe,
    },
});