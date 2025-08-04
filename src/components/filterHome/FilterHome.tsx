import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { FilterHomeProps } from './filterHome.interface';

export const FilterHome = (props: FilterHomeProps) => {
  const { categories, selectedCategory, setSelectedCategory } = props;

  return (
    <View className="px-4 py-3 bg-white">
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="py-1"
      >
        <TouchableOpacity
          className={`px-4 py-2 mr-2 rounded-full ${!selectedCategory ? 'bg-primary' : 'bg-gray-200'}`}
          onPress={() => setSelectedCategory(null)}
        >
          <Text
            className={`font-medium ${!selectedCategory ? 'text-white' : 'text-gray-700'}`}
          >
            Todos
          </Text>
        </TouchableOpacity>

        {categories.map((category) => (
          <TouchableOpacity
            key={category}
            className={`px-4 py-2 mr-2 rounded-full ${selectedCategory === category ? 'bg-primary' : 'bg-gray-200'}`}
            onPress={() => setSelectedCategory(category)}
          >
            <Text
              className={`font-medium ${selectedCategory === category ? 'text-white' : 'text-gray-700'}`}
            >
              {category}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};
