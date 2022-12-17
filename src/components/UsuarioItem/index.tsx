import { Text, View } from 'react-native';

import { Usuario } from "../../model/usuario";
import styles from './styles';

type Props = { user: Usuario }

export default function UsuarioItem(props: Props) {

    return (
        <View style={styles.container}>
            <Text style={styles.text_nome}>{props.user.nome}</Text> 
            <Text style={styles.text_email}>{props.user.email}</Text>
        </View>
    );
}

