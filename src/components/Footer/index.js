import React from 'react';
import styled from 'styled-components'

const Footer = () => (
  <StyledFooter>
    <Copyright>anastasiyaBH, 2019</Copyright>
  </StyledFooter>
);

export default Footer;

const StyledFooter = styled.footer`
  height: 30px;
  flex: 0 0 auto;
  display: flex;
  justify-content: flex-end;
  background: #d2d2d2;
`;

const Copyright = styled.p`
  margin: auto 0; 
  padding: 0 20px;
`;
