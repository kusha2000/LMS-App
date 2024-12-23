import useUser from "@/hooks/auth/useUser";
import { Redirect } from "expo-router";
import { View } from 'react-native'

export default function TabsIndex() {
  const { loading, user } = useUser();
  return (
    <>
        <Redirect href={!user ? "/(routes)/onboarding" : "/(tabs)"} />
        // <Redirect href={user ? "/(routes)/onboarding" : "/(tabs)"} />

    </>
  );
}
