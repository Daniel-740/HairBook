import { createStackNavigator } from '@react-navigation/stack';

import { SignIn } from '@/screens/sign-in/SignIn';
import { Routes, RootParamsList } from './routes';
import { HeaderLogin } from '@/components/layout/header/HeaderLogin';
import { HeaderHome } from '@/components/layout/header/HeaderHome';
import { HeaderDetails } from '@/components/layout/header/HeaderDetails';
import { Home } from '@/screens/home/Home';
import { Credit } from '@/screens/credit/Credit';
import { Profile } from '@/screens/profile/Profile';
import { Details } from '@/screens/details/Details';
import { Reservations } from '@/screens/reservations/Reservations';
import { MainLayout } from '@/components/layout/MainLayout';

const Stack = createStackNavigator<RootParamsList>();

// Wrapper para pantallas con menú inferior
const ScreenWithBottomMenu = ({ children }: { children: React.ReactNode }) => {
  return (
    <MainLayout>
      {children}
    </MainLayout>
  );
};

// Componentes wrapeados con el layout
const HomeWithMenu = () => (
  <ScreenWithBottomMenu>
    <Home />
  </ScreenWithBottomMenu>
);

const CreditWithMenu = () => (
  <ScreenWithBottomMenu>
    <Credit />
  </ScreenWithBottomMenu>
);

const ProfileWithMenu = () => (
  <ScreenWithBottomMenu>
    <Profile />
  </ScreenWithBottomMenu>
);

export const AppNavigator = () => {
  return (
      <Stack.Navigator initialRouteName={Routes.SIGN_IN}>
        <Stack.Screen name={Routes.SIGN_IN} component={SignIn} options={{
          header: () => <HeaderLogin title="HairBook" />,
        }} />
        <Stack.Screen name={Routes.HOME} component={HomeWithMenu} options={{
          header: () => <HeaderHome />,
        }} />
        <Stack.Screen name={Routes.CREDIT} component={CreditWithMenu} options={{
          header: () => <HeaderHome />,
        }} />
        <Stack.Screen name={Routes.PROFILE} component={ProfileWithMenu} options={{
          header: () => <HeaderHome />,
        }} />
        <Stack.Screen name={Routes.DETAILS} component={Details} options={{
          header: () => <HeaderDetails />,
        }} />
        <Stack.Screen name={Routes.RESERVATIONS} component={Reservations} options={{
          header: () => <HeaderDetails title="Mis Reservas" backRoute={Routes.PROFILE} />,
        }} />
      </Stack.Navigator>
  );
};
