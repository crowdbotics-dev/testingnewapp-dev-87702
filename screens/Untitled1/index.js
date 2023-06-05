import React from "react";
import { StyleSheet, View, TextInput, Button, SafeAreaView } from "react-native";

const LoginScreen = () => {
  return <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <TextInput style={styles.input} placeholder="Username" autoCapitalize="none" />
        <TextInput style={styles.input} placeholder="Password" secureTextEntry />
        <Button title="Login" onPress={() => {}} />
      </View>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: "100%"
  },
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 20
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10
  }
});
export default LoginScreen;