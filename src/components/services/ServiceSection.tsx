import { Text, View } from "react-native"

export const ServiceSection = () => {
    return (
        <View className="bg-white mx-4 mt-4 rounded-xl shadow-sm overflow-hidden">
        <View className="p-6">
          <Text className="text-lg font-bold text-gray-900 mb-4">
            Servicios incluidos
          </Text>
          
          <View className="space-y-3">
            <View className="flex-row items-center">
              <View className="w-2 h-2 bg-primary rounded-full mr-3" />
              <Text className="text-gray-700">Consulta personalizada</Text>
            </View>
            <View className="flex-row items-center">
              <View className="w-2 h-2 bg-primary rounded-full mr-3" />
              <Text className="text-gray-700">Lavado de cabello premium</Text>
            </View>
            <View className="flex-row items-center">
              <View className="w-2 h-2 bg-primary rounded-full mr-3" />
              <Text className="text-gray-700">Servicio especializado</Text>
            </View>
            <View className="flex-row items-center">
              <View className="w-2 h-2 bg-primary rounded-full mr-3" />
              <Text className="text-gray-700">Productos de calidad</Text>
            </View>
          </View>
        </View>
      </View>
    )
}