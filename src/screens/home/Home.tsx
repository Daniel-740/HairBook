import {
  View,
} from 'react-native';
import { useHome } from '@/hooks/useHome';
import { SearchHome } from '@/components/searchHome/SearchHome';
import { FilterHome } from '@/components/filterHome/FilterHome';
import { SalonList } from '@/components/lists/salonList/SalonList';

export const Home = () => {
  const {
    selectedCategory,
    setSelectedCategory,
    searchQuery,
    setSearchQuery,
    categories,
    filteredSalons,
    handleReservation,
  } = useHome();

  return (
    <View className="flex-1">
      <SearchHome searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      <FilterHome
        categories={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      <SalonList filteredSalons={filteredSalons} handleReservation={handleReservation} />
    </View>
  );
};
