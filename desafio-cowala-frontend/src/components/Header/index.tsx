import React from 'react';

import Logo from '../../assets/Logo.png';

import { Container } from './styles';

const Header: React.FC = function () {
  return (
    <Container>
      <img src={Logo} alt="logo-image" />
    </Container>
  );
};

export default Header;
