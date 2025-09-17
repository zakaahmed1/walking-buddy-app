import { auth } from "@services/firebaseConfig";
import { Redirect, Stack } from "expo-router";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";

export default function RootLayout() {
  const [ready, setReady] = useState(false);
  const [signedIn, setSignedIn] = useState(false);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => {
      setSignedIn(!!u);
      setReady(true);
    });
    return unsub;
  }, []);

  if (!ready) return null; // splash/loading if you want

  return (
    <>
      <Stack screenOptions={{ headerShown: false }} />
      <Redirect href={signedIn ? "/(tabs)" : "/(auth)/login"} />
    </>
  );
}
