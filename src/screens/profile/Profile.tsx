import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useUser } from '@/context/UserContext';
import { useAppNavigation } from '@/hooks/useAppNavigation';
import { Routes } from '@/navigation/routes';

export const Profile = () => {
  const { userApp, logOut } = useUser();
  const { navigate } = useAppNavigation();

  const handleSignOut = () => {
    logOut();
    navigate(Routes.SIGN_IN);
  };

  return (
    <SafeAreaView className="flex-1">
      <ScrollView className="flex-1 px-4 py-2">
        <View className="items-center mb-8">
          <View className="w-24 h-24 bg-primary rounded-full items-center justify-center mb-4">
            <Text className="text-white text-2xl font-bold">
              {userApp?.name?.charAt(0).toUpperCase() || 'U'}
            </Text>
          </View>
          <Text className="text-2xl font-bold text-gray-800 mb-1">
            {userApp?.name || 'Usuario'}
          </Text>
          <Text className="text-gray-600">
            {userApp?.email || 'usuario@ejemplo.com'}
          </Text>
        </View>

        <View className="space-y-4 mb-8">
          <TouchableOpacity 
            className="bg-gray-50 p-4 rounded-lg flex-row items-center justify-between"
            onPress={() => navigate(Routes.RESERVATIONS)}
          >
            <View className="flex-row items-center">
              <View className="w-10 h-10 bg-primary/10 rounded-full items-center justify-center mr-3">
                <Text className="text-primary font-semibold">📱</Text>
              </View>
              <View>
                <Text className="font-medium text-gray-800">Mis Reservas</Text>
                <Text className="text-sm text-gray-600">Ver citas programadas</Text>
              </View>
            </View>
            <Text className="text-gray-400">›</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity 
          onPress={handleSignOut}
          className="bg-red-50 p-4 rounded-lg flex-row items-center justify-center"
        >
          <View className="w-6 h-6 items-center justify-center mr-2">
            <Text className="text-red-500 font-semibold">🚪</Text>
          </View>
          <Text className="font-medium text-red-500">Cerrar Sesión</Text>
        </TouchableOpacity>

        <View className="items-center mt-8">
          <Text className="text-gray-400 text-xs text-center">
            HairBook v1.0.0
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
