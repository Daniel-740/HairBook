import { ReservationWithSalon } from "@/hooks/useReservations";

export interface ReservationListProps {
    reservations: ReservationWithSalon[];
    deleteReservation: (salonId: number) => void;
}