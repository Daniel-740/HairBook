export interface Salon {
    id: number;
    name: string;
    type: string;
    location: string;
    description: string;
    creditCost: number;
  }
  
export interface SalonData {
    salons: Salon[];
  }