export interface User {
    id: number;
    name: string;
    email: string;
    password: string;
    credits: number;
    active: boolean;
  }
  
  export interface UsersData {
    users: User[];
  }