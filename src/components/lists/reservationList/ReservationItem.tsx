import { View, Text, TouchableOpacity } from 'react-native';
import { MapPinIcon, EyeIcon, TrashIcon } from 'react-native-heroicons/outline';
import { TicketIcon } from 'react-native-heroicons/solid';
import { useAppNavigation } from '@/hooks/useAppNavigation';
import { Routes } from '@/navigation/routes';
import { ReservationItemProps } from './reservationItem.interface';

export const ReservationItem = ({
  reservation,
  onDelete,
}: ReservationItemProps) => {
  const navigation = useAppNavigation();
  const { salon } = reservation;

  const handleViewDetails = () => {
    navigation.navigate(Routes.DETAILS, { salonId: salon.id.toString() });
  };

  const handleDelete = () => {
    onDelete(salon.id);
  };

  return (
    <View className="bg-white mx-4 my-2 rounded-xl shadow-sm overflow-hidden">
      <View className="p-4">
        <View className="flex-row justify-between items-start mb-3">
          <View className="flex-1">
            <Text className="text-lg font-bold text-gray-900 mb-1">
              {salon.name}
            </Text>
            <View className="px-2 py-1 bg-green-50 rounded-full self-start">
              <Text className="text-xs text-green-700 font-medium">
                ✓ Reservado
              </Text>
            </View>
          </View>
          <View className="items-center bg-primary-50 px-3 py-2 rounded-lg">
            <View className="flex-row items-center">
              <TicketIcon size={16} color="#FA9E31" />
              <Text className="text-sm font-bold text-primary ml-1">
                {salon.creditCost}
              </Text>
            </View>
            <Text className="text-xs text-primary">créditos</Text>
          </View>
        </View>

        <View className="mb-3">
          <View className="px-2 py-1 bg-primary-50 rounded-full self-start mb-2">
            <Text className="text-xs text-primary font-medium">
              {salon.type}
            </Text>
          </View>
          <Text className="text-gray-600 text-sm mb-2">
            {salon.description}
          </Text>
        </View>

        <View className="flex-row items-center">
          <MapPinIcon size={16} color="#6B7280" />
          <Text className="ml-1 text-gray-600 text-sm">
            {salon.location}
          </Text>
        </View>
      </View>

      <View className="border-t border-gray-100 flex-row">
        <TouchableOpacity
          onPress={handleViewDetails}
          className="flex-1 flex-row items-center justify-center py-3 border-r border-gray-100"
        >
          <EyeIcon size={18} color="#6B7280" />
          <Text className="ml-2 text-gray-700 font-medium">Ver detalles</Text>
        </TouchableOpacity>
        
        <TouchableOpacity
          onPress={handleDelete}
          className="flex-1 flex-row items-center justify-center py-3"
        >
          <TrashIcon size={18} color="#EF4444" />
          <Text className="ml-2 text-red-500 font-medium">Eliminar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
