import React from 'react';
import styled from 'styled-components'

const StyledHeader = styled.header`
height: 60px;
display: flex;
justify-content: flex-start;
background: #f7b3b9fc;
`;

const Title = styled.h1`
margin:auto 0;
padding: 0 20px;
`;

const Header = () => (
    <StyledHeader>
      <Title>ToDo List</Title>
    </StyledHeader>
);

export default Header;