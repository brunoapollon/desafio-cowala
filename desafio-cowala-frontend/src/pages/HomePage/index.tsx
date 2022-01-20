import React, { useCallback, useState, useEffect } from 'react';

import Header from '../../components/Header';
import Form from '../../components/Form';

import { Container, Content } from './styles';

const HomePage: React.FC = function () {
  return (
    <Container>
      <Header />
      <Content>
        <Form />
      </Content>
    </Container>
  );
};

export default HomePage;
