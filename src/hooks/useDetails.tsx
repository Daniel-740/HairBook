import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useUser } from '@/context/UserContext';
import { getSalonById, reserveSalon } from '@/services/salon.service';
import { Salon } from '@/interfaces/salon.interface';
import { RESERVATION_STATUS } from '@/constants/reservations';
import { handleReservationResult, validateUserForReservation } from '@/helpers/reservationHelpers';
export const useDetails = (salonId: number) => {
  const [salon, setSalon] = useState<Salon | undefined>(undefined);
  const [isReserved, setIsReserved] = useState(false);
  const { userApp, setUserApp } = useUser();

  useEffect(() => {
    const loadSalonDetails = async () => {
      const salonData = getSalonById(salonId);
      setSalon(salonData);

      // Check if salon is already reserved
      if (salonData && userApp) {
        const salonsReservations = await AsyncStorage.getItem('salonsReservations');
        const reservations = salonsReservations ? JSON.parse(salonsReservations) : [];
        const isAlreadyReserved = reservations.some(
          (reservation: { id: number; userId: number }) => 
            reservation.id === salonId && reservation.userId === userApp.id
        );
        setIsReserved(isAlreadyReserved);
      }
    };

    loadSalonDetails();
  }, [salonId, userApp]);

  const handleReservation = async (salonId: number) => {
    if (!validateUserForReservation(userApp)) {
      return;
    }

    const reservationResult = await reserveSalon(salonId, userApp!);
    
    await handleReservationResult({
      reservationResult,
      salonId,
      user: userApp!,
      setUser: setUserApp,
      onSuccess: () => {
        setIsReserved(true);
      },
      onError: (status) => {
        if (status === RESERVATION_STATUS.ALREADY_RESERVED) {
          setIsReserved(true);
        }
      },
    });
  };

  return {
    salon,
    isReserved,
    handleReservation,
  };
};
