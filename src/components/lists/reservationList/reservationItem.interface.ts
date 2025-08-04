import { ReservationWithSalon } from "@/hooks/useReservations";

export interface ReservationItemProps {
  reservation: ReservationWithSalon;
  onDelete: (salonId: number) => void;
}