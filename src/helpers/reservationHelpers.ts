import { Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { RESERVATION_STATUS, ReservationStatus } from '@/constants/reservations';
import { getSalonById } from '@/services/salon.service';
import { User } from '@/interfaces/user.interface';
import { Salon } from '@/interfaces/salon.interface';

export interface ReservationHandlerParams {
  reservationResult: ReservationStatus;
  salonId: number;
  user: User;
  setUser: (updater: (prevUser: User | null) => User | null) => void;
  onSuccess?: (salon: Salon) => void;
  onError?: (status: ReservationStatus) => void;
}

export const handleReservationResult = async ({
  reservationResult,
  salonId,
  user,
  setUser,
  onSuccess,
  onError,
}: ReservationHandlerParams): Promise<void> => {
  const salon = getSalonById(salonId);

  switch (reservationResult) {
    case RESERVATION_STATUS.ALREADY_RESERVED:
      Alert.alert(
        'Reserva ya realizada',
        'Este salón ya ha sido reservado anteriormente.',
        [{ text: 'OK' }]
      );
      onError?.(RESERVATION_STATUS.ALREADY_RESERVED);
      return;

    case RESERVATION_STATUS.INSUFFICIENT_CREDITS:
      Alert.alert(
        'Créditos insuficientes',
        salon 
          ? `Necesitas ${salon.creditCost} créditos para reservar este salón. Actualmente tienes ${user.credits} créditos.`
          : 'No tienes suficientes créditos para realizar esta reserva.',
        [{ text: 'OK' }]
      );
      onError?.(RESERVATION_STATUS.INSUFFICIENT_CREDITS);
      return;

    case RESERVATION_STATUS.NOT_FOUND:
      Alert.alert(
        'Error',
        'No se pudo realizar la reserva porque no se encontró el salón.',
        [{ text: 'OK' }]
      );
      onError?.(RESERVATION_STATUS.NOT_FOUND);
      return;

    case RESERVATION_STATUS.RESERVED:
      if (!salon) {
        Alert.alert('Error', 'No se encontró información del salón.');
        return;
      }

      try {
        // Save reservation to AsyncStorage
        await AsyncStorage.setItem(
          'salonsReservations',
          JSON.stringify([
            ...JSON.parse(
              (await AsyncStorage.getItem('salonsReservations')) || '[]'
            ),
            { id: salonId, userId: user.id },
          ])
        );

        // Update user credits
        setUser((prevUser) => {
          if (!prevUser) return null;
          return {
            ...prevUser,
            credits: prevUser.credits - salon.creditCost,
          };
        });

        // Show success message
        Alert.alert(
          'Reserva exitosa',
          `¡Tu reserva en ${salon.name} se ha realizado correctamente! Se han descontado ${salon.creditCost} créditos de tu cuenta.`,
          [{ text: 'OK' }]
        );

        onSuccess?.(salon);
      } catch (error) {
        console.error('Error processing reservation:', error);
        Alert.alert('Error', 'Ocurrió un error al procesar la reserva.');
      }
      break;

    default:
      Alert.alert(
        'Error',
        'Ocurrió un error inesperado al intentar reservar el salón.',
        [{ text: 'OK' }]
      );
      onError?.(reservationResult);
      return;
  }
};

export const validateUserForReservation = (user: User | null): boolean => {
  if (!user) {
    Alert.alert(
      'Error',
      'No se pudo realizar la reserva porque no se encontró el usuario',
      [{ text: 'OK' }]
    );
    return false;
  }
  return true;
};
