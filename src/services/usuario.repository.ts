import AsyncStorage from "@react-native-async-storage/async-storage";
import { Usuario } from "../model/usuario";

const KEY_STORAGE = "@storage_user";

export async function listUsers(): Promise<Usuario[]> {
    const jsonValue = await AsyncStorage.getItem(KEY_STORAGE);
    const value = jsonValue ?  JSON.parse(jsonValue) : [];

    return value;
}

export async function addUser(usuario: Usuario) {
    let usuarios = await listUsers();
    usuarios.push(usuario);
    await AsyncStorage.setItem(KEY_STORAGE, JSON.stringify(usuarios));
}

export async function removeUser(usuario: Usuario) {
    let usuarios = await listUsers();

    usuarios = usuarios.filter(user => user.email !== usuario.email );

    await AsyncStorage.setItem(KEY_STORAGE, JSON.stringify(usuarios));
}

export async function removeAll() {
    await AsyncStorage.getAllKeys()
        .then(keys => AsyncStorage.multiRemove(keys))
        .then(() => alert('success'));;
}

