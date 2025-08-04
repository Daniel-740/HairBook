// src/navigation/useNavigation.ts
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootParamsList } from '@/navigation'; 

export const useAppNavigation = () => {
  return useNavigation<StackNavigationProp<RootParamsList>>();
};