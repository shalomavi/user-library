import React, { useState } from 'react';
import styled from 'styled-components';
import { User } from '../types/types';

interface EditUserModalProps {
  user: User;
  onSave: (updatedUser: User) => void;
  onClose: () => void;
}

export const EditUserModal: React.FC<EditUserModalProps> = ({
  user,
  onSave,
  onClose,
}) => {
  const [editedUser, setEditedUser] = useState(user);

  const handleSave = () => {
    if (!editedUser.name.first || !editedUser.email) {
      alert('All fields are required!');
      return;
    }
    onSave(editedUser);
    onClose();
  };

  return (
    <Modal>
      <form>
        <label>
          First Name:
          <input
            type="text"
            value={editedUser.name.first}
            onChange={(e) =>
              setEditedUser({
                ...editedUser,
                name: { ...editedUser.name, first: e.target.value },
              })
            }
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            value={editedUser.email}
            onChange={(e) =>
              setEditedUser({ ...editedUser, email: e.target.value })
            }
          />
        </label>
        <button type="button" onClick={handleSave}>
          Save
        </button>
        <button type="button" onClick={onClose}>
          Cancel
        </button>
      </form>
    </Modal>
  );
};

const Modal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  padding: 16px;
  border-radius: 8px;
`;
