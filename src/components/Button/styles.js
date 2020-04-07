import { StyleSheet } from 'aphrodite';
import { $spacing, $serif, colors } from '../../styleConstants';

export const styles = StyleSheet.create({
    button: {
        backgroundColor: 'transparent',
        border: '1px solid transparent',
        outline: 0,
        padding: `${ $spacing * 1.5 }px ${ $spacing * 2 }px`,
        fontFamily: $serif,
        fontSize: 16,
    },

    outline: {
        borderColor: colors.$rust,
        color: colors.$rust,
    },
});