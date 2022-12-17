import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Alert, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Usuario } from '../../model/usuario';

import * as usuarioRepository from "../../services/usuario.repository";
import { ScreenNavigationProp } from '../../Routes';

import styles from './styles';

export default function CadastroPage() {

    const [nome,setNome] = useState("");
    const [email,setEmail] = useState("");
    const [senha,setSenha] = useState("");

    const navigation = useNavigation<ScreenNavigationProp["navigation"]>();

    function sendForm() {
        if (nome.length === 0 || email.length === 0 || senha.length === 0) {
            Alert.alert('Preencha nome, email e senha do novo usuário!');
            return;
        }

        const novoUsuario = {
            nome,
            email,
            senha
        } as Usuario;

        usuarioRepository.addUser(novoUsuario);
        Alert.alert("Cadastro realizado com sucesso");
        navigation.navigate("Listagem", { usuario: {} as Usuario })
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Novo Usuário</Text> 

            <TextInput
                style={styles.form_input}
                value={nome}
                placeholder='Nome do Usuário'
                onChangeText={(nome)=>setNome(nome)}
                autoCorrect={false}
            />
            <TextInput
                style={styles.form_input}
                value={email}
                placeholder='Email' 
                onChangeText={(email) => setEmail(email)}
                autoCapitalize={'none'}
                keyboardType={'email-address'}
                autoCorrect={false}
            />
            <TextInput
                style={styles.form_input}
                value={senha}
                placeholder='Senha' 
                onChangeText={(senha) => setSenha(senha)}
                autoCorrect={false}
            />

            <TouchableOpacity onPress={()=>{sendForm()}}>
                <View style={styles.button}>
                    <Text style={styles.button_label}>Cadastrar</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}