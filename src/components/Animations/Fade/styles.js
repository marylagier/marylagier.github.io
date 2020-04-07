import { StyleSheet } from 'aphrodite';

const fadeInKeyframe = {
    '0%': {
        opacity: 0,
    },
    '100%': {
        opacity: 1,
    }
};

const fadeOutKeyframe = {
    '0%': {
        opacity: 1,
    },
    '100%': {
        opacity: 0,
    }
};

export const styles = StyleSheet.create({
    fadeIn: {
        animationName: fadeInKeyframe,
    },

    fadeOut: {
        animationName: fadeOutKeyframe,
    },
});