import { useState, useEffect } from 'react';
import { Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useUser } from '@/context/UserContext';
import { getSalonById } from '@/services/salon.service';
import { Salon } from '@/interfaces/salon.interface';

export interface ReservationWithSalon {
  id: number;
  userId: number;
  salon: Salon;
}

export const useReservations = () => {
  const [reservations, setReservations] = useState<ReservationWithSalon[]>([]);
  const [loading, setLoading] = useState(true);
  const { userApp, setUserApp } = useUser();

  const confirmDeleteReservation = async (salonId: number) => {
    if (!userApp) return;

    try {
      // Get current reservations
      const salonsReservations = await AsyncStorage.getItem('salonsReservations');
      const allReservations = salonsReservations ? JSON.parse(salonsReservations) : [];
      
      // Find the reservation to get salon cost
      const reservationToDelete = allReservations.find(
        (reservation: { id: number; userId: number }) => 
          reservation.id === salonId && reservation.userId === userApp.id
      );

      if (reservationToDelete) {
        const salon = getSalonById(salonId);
        
        // Remove the reservation
        const updatedReservations = allReservations.filter(
          (reservation: { id: number; userId: number }) => 
            !(reservation.id === salonId && reservation.userId === userApp.id)
        );

        await AsyncStorage.setItem('salonsReservations', JSON.stringify(updatedReservations));

        // Refund credits
        if (salon && userApp) {
          setUserApp((prevUser) => {
            if (!prevUser) return null;
            return {
              ...prevUser,
              credits: prevUser.credits + salon.creditCost,
            };
          });
        }

        // Reload reservations
        await loadReservations();

        Alert.alert(
          'Reserva eliminada',
          `Se ha eliminado la reserva${salon ? ` y se han devuelto ${salon.creditCost} créditos a tu cuenta` : ''}.`,
          [{ text: 'OK' }]
        );
      }
    } catch (error) {
      console.error('Error deleting reservation:', error);
      Alert.alert('Error', 'No se pudo eliminar la reserva');
    }
  }

  useEffect(() => {
    loadReservations();
  }, [userApp]);

  const loadReservations = async () => {
    if (!userApp) {
      setLoading(false);
      return;
    }

    try {
      const salonsReservations = await AsyncStorage.getItem('salonsReservations');
      const allReservations = salonsReservations ? JSON.parse(salonsReservations) : [];
      
      const userReservations = allReservations.filter(
        (reservation: { id: number; userId: number }) => 
          reservation.userId === userApp.id
      );

      // Get salon details for each reservation
      const reservationsWithSalons: ReservationWithSalon[] = userReservations
        .map((reservation: { id: number; userId: number }) => {
          const salon = getSalonById(reservation.id);
          if (salon) {
            return {
              id: reservation.id,
              userId: reservation.userId,
              salon,
            };
          }
          return null;
        })
        .filter(Boolean);

      setReservations(reservationsWithSalons);
    } catch (error) {
      console.error('Error loading reservations:', error);
      Alert.alert('Error', 'No se pudieron cargar las reservas');
    } finally {
      setLoading(false);
    }
  };

  const deleteReservation = async (salonId: number) => {

    Alert.alert(
      'Confirmar eliminación',
      '¿Está seguro que quiere eliminar la reserva?',
      [
        {
          text: 'Cancelar',
          style: 'cancel',
        },
        {
          text: 'Eliminar',
          style: 'destructive',
          onPress: () => confirmDeleteReservation(salonId),
        },
      ]
    );
  };

  return {
    reservations,
    loading,
    loadReservations,
    deleteReservation,
  };
};
