import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable, TextInput, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack'
import { useNavigation } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

function TelaSignup() {
  const navigation = useNavigation();
  const [name, setName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [redigiteSenha, setRedigiteSenha] = React.useState('');
  return (
    <View style={style.container}>
      <Image
        style={style.image}
        source={{
          uri: 'https://i.pinimg.com/236x/c0/75/75/c0757535996f420ab69f1524c489d11b.jpg'
        }} />
      <TextInput
        placeholder="digite seu primeiro nome"
        style={style.input}
        onChangeText={(e) => setName(e)}
        value={name}
      />


      <TextInput
        placeholder="digite seu sobrenome"
        style={style.input}
        onChangeText={(e) => setLastName(e)}
        value={lastName}
      />
      <TextInput
        placeholder="digite seu email"
        keyboardType="email-address"
        style={style.input}
        onChangeText={(e) => setEmail(e)}
        value={email}
      />
      <TextInput
        placeholder="digite sua senha"
        secureTextEntry={true}
        style={style.input}
        onChangeText={(e) => setPassword(e)}
        value={password} />
      <TextInput
        placeholder="redigite sua senha"
        secureTextEntry={true}
        style={style.input}
        onChangeText={(e) => setRedigiteSenha(e)}
        value={redigiteSenha} />

      <Pressable
        onPress={() => {
          navigation.navigate("TabRoutes")
        }}
        style={style.botao}>
        <Text style={style.subtitulo}>Cadastrar</Text>
      </Pressable>
    </View>
  )
}

function TelaHome() {
  return (
    <View style={style.container}>
      <Image
        style={style.imageDois}
        source={{
          uri: 'https://img.freepik.com/fotos-premium/joias-hd-8k-papel-de-parede-banco-de-imagem-fotografica_890746-61863.jpg'
        }} />
      <Pressable style={style.maisInfo}>
        <Text style={style.subtituloDois}>Mais informações</Text>
      </Pressable>
      <Image
        style={style.imageDois}
        source={{
          uri: 'https://www.itabiraprev.com.br/_images_/Natural-ametista-roxa-conjunto-de-j%C3%B3ias-de-noiva-para/2_283328.jpeg'
        }} />
      <Pressable style={style.maisInfo}>
        <Text style={style.subtituloDois}>Mais informações</Text>
      </Pressable>
    </View>
  )
}


function TelaMessages() {
  return (
    <View style={style.container}>
      <View style={{ flex: 1, width: '100%' }}>
        <View style={{ flex: 1, width: '100%', marginLeft: '20%', flexDirection: 'row' }}>
          <Image
            style={style.imagemQuatro}
            source={{
              uri: 'https://www.ima.sc.gov.br/images/stories/chat.png'
            }} />
          <Text style={style.subtitulo}>Olá, qual produtos temos pra hoje?</Text>
        </View>
        <View style={{ flex: 1, width: '100%', marginRight: '20%', flexDirection: 'row' }}>
          <Image
            style={style.imagemQuatro}
            source={{
              uri: 'https://www.ima.sc.gov.br/images/stories/chat.png'
            }} />
          <Text style={style.subtitulo}>Oi, temos de 10, de 20 e de 30R$</Text>
        </View>
        <View style={{ flex: 1, width: '100%', marginLeft: '20%', flexDirection: 'row' }}>
          <Image
            style={style.imagemQuatro}
            source={{
              uri: 'https://www.ima.sc.gov.br/images/stories/chat.png'
            }} />
          <Text style={style.subtitulo}>Me vê um de 30 chefe</Text>
        </View>
        <View style={{ flex: 1, width: '100%', flexDirection: 'row' }}>
          <Image
            style={style.imagemQuatro}
            source={{
              uri: 'https://www.ima.sc.gov.br/images/stories/chat.png'
            }} />
          <Text style={style.subtitulo}>Boa, obrigado pela preferência</Text>
        </View>
      </View>
    </View>
  )
}


function TelaSearch() {
  const [serc, setSerc] = useState('')
  return (
    <View style={style.container}>
      <TextInput 
      style={style.input}
      placeholder='Pesquise nossos produtos'
      placeholderTextColor='black'
      value={serc}
      onChangeText={(e) => setSerc(e)}/>
    </View>
  )
}


function TelaCarinho() {
  const [pes, setPes] = useState('')
  return (
    <View style={style.container}>
      <TextInput
        value={pes}
        onChangeText={(e) => setPes(e)}
        style={style.input}
        placeholder='Procure seus produtos'
        placeholderTextColor='black' />
      <View style={{ flexDirection: 'row', flex: 1, width: '100%', justifyContent: 'center', alignItems: 'center', gap: 20 }}>
        <Image
          style={style.imagemTres}
          source={{
            uri: 'https://img.freepik.com/fotos-premium/joias-douradas-roxas_616652-3921.jpg'
          }} />
        <Image
          style={style.imagemTres}
          source={{
            uri: 'https://www.goldenclasssemijoias.com.br/blog/wp-content/uploads/2015/09/Semi-Joias-Atacado.jpg'
          }} />
        <Image
          style={style.imagemTres}
          source={{
            uri: 'https://media.istockphoto.com/id/1338646661/pt/foto/gold-jewelry-diamond-rings-show-in-luxury-retail-store-window-display-showcase.jpg?s=612x612&w=0&k=20&c=8uyKDciZmhnia-ZehC06M810kk8cF_BJy4c0J3rhzAE='
          }} />
      </View>
    </View>
  )
}


function TabRoutes() {
  const Tab = createBottomTabNavigator()
  return (
    <Tab.Navigator screenOptions={{
      tabBarStyle: {
        backgroundColor: '#9400d3',
      },
      tabBarLabelStyle: {
        color: 'white'
      }
    }}>
      <Tab.Screen
        name='Home'
        component={TelaHome}
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <MaterialCommunityIcons color='white' name='home' size={26} />
          )
        }} />
      <Tab.Screen
        name='Messages'
        component={TelaMessages}
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <MaterialCommunityIcons color='white' name='chat' size={26} />
          )
        }} />
      <Tab.Screen
        name='Carrinho'
        component={TelaCarinho}
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <MaterialCommunityIcons color='white' name='cart' size={26} />
          )
        }} />
      <Tab.Screen
        name='Search'
        component={TelaSearch}
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <MaterialCommunityIcons color='white' name='card-search' size={26} />
          )
        }} />
    </Tab.Navigator>
  )
}

