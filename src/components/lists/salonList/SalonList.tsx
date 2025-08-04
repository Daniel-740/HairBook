import { FlatList, Text, View } from "react-native";
import { SalonListProps } from "./salonList.interface";
import { SalonItem } from "@/components/lists/salonList/SalonItem";

export const SalonList = (props: SalonListProps) => {

    const { filteredSalons, handleReservation } = props;

  return (
    <FlatList
      data={filteredSalons}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => <SalonItem salon={item} handleReservation={handleReservation} />}
      contentContainerStyle={{ paddingBottom: 20 }}
      ListEmptyComponent={
        <View className="flex-1 items-center justify-center mt-10">
          <Text className="text-gray-500">No se encontraron salones</Text>
        </View>
      }
    />
  );
};
