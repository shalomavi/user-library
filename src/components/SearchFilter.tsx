import React, { useState } from 'react';
import styled from 'styled-components';

interface SearchFilterProps {
  onSearch: (query: string) => void;
}

export const SearchFilter: React.FC<SearchFilterProps> = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <SearchContainer>
      <input
        type="text"
        placeholder="Search by name, email, or location"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </SearchContainer>
  );
};

const SearchContainer = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 16px;

  input {
    flex: 1;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }

  button {
    padding: 8px 16px;
    border: 1px solid #0070f3;
    border-radius: 4px;
    cursor: pointer;
  }
`;
