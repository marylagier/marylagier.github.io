import { StyleSheet } from 'aphrodite';
import { $spacing, $serif, colors } from '../../styleConstants';

export const styles = StyleSheet.create({
    button: {
        backgroundColor: 'transparent',
        border: `1px solid ${ colors.$rust }`,
        color: colors.$rust,
        outline: 0,
        padding: `${ $spacing * 1.5 }px ${ $spacing * 2 }px`,
        fontFamily: $serif,
        fontSize: 16,
        cursor: 'pointer',
        transition: 'all 300ms',

        ':hover': {
            backgroundColor: colors.$darkrust,
            borderColor: colors.$darkrust,
            color: 'white',
        },
    },
});