import { StyleSheet } from 'aphrodite';
import { fontStyles, $sans, $spacing, colors } from '../../styleConstants';

export const styles = StyleSheet.create({
    section: {
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },

    wrap: {
        width: '100%',
        maxWidth: 1000,
    },

    title: {
        ...fontStyles.h2,
    },

    work: {
        display: 'grid',
        gridTemplateColumns: 'repeat(24, 1fr)',
        '-webkit-box-align': 'center',
        alignItems: 'center',
        margin: '200px 0px',
        ':first-of-type': {
            marginTop: 100,
        },
    },

    rightAligned: {
        textAlign: 'right',
    },

    text: {
        gridColumn: '1/13',
        gridRow: '1/-1',
        position: 'relative',
        zIndex: 1,
    },

    rightText: {
        gridColumn: '12/-1',
    },

    imgWrap: {
        gridColumn: '12/-1',
        gridRow: '1/-1',
    },

    leftImg: {
        gridColumn: '1/13',
    },

    header: {
        fontFamily: $sans,
        fontSize: 24,
        fontWeight: 700,
        textTransform: 'uppercase',
    },

    description: {
        ...fontStyles.p,
        backgroundColor: 'white',
        padding: $spacing * 2,
        boxShadow: 'rgba(2, 12, 27, 0.7) 0px 10px 30px -15px',
        marginTop: $spacing * 2,
        marginLeft: -$spacing * 2,
    },

    rightDescription: {
        marginLeft: 0,
        marginRight: -$spacing * 2,
    },

    buildWith: {
        marginTop: $spacing * 2,
    },

    built: {
        ...fontStyles.subheading,
        display: 'inline',
        paddingRight: $spacing,
    },

    technologies: {
        display: 'inline',
    },

    technology: {
        backgroundColor: 'white',
        padding: 2,
        color: colors.$darkrust,
        fontWeight: 400,
    },

    nowrap: {
        whiteSpace: 'nowrap',
    },

    codelinks: {
        fontStyle: 'italic',
        fontWeight: 400,
        fontSize: 18,
        marginTop: $spacing,
    },

    codelink: {
        textDecoration: 'underline',
    }
});