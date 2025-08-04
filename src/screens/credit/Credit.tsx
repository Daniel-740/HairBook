import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TicketIcon } from 'react-native-heroicons/solid';
import { useCredit } from '@/hooks/useCredit';

export const Credit = () => {
  const {
    credit,
    handleCreditRecharge,
    handleNumericChange,
    userApp,
  } = useCredit();

  return (
    <SafeAreaView className="flex-1">
      <ScrollView className="flex-1 px-4 py-4">
        <View className="items-center mb-8">
          <Text className="text-3xl font-bold text-primary mb-2">
            HairBook - Creditos
          </Text>
          <Text className="text-lg text-gray-600 text-center">
            Recarga creditos para poder reservar citas con tus estilistas
            favoritos.
          </Text>
        </View>

        <View className="mb-16">
          <Text className="text-lg text-center font-semibold text-primary mb-4">
            Creditos Disponibles
          </Text>
          <View className="flex flex-row gap-x-2 items-center justify-center">
            <TicketIcon size={24} color="#FA9E31" />
            <Text className="text-2xl text-center font-bold text-gray-800">
              {userApp?.credits || '0'}
            </Text>
          </View>
        </View>

        <View className="flex gap-y-6 px-8">
          <View className="flex-row justify-between border-b border-gray-300 pb-2">
            <TextInput
              className="text-gray-700 pr-4"
              placeholder="creditos"
              placeholderTextColor="#9CA3AF"
              value={credit}
              onChangeText={handleNumericChange}
              keyboardType={'number-pad'}
              maxLength={3}
            />

            <TouchableOpacity
              className="bg-primary p-2 rounded-lg"
              onPress={() => handleCreditRecharge()}
            >
              <Text className="text-white text-center text-lg font-semibold">
                Recargar Creditos
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