export default function App() {
  const Stack = createStackNavigator()
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='TabRoutes'>
        <Stack.Screen
          name="TelaSignup"
          component={TelaSignup}
          options={{
            headerShown: false
          }} />
        <Stack.Screen
          component={TabRoutes}
          name='TabRoutes'
          options={{
            headerShown: false
          }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}


const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#46295A'
  },
  titulo: {
    fontSize: 50,
  },
  input: {
    height: 60,
    margin: 15,
    width: '20%',
    borderWidth: 1,
    padding: 10,
    fontSize: 20,
    backgroundColor: 'white',
    borderRadius: 5
  },
  botao: {
    backgroundColor: '#9400d3',
    height: 60,
    width: '15%',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20
  },
  subtitulo: {
    fontSize: 30,
    color: 'white'
  },
  image: {
    width: '20%',
    height: '40%',
    borderRadius: '100%'
  },
  maisInfo: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 5,
    width: '20%',
    height: 50,
    margin: 20
  },
  subtituloDois: {
    fontSize: 20,
    color: 'black'
  },
  imageDois: {
    width: '20%',
    height: '40%',
    borderColor: 'white',
    borderWidth: 2
  },
  imagemTres: {
    width: '15%',
    height: '25%',
    borderColor: 'white',
    borderWidth: 2
  },
  imagemQuatro: {
    width: '10.5%',
    height: '85%',
  }
})
