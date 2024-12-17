import useUser from "@/hooks/auth/useUser";
import { Redirect } from "expo-router";
import Loader from "@/components/loader/loader";
import { View } from 'react-native'

export default function TabsIndex() {
  const { loading, user } = useUser();
  return (
    <>
      {!loading ? (
        // <Loader />
        <View>

        </View>
          
      ) : (
        <Redirect href={!user ? "/(routes)/onboarding" : "/(tabs)"} />
        // <Redirect href={user ? "/(routes)/onboarding" : "/(tabs)"} />
      )}
    </>
  );
}
