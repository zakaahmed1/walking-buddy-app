// app/(auth)/onboarding.tsx
import { router } from "expo-router";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import React, { useState } from "react";
import {
    Alert,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import { auth, db } from "../../src/services/firebaseConfig";

export default function Onboarding() {
  const [fullName, setFullName] = useState("");
  const [pace, setPace] = useState(""); // slow | medium | fast
  const [preferredDistanceKm, setPreferredDistanceKm] = useState("");
  const [availability, setAvailability] = useState("");

  const handleSaveProfile = async () => {
    const user = auth.currentUser;
    if (!user) {
      Alert.alert("Error", "No authenticated user found.");
      return;
    }

    if (!fullName || !pace || !preferredDistanceKm || !availability) {
      Alert.alert("Missing Fields", "Please fill in all fields.");
      return;
    }

    try {
      await setDoc(doc(db, "users", user.uid), {
        uid: user.uid,
        fullName,
        email: user.email,
        pace,
        preferredDistanceKm: Number(preferredDistanceKm),
        availability,
        createdAt: serverTimestamp(),
      });

      // Go to home tabs after onboarding
      router.replace("/(tabs)");
    } catch (err: any) {
      Alert.alert("Error saving profile", err.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Set up your Walking Buddy profile</Text>

      <TextInput
        style={styles.input}
        placeholder="Full Name"
        value={fullName}
        onChangeText={setFullName}
      />

      <TextInput
        style={styles.input}
        placeholder="Pace (slow, medium, fast)"
        value={pace}
        onChangeText={setPace}
      />

      <TextInput
        style={styles.input}
        placeholder="Preferred Distance (km)"
        value={preferredDistanceKm}
        onChangeText={setPreferredDistanceKm}
        keyboardType="numeric"
      />

      <TextInput
        style={styles.input}
        placeholder="Availability (e.g., evenings, weekends)"
        value={availability}
        onChangeText={setAvailability}
      />

      <TouchableOpacity style={styles.button} onPress={handleSaveProfile}>
        <Text style={styles.buttonText}>Save Profile</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, justifyContent: "center" },
  title: {
    fontSize: 24,
    marginBottom: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 12,
    borderRadius: 8,
    marginBottom: 12,
    fontSize: 16,
  },
  button: {
    backgroundColor: "#0077cc",
    padding: 16,
    borderRadius: 8,
    marginTop: 8,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "600",
  },
});
