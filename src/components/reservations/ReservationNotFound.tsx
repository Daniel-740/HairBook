import { Text, TouchableOpacity, View } from "react-native"
import { CalendarDaysIcon } from "react-native-heroicons/outline"

interface ReservationNotFoundProps {
    handleGoToHome: () => void;
}

export const ReservationNotFound = ({ handleGoToHome }: ReservationNotFoundProps) => {
    return (
        <View className="flex-1 items-center justify-center bg-gray-50 px-8">
        <View className="items-center">
          <View className="w-24 h-24 bg-gray-100 rounded-full items-center justify-center mb-6">
            <CalendarDaysIcon size={48} color="#9CA3AF" />
          </View>
          
          <Text className="text-xl font-bold text-gray-900 mb-2 text-center">
            No tienes reservas
          </Text>
          
          <Text className="text-gray-600 text-center mb-8 leading-6">
            Explora nuestros salones y haz tu primera reserva para comenzar a disfrutar de nuestros servicios.
          </Text>
          
          <TouchableOpacity
            onPress={handleGoToHome}
            className="bg-primary px-8 py-3 rounded-lg shadow-sm"
          >
            <Text className="text-white font-bold text-lg">
              Explorar Salones
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    )
}