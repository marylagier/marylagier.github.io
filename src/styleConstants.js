import { StyleSheet } from 'aphrodite';

export const $serif = 'Cantata One, serif';
export const $sans = 'Lato, sans-serif';

export const colors = {
    $lightBlue: '#f0f8ff',
    $rust: '#9d4a36',
    $darkrust: '#733628',
};

export const $spacing = 8;

export const fontStyles = {
    h1: {
        fontFamily: $serif,
        fontSize: 60,
    },

    h2: {
        fontFamily: $serif,
        fontSize: 42,
        color: colors.$rust,
        display: 'inline',
        backgroundColor: 'white',
    },

    subheading: {
        fontFamily: $serif,
        fontStyle: 'italic',
        fontSize: 16,
    },

    p: {
        fontFamily: $sans,
        fontSize: 18,
        lineHeight: 1.6,
        maxWidth: 600,
    },
};