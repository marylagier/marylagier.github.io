import { StyleSheet } from 'aphrodite';
import { $serif, $sans, $spacing, colors, fontStyles } from '../../styleConstants';

export const styles = StyleSheet.create({
    aboutSection: {
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },

    intro: {
        ...fontStyles.subheading,
        marginBottom: $spacing,
    },

    headlines: {
        margin: `${ $spacing }px 0px ${ $spacing * 2 }px`,
        lineHeight: 1.5,
    },

    headline: {
        ...fontStyles.h2,
    },

    subtitle: {
        color: colors.$darkrust,
    },

    about: {
        ...fontStyles.p,
        marginBottom: $spacing * 3,
        maxWidth: 500,
    }
});