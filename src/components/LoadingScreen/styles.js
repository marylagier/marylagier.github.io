import { StyleSheet } from 'aphrodite';
import { $serif, $sans, fontStyles, $spacing, colors } from '../../styleConstants.js';

const blinking = {
    '0%': {
        borderColor: colors.$rust,
    },

    '50%': {
        borderColor: 'transparent',
    },

    '100%': {
        borderColor: colors.$rust,
    },
};

const fadeIn = {
    '0%': {
        opacity: 0,
    },
    '50%': {
        opacity: 0,
    },
    '100%': {
        opacity: 1,
    }
};

export const styles = StyleSheet.create({
    loadingScreen: {
        backgroundColor: colors.$lightBlue,
        minHeight: '100vh',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },

    textContainer: {
        textAlign: 'center',
        color: colors.$rust,
        animationName: fadeIn,
        animationDuration: '2s',
    },

    title: {
        fontFamily: $serif,
        fontSize: 52,
    },

    subtitle: {
        fontFamily: $sans,
        fontSize: 16,
        fontWeight: 400,
        textTransform: 'uppercase',
        letterSpacing: '0.03em',
        margin: '10px 0px 8px',
    },

    bold: {
        fontWeight: 900,
    },

    dot: {
        margin: `0px ${ $spacing }px`,
    },

    definition: {
        fontSize: 20,
        fontStyle: 'italic',
    },

    typewriter: {
        borderRight: `.15em solid ${ colors.$rust }`,
    },

    typewriter_animate: {
        animationName: blinking,
        animationDuration: '1s',
        animationTimingFunction: 'step-end',
        animationIterationCount: 'infinite',
        animationDelay: 300,
    },
});