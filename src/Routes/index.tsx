import { StackScreenProps } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoginPage from "../pages/Login";
import ListagemPage from "../pages/Listagem";
import CadastroPage from "../pages/Cadastro";
import { Usuario } from "../model/usuario";

export type ScreenNavigationProp = StackScreenProps<{
    Login: undefined,
    Listagem: { usuario: Usuario },
    Cadastro: {}
}>

const Stack = createNativeStackNavigator();

export default function () {

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Login" component={LoginPage} options={{ headerTitle: "Login" }} />
                <Stack.Screen name="Listagem" component={ListagemPage} options={{ headerTitle: "Lista de Usuários" }} />
                <Stack.Screen name="Cadastro" component={CadastroPage} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
