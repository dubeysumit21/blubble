import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Routes } from "../utils/Routes";
import Login from "../screens/Login";
import AddAddress from "../screens/AddAddress";
import UserOnboarding from "../screens/UserOnboarding";

const BaseNavigator: React.FC = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      {/* <Stack.Screen
        name={Routes.LOGIN}
        component={Login}
        options={{
          headerShown: false,
          title: "MainScreen",
          gestureEnabled: false,
          headerLeft: () => null,
        }}
      />
      <Stack.Screen
        name={Routes.ADD_ADDRESS}
        component={AddAddress}
        options={{
          headerShown: false,
          title: "MainScreen",
          gestureEnabled: false,
          headerLeft: () => null,
        }}
      /> */}
      <Stack.Screen
        name={Routes.ONBOARDING}
        component={UserOnboarding}
        options={{
          headerShown: false,
          title: "MainScreen",
          gestureEnabled: false,
          headerLeft: () => null,
        }}
      />
    </Stack.Navigator>
  );
};

export default BaseNavigator;
