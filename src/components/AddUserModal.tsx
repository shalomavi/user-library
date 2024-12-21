import React, { useState } from 'react';
import styled from 'styled-components';
import { User } from '../types/types';

interface AddUserModalProps {
  onAdd: (newUser: User) => void;
  onClose: () => void;
}

export const AddUserModal: React.FC<AddUserModalProps> = ({
  onAdd,
  onClose,
}) => {
  const [newUser, setNewUser] = useState<User>({
    id: String(Date.now()),
    name: { title: 'Mr', first: '', last: '' },
    email: '',
    location: { country: '', city: '', street: '' },
    picture: { medium: '' },
  });

  const handleAdd = () => {
    if (!newUser.name.first || !newUser.email || !newUser.location.country) {
      alert('All fields are required!');
      return;
    }
    onAdd(newUser);
    onClose();
  };

  return (
    <Modal>
      <StyledForm>
        <StyledLabel>
          <span>First Name:</span>
          <StyledInput
            type="text"
            value={newUser.name.first}
            onChange={(e) =>
              setNewUser({
                ...newUser,
                name: { ...newUser.name, first: e.target.value },
              })
            }
          />
        </StyledLabel>
        <StyledLabel>
          <span>Email:</span>
          <StyledInput
            type="email"
            value={newUser.email}
            onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
          />
        </StyledLabel>
        <StyledLabel>
          <span>Country:</span>
          <StyledInput
            type="text"
            value={newUser.location.country}
            onChange={(e) =>
              setNewUser({
                ...newUser,
                location: { ...newUser.location, country: e.target.value },
              })
            }
          />
        </StyledLabel>
        <ButtonsContainer>
          <StyledButton type="button" onClick={handleAdd}>
            Add
          </StyledButton>
          <StyledButton type="button" onClick={onClose}>
            Cancel
          </StyledButton>
        </ButtonsContainer>
      </StyledForm>
    </Modal>
  );
};

const Modal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 400px;
  height: 300px;
  transform: translate(-50%, -50%);
  background: white;
  padding: 16px;
  border-radius: 8px;
`;
const ButtonsContainer = styled.div`
  display: flex;
  gap: 8px;
`;
const StyledButton = styled.button`
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  :first-child {
    border: 1px solid #0070f3;
  }
  &:hover {
    background-color: #0070f3;
  }
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
  height: 100%;
`;
const StyledInput = styled.input`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;

  &:focus {
    outline: none;
    border-color: #0070f3;
    box-shadow: 0 0 3px rgba(0, 112, 243, 0.5);
  }
`;

const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  width: 100%;
  font-size: 14px;
  color: #333;

  span {
    margin-bottom: 4px;
    font-weight: bold;
  }
`;
