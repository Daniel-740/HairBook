import { View } from 'react-native';
import { BottomMenu } from './bottomMenu/BottomMenu';
import { useRoute } from '@react-navigation/native';
import { Routes } from '@/navigation/routes';

interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout = ({ children }: MainLayoutProps) => {
  const route = useRoute();
  const currentRoute = route.name as Routes;

  return (
    <View className="flex-1">
      <View className="flex-1">
        {children}
      </View>
      <BottomMenu currentRoute={currentRoute} />
    </View>
  );
};
