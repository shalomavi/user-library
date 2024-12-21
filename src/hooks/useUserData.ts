import { useState } from 'react';
import { User } from '../types/types';

export const useUsersData = () => {
  const [users, setUsers] = useState<User[]>([]);

  const addUser = (newUser: User) => {
    setUsers([...users, newUser]);
  };

  const updateUser = (updatedUser: User) => {
    setUsers(
      users.map((user) => (user.id === updatedUser.id ? updatedUser : user))
    );
  };

  const deleteUser = (userId: string) => {
    setUsers(users.filter((user) => user.id !== userId));
  };

  return { users, setUsers, addUser, updateUser, deleteUser };
};
