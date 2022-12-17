import { Dimensions, StyleSheet } from 'react-native';


export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E2EEEC',
        alignItems: 'center',
        justifyContent: 'center',
    },
    form_img: {
        height: '30%',
        marginBottom: 40
    },
    form_input: {
        backgroundColor: '#fff',
        paddingHorizontal: 20,
        paddingVertical: 15,
        borderRadius: 10,
        alignSelf: 'stretch',
        marginBottom: 15,
        marginHorizontal: 20,
        fontSize: 16,
    },
    button: {
        padding: 20,
        borderRadius: 10,
        backgroundColor: '#277A59',
        alignSelf: 'stretch',
        margin: 15,
        marginHorizontal: 20,
    },
    button_label: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
        textAlign: 'center',
    }
});