import { styled } from 'styled-components';
import { User } from '../types/types';
import { UserCard } from './UserCard';

interface UsersListProps {
  users: User[];
  onEdit: (user: User) => void;
  onDelete: (userId: string) => void;
}

export const UsersList: React.FC<UsersListProps> = ({
  users,
  onEdit,
  onDelete,
}) => (
  <Container>
    {users.map((user) => (
      <UserCard
        key={user.id}
        user={user}
        onEdit={() => onEdit(user)}
        onDelete={() => onDelete(user.id)}
      />
    ))}
  </Container>
);

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`;
