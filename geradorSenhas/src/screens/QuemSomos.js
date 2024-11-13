// src/screens/QuemSomos.js

import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import LogoPreta from "../img/MigasSecurityPreta.svg"
import LogoBranca from "../img/MigasSecurityBranca.svg"
import { flushSync } from 'react-dom';

const QuemSomos = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Quem Somos</Text>
      </View>
      
      <View style={styles.content}>
        <Image 
          source={LogoBranca}
          style={styles.logo}
        />
        <Text style={styles.description}>
          Bem-vindo ao <Text style={styles.brand}>Migas Security</Text>! Somos uma plataforma dedicada
          a fornecer soluções simples, seguras e eficazes para a criação de senhas robustas.
        </Text>
        <Text style={styles.description}>
          Nosso objetivo é garantir que você possa proteger suas informações pessoais, contas online
          e dados sensíveis com o máximo de segurança, sem precisar se preocupar com a complexidade
          de criar senhas fortes por conta própria.
        </Text>
        <Text style={styles.description}>
          Com o <Text style={styles.brand}>Migas Security</Text>, geradores de senhas automáticos são simples de usar,
          eficientes e asseguram que você sempre tenha a proteção necessária contra ameaças cibernéticas.
        </Text>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>© 2024 LockGen. Todos os direitos reservados.</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
  },
  header: {
    backgroundColor: '#32bada',
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',
  },
  content: {
    padding: 20,
    marginTop: 20,
    display: "flex",
    height: "100%"
  },
  logo: {
    width: 240,
    height: 240,
    alignSelf: 'center',
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    color: '#333',
    marginBottom: 15,
    lineHeight: 24,
  },
  brand: {
    fontWeight: 'bold',
    color: '#32bada',
  },
  footer: {
    marginTop: 30,
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#32bada',
  },
  footerText: {
    color: '#fff',
    fontSize: 14,
  },
});

export default QuemSomos;
