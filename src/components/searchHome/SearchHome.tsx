import { SearhHomeProps } from "./searchHome.interface"
import { TextInput, View } from "react-native"
import { StarIcon } from "react-native-heroicons/outline"

export const SearchHome = ({searchQuery, setSearchQuery}: SearhHomeProps) => {

    return (
        <View className="px-4 pt-4 pb-2  shadow-sm">
        <View className="flex-row items-center bg-gray-100 rounded-lg px-3 py-2">
          <StarIcon size={20} color="#9CA3AF" />
          <TextInput
            className="flex-1 ml-2 text-gray-700"
            placeholder="Buscar salón o ubicación"
            placeholderTextColor="#9CA3AF"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>
      </View>
    )
}