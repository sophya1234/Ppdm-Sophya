import { View, Text, StyleSheet, Button, TextInput } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack'
import { useNavigation } from "@react-navigation/native";

/*
Lembre de ao fazer a navegação checar se copiou os seguintes comandos no terminal (na pasta do seu app)
  npm install @react-navigation/native
  npx expo install react-native-screens react-native-safe-area-context 
  npm install @react-navigation/stack
*/

function Cadastro() {
  /* Lembre-se de usar o seguinte comando no inicio do programa
  import { useNavigation } from "@react-navigation/native";*/

  /* Declare const navigation = useNavigation() em todas as telas que terão navegação 
  (Um botão que leva pra alguma tela) */

  const navigation = useNavigation()

  return (
    <View style={style.container}>
      <Text>Hello</Text><Button />
      <TextInput/>
      <TextInput secureTextEntry={true}
      />
      <Button title="Cadastrar" onPress={() => {
        navigation.navigate("Home")
      }}/>
    </View>
    /* Ao usar o Button e o TextInput lembre de usar os seguintes comandos no inicio do prgrama 
    import { Button, TextInput } from "react-native";
    
    <Button title="legenda do Botão" onPress="alguma função que fará a navegação (nesse caso)"/> 
    ## recebe um title = Texto que aparecerá no Botão
    ## recebe um onPress = Fará a navegação entre telas

    <TextInput /> 
    ## Pode receber vários tipos de "alternativas que cada uma fará" o Input ficar de um jeito
    ## uma delas é o secureTextEntry={true} = input de senha
    */
  )
}
function Home() {
  const navigation = useNavigation()
  return (
    <View style={style.container}>
      <Text>Hello</Text>
      <Button title="Voltar"
      onPress={() => {
        navigation.navigate("Cadastro")
      }}/>
    </View>
  )
}

export default function App() {
  /* Lembre-se de que para a navegação funcionar vc precisará importar o createStackNavigator e o NavigationContainer
  Colocar no inicio do programa a seguintes importações 
  ## import { createStackNavigator } from '@react-navigation/stack'
  ## import { NavigationContainer } from "@react-navigation/native";
  
  obrigatóriamente esse código terá que estar no App()
  ## Mude apenas os names e components para que fique de acordo com suas telas
  <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="nome da tela entre aspas" component={nome da função sem aspas} />
        <Stack.Screen name="nome da tela entre aspas" component={nome da função sem aspas />
      </Stack.Navigator>
    </NavigationContainer>
  */
  const Stack = createStackNavigator()
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Cadastro" component={Cadastro} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})