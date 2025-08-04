import { Salon } from "@/interfaces/salon.interface";

export interface SalonListProps {
    filteredSalons: Salon[]
    handleReservation: (id: number) => void;
}