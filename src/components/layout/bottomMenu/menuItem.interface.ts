import { Routes } from "@/navigation";

export interface MenuItemProps {
  IconOutline: React.ComponentType<any>;
  IconSolid: React.ComponentType<any>;
  label: string;
  isActive: boolean;
  onPress: () => void;
}