import React, { useCallback } from 'react';
import { Form } from '@unform/web';

import Header from '../../components/Header';
import Input from '../../components/Input';

import { Container, Content, SectionForm } from './styles';

interface formData {
  name: string;
  occupation: string;
  phone: string;
  ip: string;
}

const HomePage: React.FC = function () {
  const handleSubmit = useCallback(async (data: formData) => {
    console.log(data);
  }, []);

  return (
    <Container>
      <Header />
      <Content>
        <SectionForm>
          <Form onSubmit={event => handleSubmit(event)}>
            <label>Nome:</label>
            <Input type="text" name="name" />
            <section>
              <div>
                <label>Profissão:</label>
                <Input type="text" name="occupation" />
              </div>
              <div>
                <label>Celular:</label>
                <Input type="text" name="phone" />
              </div>
            </section>
            <section>
              <div>
                <label>Meu IP:</label>
                <Input type="text" name="ip" disabled />
              </div>
              <button>ENCONTRAR IP</button>
            </section>
            <footer>
              <button type="submit">SALVAR</button>
              <button type="button">lIMPAR</button>
            </footer>
          </Form>
        </SectionForm>
      </Content>
    </Container>
  );
};

export default HomePage;
