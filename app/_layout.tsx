// app/_layout.tsx
import { auth, db } from "@services/firebaseConfig";
import { Href, Redirect, Stack } from "expo-router";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";

export default function RootLayout() {
  const [ready, setReady] = useState(false);
  const [signedIn, setSignedIn] = useState(false);
  const [needsProfile, setNeedsProfile] = useState(false);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (user) => {
      if (user) {
        try {
          const snap = await getDoc(doc(db, "users", user.uid));
          if (!snap.exists()) {
            setNeedsProfile(true);
          } else {
            setNeedsProfile(false);
          }
          setSignedIn(true);
        } catch (err) {
          console.error("Error checking profile:", err);
          setSignedIn(false);
        }
      } else {
        setSignedIn(false);
      }
      setReady(true);
    });
    return unsub;
  }, []);

  if (!ready) return null; // could render splash screen here

  return (
    <>
      <Stack screenOptions={{ headerShown: false }} />
      <Redirect
        href={
          (signedIn
            ? needsProfile
              ? "/(auth)/onboarding"
              : "/(tabs)"
            : "/(auth)/login") as Href
        }
      />
    </>
  );
}
