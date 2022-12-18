import { useNavigation, useRoute } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { Button, FlatList, Text, View } from 'react-native';
import UsuarioItem from '../../components/UsuarioItem';

import { Usuario } from '../../model/usuario';
import { ScreenNavigationProp } from '../../Routes';

import * as usuarioRepository from "../../services/usuario.repository";

import styles from './styles';

export default function ListagemPage() {

    const [listUsuarios, setListUsuarios] = useState<Usuario[]>([]);

    const navigation = useNavigation<ScreenNavigationProp["navigation"]>();

    useEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <Button title='Novo' onPress={() => {
                    navigation.navigate("Cadastro", {  })
                }} />
            )
        });
        
        updateList();
    }, [listUsuarios]);

    function updateList() {
        usuarioRepository.listUsers().then(result => setListUsuarios(result));
    }

    return (
        <View style={styles.container}>
            <FlatList 
                data={listUsuarios}
                renderItem={(elem) => <UsuarioItem user={elem.item} />}
            />
        </View>
    );
}