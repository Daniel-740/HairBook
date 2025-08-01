import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import { SignIn } from '@/screens/sign-in/SignIn';
import { Routes, RootParamsList } from './routes';

const Stack = createStackNavigator<RootParamsList>();

export const AppNavigator = () => {
  return (
      <Stack.Navigator initialRouteName={Routes.SIGN_IN}>
        <Stack.Screen name={Routes.SIGN_IN} component={SignIn} />
      </Stack.Navigator>
  );
};
