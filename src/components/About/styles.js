import { StyleSheet } from 'aphrodite';
import { $serif, $sans, $spacing, colors } from '../../styleConstants';

export const styles = StyleSheet.create({
    aboutSection: {
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },

    intro: {
        fontFamily: $serif,
        fontStyle: 'italic',
        fontSize: 16,
        marginBottom: $spacing,
    },

    headlines: {
        margin: `${ $spacing }px 0px ${ $spacing * 2 }px`,
        lineHeight: 1.5,
    },

    headline: {
        fontFamily: $serif,
        fontSize: 42,
        color: colors.$rust,
        display: 'inline',
        backgroundColor: 'white',
    },

    subtitle: {
        color: colors.$darkrust,
    },

    about: {
        fontFamily: $sans,
        fontSize: 18,
        lineHeight: 1.6,
        marginBottom: $spacing * 3,
        maxWidth: 500,
    }
});