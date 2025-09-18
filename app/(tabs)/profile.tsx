// app/(tabs)/profile.tsx
import { auth } from "@services/firebaseConfig";
import { useRouter } from "expo-router";
import { Button, Text, View } from "react-native";

export default function ProfileScreen() {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await auth.signOut();
      router.replace("/(auth)/login"); // ✅ correct href
    } catch (err) {
      console.error("Logout error:", err);
    }
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
      }}
    >
      <Text style={{ fontSize: 22, fontWeight: "bold" }}>Profile</Text>
      <Text style={{ marginTop: 10 }}>
        Welcome, {auth.currentUser?.email ?? "User"}!
      </Text>
      <Button title="Log Out" onPress={handleLogout} />
    </View>
  );
}
