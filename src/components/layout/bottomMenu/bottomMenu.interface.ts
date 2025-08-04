import { Routes } from "@/navigation";

export interface BottomMenuProps {
    currentRoute: Routes;
  }
  
export type IconComponentType = React.ComponentType<{
    size?: number;
    color?: string;
    strokeWidth?: number;
  }>;
  
export interface menuItemsInterface {
    route: Routes;
    IconOutline: IconComponentType;
    IconSolid: IconComponentType;
    label: string;
  }