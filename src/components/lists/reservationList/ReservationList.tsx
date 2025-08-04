import { ReservationItem } from "@/components/lists/reservationList/ReservationItem"
import { FlatList } from "react-native"
import { ReservationListProps } from "./reservationList.interface"

export const ReservationList = (props: ReservationListProps) => {
    
    const { reservations, deleteReservation } = props;
    
    return (
      <FlatList
        data={reservations}
        keyExtractor={(item) => `${item.id}-${item.userId}`}
        renderItem={({ item }) => (
          <ReservationItem reservation={item} onDelete={deleteReservation} />
        )}
        contentContainerStyle={{ paddingVertical: 8 }}
        showsVerticalScrollIndicator={false}
      />
    )
}