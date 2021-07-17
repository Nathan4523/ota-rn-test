import { StatusBar } from 'expo-status-bar';
import * as Updates from "expo-updates";
import React, { useEffect } from 'react';
import { useState } from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';

export default function App() {
  useEffect(() => {
    async function updateApp() {
      const { isAvailable } = await Updates.checkForUpdateAsync();
      
      if (isAvailable) {
        await Updates.fetchUpdateAsync();
        Alert.alert('O aplicativo está atualizando...', '',  [
          { text: "OK", onPress: async () => {
            await Updates.reloadAsync(); // depende da sua estratégia
          } }
        ]);  
      }
    }
    
    
    updateApp();
  }, []);

  // release de teste - release-channel development
  // release de producao - default
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app - versao 2.1.0</Text>
      <Text>MODO PRODUCAO </Text>
      {/* <Text>MODO DEV </Text> */}
      <StatusBar style="auto" />
    </View>
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
