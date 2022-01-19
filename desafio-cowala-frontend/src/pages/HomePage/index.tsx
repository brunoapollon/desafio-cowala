import React from 'react';

import Header from '../../components/Header';

import { Container, Content, SectionForm } from './styles';

const HomePage: React.FC = function () {
  return (
    <Container>
      <Header />
      <Content>
        <SectionForm />
      </Content>
    </Container>
  );
};

export default HomePage;
