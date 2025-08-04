import { Text, View } from 'react-native';
import { StarIcon } from 'react-native-heroicons/outline';

export const ReviewSection = () => {
  return (
    <View className="bg-white mx-4 mt-4 rounded-xl shadow-sm overflow-hidden">
      <View className="p-6">
        <Text className="text-lg font-bold text-gray-900 mb-4">Valoración</Text>

        <View className="flex-row items-center mb-4">
          <View className="flex-row">
            {[1, 2, 3, 4, 5].map((star) => (
              <StarIcon key={star} size={20} color="#FA9E31" fill="#FA9E31" />
            ))}
          </View>
          <Text className="ml-2 text-gray-600">4.8 (127 reseñas)</Text>
        </View>

        <View className="border-t border-gray-100 pt-4">
          <Text className="text-gray-700 italic">
            "Excelente servicio y atención personalizada. Muy recomendado."
          </Text>
          <Text className="text-gray-500 text-sm mt-2">
            - Cliente verificado
          </Text>
        </View>
      </View>
    </View>
  );
};
