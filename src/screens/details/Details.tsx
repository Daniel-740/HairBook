import { View, Text, ScrollView } from 'react-native';
import { useRoute } from '@react-navigation/native';
import {
  MapPinIcon,
  ClockIcon,
} from 'react-native-heroicons/outline';
import { TicketIcon } from 'react-native-heroicons/solid';
import { useAppNavigation } from '@/hooks/useAppNavigation';
import { useDetails } from '@/hooks/useDetails';
import { SalonNotFound } from '@/components/salons/SalonNotFound';
import { ReviewSection } from '@/components/reviews/ReviewSection';
import { ServiceSection } from '@/components/services/ServiceSection';
import { BookingSection } from '@/components/reservations/BookingSection';

export const Details = () => {
  const route = useRoute();
  const navigation = useAppNavigation();
  const { salonId } = route.params as { salonId: string };
  const { salon, handleReservation, isReserved } = useDetails(
    parseInt(salonId),
  );

  if (!salon) return <SalonNotFound navigation={navigation} />;

  return (
    <ScrollView className="flex-1 bg-gray-50">
      <View className="bg-white mx-4 mt-4 rounded-xl shadow-sm overflow-hidden">
        <View className="p-6">
          <View className="flex-row justify-between items-start mb-4">
            <View className="flex-1">
              <Text className="text-2xl font-bold text-gray-900 mb-2">
                {salon.name}
              </Text>
              <View className="px-3 py-1 bg-primary-50 rounded-full self-start">
                <Text className="text-sm text-primary font-medium">
                  {salon.type}
                </Text>
              </View>
            </View>
            <View className="items-center bg-primary-50 px-4 py-2 rounded-lg">
              <View className="flex-row items-center">
                <TicketIcon size={18} color="#FA9E31" />
                <Text className="text-lg font-bold text-primary ml-1">
                  {salon.creditCost}
                </Text>
              </View>
              <Text className="text-xs text-primary">créditos</Text>
            </View>
          </View>

          <Text className="text-gray-600 text-base leading-6 mb-4">
            {salon.description}
          </Text>

          <View className="flex-row items-center mb-2">
            <MapPinIcon size={18} color="#6B7280" />
            <Text className="ml-2 text-gray-600">{salon.location}</Text>
          </View>

          <View className="flex-row items-center">
            <ClockIcon size={18} color="#6B7280" />
            <Text className="ml-2 text-gray-600">
              Lun - Sáb: 9:00 AM - 7:00 PM
            </Text>
          </View>
        </View>
      </View>

      {/* Services Section */}
      <ServiceSection />

      {/* Reviews Section */}
      <ReviewSection />

      {/* Booking Section */}
      <BookingSection
        handleReservation={handleReservation}
        isReserved={isReserved}
        navigation={navigation}
        salon={salon}
      />
    </ScrollView>
  );
};
