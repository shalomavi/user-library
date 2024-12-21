'use client';

import React from 'react';
import styled from 'styled-components';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <MainContainer>
          <Header>
            <h1>User Library App</h1>
          </Header>
          <Content>{children}</Content>
          <Footer>&copy; {new Date().getFullYear()} User Library App</Footer>
        </MainContainer>
      </body>
    </html>
  );
}

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family: Arial, sans-serif;
`;

const Header = styled.header`
  background-color: #0070f3;
  color: white;
  padding: 16px;
  text-align: center;
`;

const Content = styled.main`
  flex: 1;
  padding: 16px;
  background-color: #f5f5f5;
`;

const Footer = styled.footer`
  background-color: #333;
  color: white;
  text-align: center;
  padding: 8px 16px;
`;
