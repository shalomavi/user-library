'use client';

import React, { useEffect } from 'react';
import { UsersList } from '../components/UsersList';
import { AddUserModal } from '../components/AddUserModal';
import { EditUserModal } from '../components/EditUserModal';
import { SearchFilter } from '../components/SearchFilter';
import { useUsersData } from '../hooks/useUserData';
import { useModal } from '../hooks/useModal';
import styled from 'styled-components';
import { User } from '../types/types';

export default function Page() {
  const { users, setUsers, addUser, updateUser, deleteUser } = useUsersData();
  const addModal = useModal();
  const editModal = useModal();
  const [editingUser, setEditingUser] = React.useState<User | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch('https://randomuser.me/api/?results=10');
      const data = await response.json();
      const transformedUsers: User[] = data.results.map((user: any) => ({
        id: user.login.uuid,
        name: user.name,
        email: user.email,
        location: {
          country: user.location.country,
          city: user.location.city,
          street: user.location.street.name,
        },
        picture: user.picture,
      }));
      setUsers(transformedUsers);
    };

    fetchUsers();
  }, [setUsers]);

  const handleSearch = (query: string) => {
    const filteredUsers = users.filter(
      (user) =>
        user.name.first.toLowerCase().includes(query.toLowerCase()) ||
        user.email.toLowerCase().includes(query.toLowerCase()) ||
        user.location.city.toLowerCase().includes(query.toLowerCase()) ||
        user.location.country.toLowerCase().includes(query.toLowerCase())
    );
    setUsers(filteredUsers);
  };

  return (
    <Container>
      <Header>
        <h1>User Library</h1>
        <StyledButton onClick={addModal.openModal}>Add User</StyledButton>
      </Header>
      <SearchFilter onSearch={handleSearch} />
      <UsersList
        users={users}
        onEdit={(user) => {
          setEditingUser(user);
          editModal.openModal();
        }}
        onDelete={(userId) => {
          if (confirm('Are you sure you want to delete this user?')) {
            deleteUser(userId);
          }
        }}
      />
      {addModal.isOpen && (
        <AddUserModal onAdd={addUser} onClose={addModal.closeModal} />
      )}
      {editModal.isOpen && editingUser && (
        <EditUserModal
          user={editingUser}
          onSave={updateUser}
          onClose={() => {
            setEditingUser(null);
            editModal.closeModal();
          }}
        />
      )}
    </Container>
  );
}

const Container = styled.div`
  padding: 16px;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;

  h1 {
    margin: 0;
  }

  button {
    padding: 8px 16px;
  }
`;

const StyledButton = styled.button`
  padding: 8px 16px;
  border: 1px solid #0070f3;
  border-radius: 4px;
  cursor: pointer;
`;
