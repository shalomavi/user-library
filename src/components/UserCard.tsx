import styled from 'styled-components';
import { User } from '../types/types';

interface UserCardProps {
  user: User;
  onEdit: () => void;
  onDelete: () => void;
}

export const UserCard: React.FC<UserCardProps> = ({
  user,
  onEdit,
  onDelete,
}) => (
  <Card>
    <StyledImage
      src={user.picture.medium}
      alt={`${user.name.first} ${user.name.last}`}
    />
    <h3>{`${user.name.title} ${user.name.first} ${user.name.last}`}</h3>
    <p>{user.email}</p>
    <p>{`${user.location.city}, ${user.location.country}`}</p>
    <Actions>
      <button onClick={onEdit}>Edit</button>
      <button onClick={onDelete}>Delete</button>
    </Actions>
  </Card>
);

const Card = styled.div`
  border: 1px solid #ccc;
  padding: 16px;
  margin: 8px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 300px;
  height: 300px;
  display: flex;
  flex-direction: column;
`;

const StyledImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
`;
const Actions = styled.div`
  margin-top: 8px;
  display: flex;
  gap: 8px;

  button {
    padding: 8px 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
    cursor: pointer;
    &:hover {
      background-color: #0070f3;
    }
  }
`;
