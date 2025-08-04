import { View } from 'react-native';
import { Routes } from '@/navigation/routes';
import { useAppNavigation } from '@/hooks/useAppNavigation';
import { 
  HomeIcon,
  CreditCardIcon,
  UserIcon
} from 'react-native-heroicons/outline';
import {
  HomeIcon as HomeIconSolid,
  CreditCardIcon as CreditCardIconSolid,
  UserIcon as UserIconSolid
} from 'react-native-heroicons/solid';
import { MenuItem } from './MenuItem';
import { BottomMenuProps, menuItemsInterface } from './bottomMenu.interface';

export const BottomMenu = ({ currentRoute }: BottomMenuProps) => {
  const navigation = useAppNavigation();

  const menuItems: menuItemsInterface[] = [
    {
      route: Routes.HOME,
      IconOutline: HomeIcon,
      IconSolid: HomeIconSolid,
      label: 'Inicio',
    },
    {
      route: Routes.CREDIT,
      IconOutline: CreditCardIcon,
      IconSolid: CreditCardIconSolid,
      label: 'Créditos',
    },
    {
      route: Routes.PROFILE,
      IconOutline: UserIcon,
      IconSolid: UserIconSolid,
      label: 'Perfil',
    },
  ];

  const handleNavigation = (route: Routes) => {
    if (route !== currentRoute) {
      switch (route) {
        case Routes.HOME:
          navigation.navigate(Routes.HOME);
          break;
        case Routes.CREDIT:
          navigation.navigate(Routes.CREDIT);
          break;
        case Routes.PROFILE:
          navigation.navigate(Routes.PROFILE);
          break;
        case Routes.SIGN_IN:
          navigation.navigate(Routes.SIGN_IN);
          break;
        case Routes.DETAILS:
          // Details navigation is handled by SalonItem component
          break;
        case Routes.RESERVATIONS:
          navigation.navigate(Routes.RESERVATIONS);
          break;
        default:
          break;
      }
    }
  };

  return (
    <View className="bg-white border-t border-gray-200 shadow-lg">
      <View className="flex-row items-center justify-around px-2 pb-2 pt-1">
        {menuItems.map((item) => (
          <MenuItem
            key={item.route}
            IconOutline={item.IconOutline}
            IconSolid={item.IconSolid}
            label={item.label}
            isActive={currentRoute === item.route}
            onPress={() => handleNavigation(item.route)}
          />
        ))}
      </View>
    </View>
  );
};
