import { useUser } from "@/context/UserContext";
import { Image, Text, View } from "react-native";
import { TicketIcon } from "react-native-heroicons/solid";

export const HeaderHome = () => {

    const { userApp } = useUser();

  return (
    <View className="mb-2 flex-row items-center justify-">
      <Image
        source={require('../../../../assets/images/header.png')}
        className="w-full h-[240px] object-contain"
      />
      <Text className="ml-6 mb-4 text-xl absolute font-medium text-white w-44 overflow-hidden max-h-20">
        Hola {userApp?.name || 'Usuario'}!
      </Text>
      <Text className="ml-6 mt-16 text-2xl absolute text-center font-bold text-white">
        HairBook
      </Text>

      <View className="absolute right-8 justify-center items-center bg-white p-2 rounded-lg shadow-lg flex flex-row">
        <Text className="text-base font-semibold text-primary mr-2">
          Creditos:  
        </Text>
        <TicketIcon size={18} color="#FA9E31" />
        <Text className="text-lg font-bold text-primary ml-1">
          {userApp?.credits || 0}
        </Text>
      </View>
    </View>
  );
};
