import { UserProvider } from '@/context/UserProvider';
import { AppNavigator } from '@/navigation';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <UserProvider>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </UserProvider>
  );
}
