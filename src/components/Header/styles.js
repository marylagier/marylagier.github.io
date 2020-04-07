import { StyleSheet } from 'aphrodite';
import { colors, $serif, $spacing } from '../../styleConstants';

export const styles = StyleSheet.create({
    header: {
        padding: $spacing * 2,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'fixed',
        width: '100%',
        backgroundColor: colors.$lightBlue,
    },

    logo: {
        fontFamily: $serif,
        fontSize: 32,
        color: colors.$rust,
    },

    navigation: {
        display: 'flex',
        alignItems: 'center',
        marginRight: $spacing,
    },

    navItem: {
        fontWeight: 400,
        textTransform: 'uppercase',
        fontSize: 14,
        color: colors.$rust,
        cursor: 'pointer',
        marginLeft: $spacing * 4,
        overflow: 'hidden',

        ':after': {
            content: '""',
            display: 'block',
            position: 'relative',
            width: '100%',
            border: `1px solid ${ colors.$rust }`,
            transform: 'translateX( 100% )',
            transition: '300ms',
        },

        ':hover': {
            ':after': {
                transform: 'translateX( 0% )',
            },
        },
    },

    selected: {
        fontWeight: 600,
        cursor: 'initial',
        ':after': {
            transform: 'translateX( 0% )',
        },
    },
});