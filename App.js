import React from 'react';
import { View, StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Avatar, Input, Icon, Button, Header, Text } from 'react-native-elements';

function Login() {
  return (
    <View style={styles.container}>
      <Avatar
        size={100}
        rounded
        icon={{ name: 'user', type: 'font-awesome', color: '#000' }}
        onPress={() => console.log("Avatar pressionado!")}
        activeOpacity={0.7}
        containerStyle={{ marginBottom: 20 }}
      />

      <Input placeholder='email@email.com' leftIcon={<Icon name='email' size={24} color='black' />} />
      <Input placeholder='Senha' leftIcon={<Icon name='lock' size={24} color='black' />} secureTextEntry={true} />

      <Button title="Login" buttonStyle={styles.button} />
      <Button title="Cadastrar-se" buttonStyle={styles.button} />
      <Button title="Recuperar Senha" type='clear' />
    </View>
  );
}

function Cadastro() {
  return (
    <SafeAreaProvider style={styles.safeArea}>
      <Header
        placement="center"
        centerComponent={{ text: 'Cadastro', style: { color: '#fff', fontSize: 20 } }}
        containerStyle={styles.header}
      />

      <View style={styles.container}>
        <Input placeholder='Nome Completo' leftIcon={<Icon name='user' size={24} color='black' />} />
        <Input placeholder='E-mail' leftIcon={<Icon name='email' size={24} color='black' />} />
        <Input placeholder='Senha' leftIcon={<Icon name='lock' size={24} color='black' />} secureTextEntry={true} />

        <Button title="Cadastrar" buttonStyle={styles.button} />
      </View>
    </SafeAreaProvider>
  );
}

function RecuperarSenha() {
  return (
    <SafeAreaProvider style={styles.safeArea}>
      <Header
        placement="center"
        centerComponent={{ text: 'Esqueceu a senha', style: { color: '#fff', fontSize: 20 } }}
        containerStyle={styles.header}
      />

      <View style={styles.container}>
        <Text style={{ marginBottom: 20 }}>Informe seu e-mail para recuperar a senha</Text>
        <Input placeholder='E-mail' leftIcon={<Icon name='email' size={24} color='black' />} />
        <Button title="Enviar" buttonStyle={styles.button} />
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
    marginTop: 80,
  },
  button: {
    backgroundColor: 'gray',
    width: 200,
    marginTop: 10,
  },
  header: {
    position: 'absolute',
    top: 0,
    width: '100%',
    backgroundColor: 'black',
  },
});

export default Login;
//export default Cadastro;
//export default RecuperarSenha;
