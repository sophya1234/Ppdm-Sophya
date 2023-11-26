import { View, Text, StyleSheet, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack'
import { useNavigation } from "@react-navigation/native";



function TelaInicial() {
 
  const navigation = useNavigation();

  return (
    <View style={style.container}>
      <Text>TelaInicial</Text>
      
      <Button title="Home" onPress={() => {
        navigation.navigate("TelaHome")
      }}/>
      <Button title= "Messages" onPress={() => {
        navigation.navigate("TelaMessages")
      }}/>
      <Button title="Search" onPress={() => {
        navigation.navigate("TelaSearch")
      }}/>
      <Button title="Profile" onPress={() => {
        navigation.navigate("TelaProfile")
      }}/>
    </View>
   
  )
}
function TelaHome() {
  const navigation = useNavigation()
  return (
    <View style={style.container}>
      <Text>Home</Text>
        
      <Button title="Home" onPress={() => {
        navigation.navigate("TelaHome")
      }}/>
      <Button title="Back" onPress={() => {
        navigation.navigate("TelaInicial")
      }}/>

      <Button title= "Messages" onPress={() => {
        navigation.navigate("TelaMessages")
      }}/>
      <Button title="Search" onPress={() => {
        navigation.navigate("TelaSearch")
      }}/>
      <Button title="Profile" onPress={() => {
        navigation.navigate("TelaProfile")
      }}/>


    </View>
  )
}

function TelaMessages () {
    const navigation = useNavigation()
    return (
      <View style={style.container}>
        <Text>messages</Text>
      
     <Button title="Home" onPress={() => {
        navigation.navigate("TelaHome")
      }}/>
      <Button title="Back" onPress={() => {
        navigation.navigate("TelaInicial")
      }}/>

      <Button title= "Messages" onPress={() => {
        navigation.navigate("TelaMessages")
      }}/>
      <Button title="Search" onPress={() => {
        navigation.navigate("TelaSearch")
      }}/>
      <Button title="Profile" onPress={() => {
        navigation.navigate("TelaProfile")
      }}/>

      </View>
    )
  }

  function TelaSearch () {
    const navigation = useNavigation()
    return (
      <View style={style.container}>
        <Text>search</Text>
       
        <Button title="Home" onPress={() => {
        navigation.navigate("TelaHome")
      }}/>
      <Button title="Back" onPress={() => {
        navigation.navigate("TelaInicial")
      }}/>

      <Button title= "Messages" onPress={() => {
        navigation.navigate("TelaMessages")
      }}/>
      <Button title="Search" onPress={() => {
        navigation.navigate("TelaSearch")
      }}/>
      <Button title="Profile" onPress={() => {
        navigation.navigate("TelaProfile")
      }}/>
      <Button title="Carrinho" onPress={() => {
        navigation.navigate("TelaCarinho")
      }}/>


      </View>
    )
  }



  function TelaProfile () {
    const navigation = useNavigation()
    return (
      <View style={style.container}>
        <Text>profile</Text>
        <Button title="Home" onPress={() => {
        navigation.navigate("TelaProfile")
      }}/>
      
      <Button title= "Messages" onPress={() => {
        navigation.navigate("TelaProfile")
      }}/>
      <Button title="Search" onPress={() => {
        navigation.navigate("TelaProfile")
      }}/>
      <Button title="Profile" onPress={() => {
        navigation.navigate("TelaProfile")
      }}/>
       <Button title="Sign In" onPress={() => {
        navigation.navigate("TelaHome")
      }}/>
       <Button title="Sign Up" onPress={() => {
        navigation.navigate("TelaSignup")
      }}/> 
      <Button title="Forgot Password" onPress={() => {
        navigation.navigate("TelaForgotpassword")
      }}/>

      </View>
    )
  }

  function TelaCarinho () {
    const navigation = useNavigation()
    return (
      <View style={style.container}>
        <Text>carinho</Text>
       
        <Button title="Home" onPress={() => {
        navigation.navigate("TelaHome")
      }}/>
      <Button title="Back" onPress={() => {
        navigation.navigate("TelaInicial")
      }}/>

      <Button title= "Messages" onPress={() => {
        navigation.navigate("TelaMessages")
      }}/>
      <Button title="Search" onPress={() => {
        navigation.navigate("TelaSearch")
      }}/>
      <Button title="Profile" onPress={() => {
        navigation.navigate("TelaProfile")
      }}/>


      </View>
    )
  }
  function TelaSignup () {
    const navigation = useNavigation()
    return (
      <View style={style.container}>
        <Text>sign up</Text>
       
        <Button title="Sign up" onPress={() => {
        navigation.navigate("TelaHome")
      }}/>
      <Button title="Back" onPress={() => {
        navigation.navigate("TelaInicial")
      }}/>


      </View>
    )
  }  function TelaForgotpassword () {
    const navigation = useNavigation()
    return (
      <View style={style.container}>
        <Text>forgot</Text>
       
        <Button title="Home" onPress={() => {
        navigation.navigate("TelaHome")
      }}/>
      <Button title="Back" onPress={() => {
        navigation.navigate("TelaInicial")
      }}/>

      <Button title= "Messages" onPress={() => {
        navigation.navigate("TelaInicial")
      }}/>
      <Button title="Search" onPress={() => {
        navigation.navigate("TelaInicial")
      }}/>
      <Button title="Profile" onPress={() => {
        navigation.navigate("TelaProfile")
      }}/>

  <Button title="Recuperar" onPress={() => {
        navigation.navigate("TelaHome")
      }}/>
      </View>
    )
  }


export default function App() {
  const Stack = createStackNavigator()
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="TelaInicial" component={TelaInicial} />
        <Stack.Screen name="TelaHome" component={TelaHome} />
        <Stack.Screen name="TelaMessages" component={TelaMessages} />
        <Stack.Screen name="TelaSearch" component={TelaSearch} />
        <Stack.Screen name="TelaProfile" component={TelaProfile} />
        <Stack.Screen name="TelaCarinho" component={TelaCarinho} />
        <Stack.Screen name="TelaSignup" component={TelaSignup} />
        <Stack.Screen name="TelaForgotpassword" component={TelaForgotpassword} />
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