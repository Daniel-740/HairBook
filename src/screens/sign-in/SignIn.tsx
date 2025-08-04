import { LogIn } from '@/components/logIn/LogIn';
import { useAppNavigation } from '@/hooks/useAppNavigation';
import { useSignIn } from '@/hooks/useSignIn';
import { View, Text } from 'react-native';

export const SignIn = () => {
  const navigation = useAppNavigation();

  const {
    email,
    setEmail,
    password,
    setPassword,
    showPassword,
    setShowPassword,
    handleLogin,
  } = useSignIn({ navigation });

  return (
    <View className="flex-1 justify-start p-6 ">
      <Text className="text-3xl font-bold text-primary mb-8 text-center">
        Iniciar Sesión
      </Text>

      <LogIn
        email={email}
        setEmail={setEmail}
        handleLogin={handleLogin}
        password={password}
        setPassword={setPassword}
        setShowPassword={setShowPassword}
        showPassword={showPassword}
      />
    </View>
  );
};
