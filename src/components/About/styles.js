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
        display: 'grid',
        gridTemplateColumns: 'repeat(24, 1fr)',
    },

    text: {
        gridColumn: '10/-1',
        gridRow: '1/-1',
        position: 'relative',
        zIndex: 1,
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

    imgWrap: {
        gridColumn: '1/12',
        gridRow: '1/-1',
        position: 'relative',
        '::before': {
            content: '""',
            display: 'block',
            position: 'absolute',
            border: `2px solid ${ colors.$rust }`,
            width: '100%',
            paddingBottom: '125%',
            top: $spacing * 2,
            left: $spacing * 2,
        },
    },

    image: {
        maxWidth: '100%',
    },
});