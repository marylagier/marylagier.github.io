import { StyleSheet } from 'aphrodite';
import { $spacing, colors } from '../../styleConstants';

export const styles = StyleSheet.create({
    social: {
        position: 'fixed',
        top: 0,
        left: 0,
        height: '100vh',
        padding: $spacing * 2,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    },

    icon: {
        margin: `${ $spacing }px 0px`,
        transform: 'translateY( 0px )',
        transition: '300ms ease',

        ':hover': {
            transform: 'translateY( -3px )',
        },
    }
});