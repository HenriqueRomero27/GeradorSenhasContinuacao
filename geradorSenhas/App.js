import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Modal, Button } from 'react-native';
import { useRouter } from 'expo-router';

// *** NOVO: Importações para Navegação ***
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// *** Fim das Novas Importações para Navegação ***

import SavedPasswords from './src/screens/SavedPasswords'; // *** NOVO: Tela de Senhas Salvas ***
import { ModalPassword } from './src/components/modal/index'; // Componente de Modal já existente

let charset = "abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";

// *** NOVO: Criação do Stack Navigator para as Telas ***
const Stack = createStackNavigator();
// *** Fim da Criação do Stack Navigator ***

function HomeScreen({ navigation }) {
  const [senhaGerada, setSenhaGerada] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [savedPasswords, setSavedPasswords] = useState([]); // *** NOVO: Estado para Senhas Salvas ***

  const router = useRouter();

  function gerarSenha() {
    let senha = "";

    for (let i = 0, n = charset.length; i < 10; i++) {
      senha += charset.charAt(Math.floor(Math.random() * n));
    }

    setSenhaGerada(senha);
    setModalVisible(true);
  }

  // *** NOVO: Função para Salvar Senha e Navegar para Tela de Senhas Salvas ***
  function salvarSenha() {
    setSavedPasswords(prevPasswords => {
      const updatedPasswords = [...prevPasswords, senhaGerada];
      setModalVisible(false); // Fecha o modal após salvar a senha
      return updatedPasswords; // Atualiza o estado de senhas salvas
    });
  }
  // *** Fim da Função de Salvar Senha e Navegar ***

  return (
    <View style={styles.container}>
      <Image
        source={require("./src/img/logo.png")}
        style={styles.logo}
      />

      <Text style={styles.title}>LockGen</Text>

      <TouchableOpacity style={styles.button} onPress={gerarSenha}>
        <Text style={styles.textButton}>Gerar Senha</Text>
      </TouchableOpacity>
      
        <Button title="Ir para Senhas Salvas" onPress={() => navigation.navigate('SavedPasswords', { savedPasswords })} />

      <Modal visible={modalVisible} animationType="fade" transparent={true} >
        <ModalPassword senha={senhaGerada} handleClose={() => setModalVisible(false)} salvarSenha={salvarSenha} /> 
      </Modal>

      <Text style={styles.senha}>{senhaGerada}</Text>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="SavedPasswords" component={SavedPasswords} />
      </Stack.Navigator>
    </NavigationContainer>
  );
  
}
// *** Fim da Configuração da Navegação ***

// Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    marginBottom: 20,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 28,
    marginBottom: 50,
  },
  button: {
    backgroundColor: '#333',
    width: '70%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    padding: 6,
    marginBottom: 25
  },
  textButton: {
    color: '#FFF',
    fontSize: 15,
    fontWeight: 'bold',
  },
  senha: {
    marginTop: 20,
    color: '#333',
    fontSize: 15,
    fontWeight: 'bold',
  },
});
