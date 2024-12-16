import { View, Text } from 'react-native'
import React from 'react'
import { Redirect } from 'expo-router';
import useUser from '@/hooks/auth/useUser';
import Loader from '@/components/loader/loader';



export default function index() {
  const {loading,user}=useUser();
    return (
      <>
        {loading ? (
          //<Loader/>
          <View>

          </View>
        ):(
          <Redirect href={!user ? "/(routes)/onboarding" :"/(tabs)/home"}/>
        )}
      </>
    );
  }
  