import { useUser } from '@/context/UserContext';
import {
  filterSalonsByType,
  getAllSalons,
  getSalonById,
  getUniqueSalonTypes,
  reserveSalon,
} from '@/services/salon.service';
import { useState } from 'react';
import { RESERVATION_STATUS } from '@/constants/reservations';
import { handleReservationResult, validateUserForReservation } from '@/helpers/reservationHelpers';

export const useHome = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const { userApp, setUserApp } = useUser();

  const categories = getUniqueSalonTypes();
  const allSalons = getAllSalons();

  const filteredSalons = filterSalonsByType(selectedCategory || '').filter(
    (salon) => {
      const matchesSearch =
        salon.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        salon.location.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesSearch;
    },
  );

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
    });
  };

  return {
    selectedCategory,
    setSelectedCategory,
    searchQuery,
    setSearchQuery,
    categories,
    filteredSalons,
    handleReservation,
    allSalons,
  };
};
