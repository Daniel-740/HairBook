import { View, Text, TouchableOpacity } from 'react-native';
import { ArrowLeftIcon } from 'react-native-heroicons/outline';
import { useAppNavigation } from '@/hooks/useAppNavigation';
import { Routes } from '@/navigation/routes';

interface HeaderDetailsProps {
  title?: string;
  showBackButton?: boolean;
  backRoute?: Routes;
}

export const HeaderDetails = ({ 
  title = "Detalles del Salón", 
  showBackButton = true,
  backRoute = Routes.HOME
}: HeaderDetailsProps) => {
  const navigation = useAppNavigation();

  const handleGoBack = () => {
    switch (backRoute) {
      case Routes.HOME:
        navigation.navigate(Routes.HOME);
        break;
      case Routes.PROFILE:
        navigation.navigate(Routes.PROFILE);
        break;
      case Routes.CREDIT:
        navigation.navigate(Routes.CREDIT);
        break;
      case Routes.SIGN_IN:
        navigation.navigate(Routes.SIGN_IN);
        break;
      default:
        navigation.navigate(Routes.HOME);
        break;
    }
  };

  return (
    <View className="bg-white border-b border-gray-200 shadow-sm">
      <View className="flex-row items-center justify-between px-4 py-3 pt-12">
        {showBackButton ? (
          <TouchableOpacity
            onPress={handleGoBack}
            className="p-2 -ml-2"
          >
            <ArrowLeftIcon size={24} color="#374151" />
          </TouchableOpacity>
        ) : (
          <View className="w-8" />
        )}

        <Text className="text-lg font-bold text-gray-900 text-center flex-1">
          {title}
        </Text>

        <View className="w-8" />
      </View>
    </View>
  );
};
