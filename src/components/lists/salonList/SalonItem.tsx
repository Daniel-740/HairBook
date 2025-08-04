import { Text, TouchableOpacity, View } from "react-native";
import { MapPinIcon } from "react-native-heroicons/outline";
import { useAppNavigation } from "@/hooks/useAppNavigation";
import { Routes } from "@/navigation/routes";
import { SalonItemProps } from "./salonItem.interface";

export const SalonItem = ({ salon, handleReservation }: SalonItemProps) => {
  const navigation = useAppNavigation();

  const handlePress = () => {
    navigation.navigate(Routes.DETAILS, { salonId: salon.id.toString() });
  };

  return (
    <View className="mx-4 my-2 bg-white rounded-xl shadow-sm overflow-hidden">
      <TouchableOpacity onPress={handlePress}>
        <View className="p-4">
          <View className="flex-row justify-between items-start">
            <Text className="text-lg font-bold text-gray-900">{salon.name}</Text>
            <View className="px-2 py-1 bg-primary-50 rounded-full">
              <Text className="text-xs text-primary font-medium">
                {salon.type}
              </Text>
            </View>
          </View>

          <Text className="mt-2 text-gray-600">{salon.description}</Text>

          <View className="mt-3 flex-row items-center">
            <MapPinIcon size={16} color="#6B7280" />
            <Text className="ml-1 text-gray-600 text-sm">{salon.location}</Text>
          </View>
        </View>
      </TouchableOpacity>

      <View className="border-t border-gray-100 flex-row justify-between items-center px-4 py-3">
        <Text className="text-primary font-bold">
          {salon.creditCost} créditos
        </Text>
        <TouchableOpacity
          className="bg-primary px-4 py-2 rounded-lg"
          onPress={() => handleReservation(salon.id)}
        >
          <Text className="text-white font-medium">Reservar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
