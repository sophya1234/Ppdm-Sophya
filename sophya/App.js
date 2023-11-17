import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContaine, useNavigation} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'; 

function TelaInicial() { 
const navigation= useNavigation();
  return (
    <View style={styles.container}>
      <Text>tela inicial</Text>
      <Button title="Home" onPress={()=>{
        navigation.navigate("Home")
      }}> </Button>
     
       <Button title="Messages" onPress={()=>{
navigation.navigate("Messages")
}}> </Button>
<Button title="Search" onPress={()=>{
navigation.navigate("Search")
}}> </Button>
<Button title="Profile" onPress={()=>{
navigation.navigate("Profile")
}}> </Button>
      <StatusBar style="auto" />
    </View>
  );


}


function TelaMessages() { 

  return (
    <View style={styles.container}>
      <Text>tela messages</Text>
      <Button title="Home" onPress={()=>{
         navigation.navigate("Home")
      }}> </Button>
<Button title="Messages" onPress={()=>{
navigation.navigate("Messages")
}}> </Button>
<Button title="Search" onPress={()=>{
navigation.navigate("Search")
}}> </Button>
<Button title="Profile" onPress={()=>{
navigation.navigate("Profile")
}}> 
</Button> <Button title="Back" onPress={()=>{
  navigation.navigate("Back")
  }}> </Button>

<StatusBar style="auto" />
    </View>
  );
}


function TelaSearch() { 

  return (
    <View style={styles.container}>
      <Text>tela search</Text>
      <Button title="Home" onPress={()=>{
         navigation.navigate("Home")
  
      }}> </Button>

<Button title="Messages" onPress={()=>{
navigation.navigate("Messages")
}}> </Button>
<Button title="Carinho" onPress={()=>{
navigation.navigate("Carinho")
}}> </Button>
<Button title="Profile" onPress={()=>{
navigation.navigate("Profile")
}}> </Button>
<Button title="Back" onPress={()=>{
navigation.navigate("Back")
}}> </Button>

      
      <StatusBar style="auto" />
    </View>
  );
}
function TelaProfile() { 

  return (
    <View style={styles.container}>
      <Text>tela profile</Text>
      <Button title="Home" onPress={()=>{
         navigation.navigate("Home")
  
      }}> </Button>
<Button title="Messages" onPress={()=>{
navigation.navigate("Messages")
}}> </Button>
<Button title="Search" onPress={()=>{
navigation.navigate("Search")
}}> </Button>
<Button title="Profile" onPress={()=>{
navigation.navigate("Profile")
}}> </Button>
<Button title="Back" onPress={()=>{
navigation.navigate("Back")
}}> </Button>
<Button title="Sign in" onPress={()=>{
navigation.navigate("Home")
}}> </Button>
<Button title="Sign up" onPress={()=>{
navigation.navigate("Signup")
}}> </Button>
<Button title="Forgot password" onPress={()=>{
navigation.navigate("Forgotpassword")
}}> </Button>


      <StatusBar style="auto" />
    </View>
  );
}

function TelaCarinho() { 

  return (
    <View style={styles.container}>
      <Text>tela carinho</Text>
      <Button title="Home" onPress={()=>{
         navigation.navigate("Home")

      }}> </Button>

<Button title="Messages" onPress={()=>{
navigation.navigate("Messages")
}}> </Button>
<Button title="Search" onPress={()=>{
navigation.navigate("Search")
}}> </Button>
<Button title="Profile" onPress={()=>{
navigation.navigate("Profile")
}}> </Button>

<Button title="Back" onPress={()=>{
navigation.navigate("Back")
}}> </Button>

      <StatusBar style="auto" />
    </View>
  );
}

function TelaHome() { 

  return (
    <View style={styles.container}>
      <Text>tela home</Text>
      <Button title="Home" onPress={()=>{
         navigation.navigate("Home")

      }}> </Button>

<Button title="Messages" onPress={()=>{
navigation.navigate("Messages")
}}> </Button>
<Button title="Search" onPress={()=>{
navigation.navigate("Search")
}}> </Button>
<Button title="Profile" onPress={()=>{
navigation.navigate("Profile")
}}> </Button>

<Button title="Back" onPress={()=>{
navigation.navigate("Back")
}}> </Button>

      <StatusBar style="auto" />
    </View>
  );
}


function TelaSignup() { 

  return (
    <View style={styles.container}>
      <Text>tela sign up </Text>
      <Button title="Sign up" onPress={()=>{
         navigation.navigate("Home")

      }}> </Button>

      <StatusBar style="auto" />
    </View>
  );
}
function TelaForgotpassword() { 

  return (
    <View style={styles.container}>
      <Text>tela forgot password </Text>
      <Button title="Sign in" onPress={()=>{
         navigation.navigate("Home")

      }}> </Button>

      <StatusBar style="auto" />
    </View>
  );
}






export default function App() {const Stack = createNativeStackNavigator();
  return(  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={TelaHome} />
      <Stack.Screen name="Cadastro" component={TelaCadastro} />
      <Stack.Screen name="Messages" component={TelaMessages} />
      <Stack.Screen name="Search" component={TelaSearch} />
      <Stack.Screen name="Profile" component={TelaProfile} />
      <Stack.Screen name="Carinho" component={TelaCarinho} />
      <Stack.Screen name="Back" component={TelaInicial} />
      <Stack.Screen name="Sing up" component={TelaSignup} />
      <Stack.Screen name="Forgotpassword" component={TelaForgotpassword} />
    </Stack.Navigator>
  </NavigationContainer>
);
}









const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});