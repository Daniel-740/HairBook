import salonsJSON from '@/mocks/salons.json';
import { Salon } from '@/interfaces/salon.interface';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { User } from '@/interfaces/user.interface';
import { RESERVATION_STATUS, ReservationStatus } from '@/constants/reservations';

const salons: Salon[] = salonsJSON.salons;

export const getAllSalons = (): Salon[] => salons;

export const getSalonById = (id: number): Salon | undefined =>
  salons.find((salon: Salon) => salon.id === id);

export const filterSalonsByType = (type: string): Salon[] => {
  if (!type) return salons;
  return salons.filter((salon: Salon) => 
    salon.type.toLowerCase().includes(type.toLowerCase())
  );
};

export const reserveSalon = async (salonId: number, user: User): Promise<ReservationStatus> => {
  const salon = getSalonById(salonId);

  // Simulate backend reservation logic
  if (salon) {
    const salonsReservations = await AsyncStorage.getItem('salonsReservations');
    const reservations = salonsReservations ? JSON.parse(salonsReservations) : [];

    if(reservations.some((reservation: { id: number }) => reservation.id === salonId)) {
      return RESERVATION_STATUS.ALREADY_RESERVED;
    }

    if (salon.creditCost > user?.credits) {
        return RESERVATION_STATUS.INSUFFICIENT_CREDITS;
      }

      return RESERVATION_STATUS.RESERVED;
    }

    return RESERVATION_STATUS.NOT_FOUND;
};

export const getUniqueSalonTypes = (): string[] => 
  [...new Set(salons.map((salon: Salon) => salon.type))];