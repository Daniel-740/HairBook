import { RootParamsList, Routes } from '@/navigation';
import { StackNavigationProp } from '@react-navigation/stack';
import { Text, TouchableOpacity, View } from 'react-native';

interface SalonNotFoundProps {
  navigation: StackNavigationProp<RootParamsList>;
}

export const SalonNotFound = ({ navigation }: SalonNotFoundProps) => {
  return (
    <View className="flex-1 items-center justify-center bg-gray-50">
      <Text className="text-gray-500 text-lg">Salón no encontrado</Text>
      <TouchableOpacity
        className="mt-4 bg-primary px-6 py-2 rounded-lg"
        onPress={() => navigation.navigate(Routes.HOME)}
      >
        <Text className="text-white font-medium">Volver al inicio</Text>
      </TouchableOpacity>
    </View>
  );
};
