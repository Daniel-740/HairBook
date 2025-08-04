import usersJSON from '@/mocks/users.json';
import { User } from '@/interfaces/user.interface';

const users: User[] = usersJSON.users;

export const login = (email: string, password: string): User => {
  const user = users.find(
    (item: User) => item.email === email && item.password === password,
  );

  if (!user) throw new Error('User not found');

  return user;
};

export const logOut = (): void => {

}

export const getUserById = (id: number): User | undefined =>
  users.find((user: User) => user.id === id);


export const getAllUsers = (): User[] => users;