import { Text, TouchableOpacity, View } from 'react-native';
import { MenuItemProps } from './menuItem.interface';

export const MenuItem = (props: MenuItemProps) => {
  const { IconOutline, IconSolid, label, isActive, onPress } = props;

  const Icon = isActive ? IconSolid : IconOutline;

  return (
    <TouchableOpacity
      onPress={onPress}
      className="flex-1 items-center justify-center py-3"
      activeOpacity={0.7}
    >
      <View
        className={`items-center justify-center mb-1 ${isActive ? 'transform scale-110' : ''}`}
      >
        <Icon size={24} color={isActive ? '#FA9E31' : '#9CA3AF'} />
      </View>
      <Text
        className={`text-xs font-medium ${isActive ? 'text-primary' : 'text-gray-400'}`}
      >
        {label}
      </Text>
      {isActive && (
        <View className="absolute top-1 w-6 h-0.5 bg-primary rounded-full" />
      )}
    </TouchableOpacity>
  );
};
