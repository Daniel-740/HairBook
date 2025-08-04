import { Salon } from "@/interfaces/salon.interface";
import { RootParamsList } from "@/navigation";
import { StackNavigationProp } from "@react-navigation/stack";

export interface BookingSectionProps {
    navigation: StackNavigationProp<RootParamsList>;
    handleReservation: (salonId: number) => void;
    isReserved: boolean;
    salon: Salon;
}