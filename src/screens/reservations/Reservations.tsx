import {
  View,
  Text,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import { useReservations } from '@/hooks/useReservations';
import { useAppNavigation } from '@/hooks/useAppNavigation';
import { Routes } from '@/navigation/routes';
import { ReservationNotFound } from '@/components/reservations/ReservationNotFound';
import { ReservationList } from '@/components/lists/reservationList/ReservationList';

export const Reservations = () => {
  const { reservations, loading, deleteReservation } = useReservations();
  const navigation = useAppNavigation();

  const handleGoToHome = () => {
    navigation.navigate(Routes.HOME);
  };

  if (loading) {
    return (
      <View className="flex-1 items-center justify-center bg-gray-50">
        <ActivityIndicator size="large" color="#FA9E31" />
        <Text className="mt-4 text-gray-600">Cargando reservas...</Text>
      </View>
    );
  }

  return reservations.length === 0 ? (
    <ReservationNotFound handleGoToHome={handleGoToHome} />
  ) : (
    <View className="flex-1 bg-gray-50">
      <View className="bg-white px-4 py-4 border-b border-gray-100">
        <Text className="text-lg font-bold text-gray-900 mb-1">
          Mis Reservas
        </Text>
        <Text className="text-gray-600">
          {reservations.length}{' '}
          {reservations.length === 1 ? 'reserva activa' : 'reservas activas'}
        </Text>
      </View>

      <ReservationList deleteReservation={deleteReservation} reservations={reservations} />

      <View className="bg-white border-t border-gray-100 px-4 py-4">
        <TouchableOpacity
          onPress={handleGoToHome}
          className="bg-gray-100 py-3 rounded-lg"
        >
          <Text className="text-gray-700 font-medium text-center">
            Explorar más salones
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
