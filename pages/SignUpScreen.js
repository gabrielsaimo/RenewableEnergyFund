import React, { useState } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  Modal,
} from "react-native";

import { Feather } from "@expo/vector-icons";
const SignUpScreen = ({ navigation }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [successModalVisible, setSuccessModalVisible] = useState(false);
  const handleSignUp = () => {
    // Lógica para criar uma nova conta de usuário
    console.log("First Name:", firstName);
    console.log("Last Name:", lastName);
    console.log("Email:", email);
    console.log("Password:", password);
    setSuccessModalVisible(true);
  };
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const handleLoginPress = () => {
    navigation.goBack(); // Navegar de volta para a tela de login
  };
 
  const handleModalClose = () => {
    setSuccessModalVisible(false); // Fechar o modal de sucesso
    navigation.navigate("Login"); // Redirecionar para a tela de login
  };
  return (
    <KeyboardAvoidingView style={styles.container} behavior="height">
      <Text style={styles.title}>Create your account</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>First Name</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setFirstName(text)}
          value={firstName}
          autoCapitalize="words"
          autoCompleteType="name"
        />
        <Text style={styles.inputLabel}>Last Name</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setLastName(text)}
          value={lastName}
          autoCapitalize="words"
          autoCompleteType="name"
        />
        <Text style={styles.inputLabel}>Email</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setEmail(text)}
          value={email}
          keyboardType="email-address"
          autoCapitalize="none"
          autoCompleteType="email"
        />
        <Text style={styles.inputLabel}>Password</Text>
        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.passwordInput}
            onChangeText={(text) => setPassword(text)}
            value={password}
            secureTextEntry={!showPassword}
            autoCapitalize="none"
            placeholder="Minimum 8 characters"
            autoCompleteType="password"
          />
          <TouchableOpacity
            style={styles.passwordVisibilityButton}
            onPress={togglePasswordVisibility}
          >
            <Feather
              name={showPassword ? "eye" : "eye-off"}
              size={24}
              color="#888"
            />
          </TouchableOpacity>
        </View>
        <View style={styles.checkboxContainer}>
          <TouchableOpacity
            style={styles.checkbox}
            onPress={() => setIsChecked(!isChecked)}
          >
            {isChecked && <View style={styles.checkboxMark} />}
          </TouchableOpacity>

          <Text style={styles.checkboxText}>
            <Text style={styles.centerText}>
              I am over 18 years of age and I have read and agree to the
            </Text>{" "}
            <Text style={[styles.boldText, styles.centerText]}>
              Terms of Service
            </Text>
            {" and "}
            <Text style={[styles.boldText, styles.centerText]}>
              Privacy policy.
            </Text>
          </Text>
        </View>
      </View>
      <TouchableOpacity
        style={[styles.button, !isChecked && styles.disabledButton]}
        onPress={isChecked ? handleSignUp : null}
        disabled={!isChecked}
      >
        <Text style={styles.buttonText}>Create account</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleLoginPress}>
        <Text style={styles.loginText}>
          Already have an account?{" "}
          <Text style={styles.loginButton}>Log in Here</Text>
        </Text>
      </TouchableOpacity>
      <Modal
        visible={successModalVisible}
        animationType="fade"
        transparent={true}
        onRequestClose={handleModalClose}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>Account created successfully!</Text>
            <TouchableOpacity
              style={styles.modalButton}
              onPress={handleModalClose}
            >
              <Text style={styles.modalButtonText}>Go to Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 40,
    backgroundColor: "#F5F5F5",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    alignSelf: "flex-start",
  },
  backButton: {
    marginRight: 0,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  divider: {
    width: "100%",
    height: 1,
    backgroundColor: "#ccc",
    marginVertical: 0,
  },
  disabledButton: {
    opacity: 0.5,
  },
  inputContainer: {
    marginBottom: 20,
    width: "100%",
  },
  inputLabel: {
    marginBottom: 5,
    fontSize: 11,
    color: "#A0A0A0",
    fontWeight: "bold",
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: "#ccc",
    backgroundColor: "#fff",
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 15,
    fontSize: 16,
    color: "#333",
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    backgroundColor: "#fff",
    borderRadius: 10,
    marginBottom: 15,
  },
  passwordInput: {
    flex: 1,
    height: 50,
    paddingHorizontal: 15,
    fontSize: 16,
    color: "#333",
  },
  passwordVisibilityButton: {
    padding: 10,
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
    marginRight: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  checkboxMark: {
    width: 12,
    height: 12,
    backgroundColor: "blue",
    borderRadius: 2,
  },
  checkboxText: {
    fontSize: 14,
    textAlign: "center",
  },
  centerText: {
    textAlign: "center",
  },
  boldText: {
    fontWeight: "bold",
  },
  button: {
    width: "100%",
    height: 50,
    backgroundColor: "#770FDF",
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  loginText: {
    fontSize: 14,
    textAlign: "center",
  },
  loginButton: {
    textDecorationLine: "underline",
    fontWeight: "bold",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 8,
    alignItems: "center",
  },
  modalText: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
  },
  modalButton: {
    width: 150,
    height: 40,
    backgroundColor: "#770FDF",
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
  },
  modalButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default SignUpScreen;
