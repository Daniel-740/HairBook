import { Salon } from "@/interfaces/salon.interface";

export interface SalonItemProps {
    salon: Salon;
    handleReservation: (id: number) => void;
}