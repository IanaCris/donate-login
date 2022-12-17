import { Dimensions, StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        padding: 15,
        borderBottomWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: Dimensions.get('screen').width,
    },
  
    text_nome: {
        fontSize: 18,
        textAlign: 'right',
    },
    
    text_email: {
        fontSize: 16,
    },
  });