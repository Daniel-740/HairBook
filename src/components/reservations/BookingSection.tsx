import { Text, TouchableOpacity, View } from "react-native";
import { CreditCardIcon } from "react-native-heroicons/outline";
import { BookingSectionProps } from "./bookingSection.interface";
import { Routes } from "@/navigation";

export const BookingSection = (props: BookingSectionProps) => {

    const { navigation, handleReservation, isReserved, salon } = props;

  return (
    <View className="mx-4 mt-4 mb-8">
      {isReserved ? (
        <View className="bg-green-50 border border-green-200 rounded-xl p-4">
          <Text className="text-green-800 font-medium text-center">
            ✓ Ya tienes una reserva en este salón
          </Text>
        </View>
      ) : (
        <TouchableOpacity
          className="bg-primary py-4 rounded-xl shadow-sm"
          onPress={() => handleReservation(salon.id)}
        >
          <View className="flex-row items-center justify-center">
            <CreditCardIcon size={20} color="white" />
            <Text className="text-white font-bold text-lg ml-2">
              Reservar ahora
            </Text>
          </View>
        </TouchableOpacity>
      )}

      <TouchableOpacity
        className="bg-white border border-gray-200 py-4 rounded-xl mt-3 shadow-sm"
        onPress={() => navigation.navigate(Routes.HOME)}
      >
        <Text className="text-gray-700 font-medium text-center">
          Explorar más salones
        </Text>
      </TouchableOpacity>
    </View>
  );
};
