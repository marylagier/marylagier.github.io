import { StyleSheet } from 'aphrodite';
import { fontStyles, $spacing, colors } from '../../styleConstants';

export const styles = StyleSheet.create({
    about: {
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },

    section: {
        width: '100%',
        maxWidth: 800,
        textAlign: 'right',
        position: 'relative',
    },

    titleWrap: {
        marginBottom: $spacing * 2,
    },

    title: {
        ...fontStyles.h2,
    },

    paragraphWrap: {
        float: 'right',
        maxWidth: 600,
        marginBottom: $spacing * 2,
    },

    paragraph: {
        ...fontStyles.p,
        display: 'inline',
        backgroundColor: colors.$lightBlue,
        boxShadow: `-4px 0 0 ${ colors.$lightBlue }`,
    },

    subheading: {
        clear: 'both',
        ...fontStyles.subheading,
        marginBottom: $spacing,
    },

    technologies: {
        columnCount: 2,
        float: 'right',
    },

    technology: {
        fontWeight: 400,
        whiteSpace: 'nowrap',
        marginBottom: 8,
    },

    span: {
        backgroundColor: 'white',
        color: colors.$darkrust,
        padding: '2px',
    },

    text: {
        position: 'relative',
        zIndex: 1,
    },

    imgWrap: {
        position: 'absolute',
        top: 0,
        left: 0,
        maxWidth: 250,
        width: '100%',
        '::before': {
            content: '""',
            display: 'block',
            position: 'absolute',
            border: `2px solid ${ colors.$rust }`,
            width: '100%',
            height: '100%',
            top: 20,
            left: 20,
        },
    },

    image: {
        maxWidth: '100%',
    },
});