import React, { useCallback, useState, useEffect } from 'react';
import { Form as FormWEB } from '@unform/web';

import api from '../../services/api';

import Input from '../../components/Input';

import { Container } from './styles';

interface IformData {
  name: string;
  occupation: string;
  phone: string;
  ip: string;
}

interface Iuser {
  ip: string;
  name: string;
  occupation: string;
  phone: string;
}

const Form: React.FC = function () {
  const [name, setName] = useState('');
  const [occupation, setOccupation] = useState('');
  const [phone, setPhone] = useState('');
  const [ip, setIp] = useState('');

  useEffect(() => {
    const userStorage = localStorage.getItem('@DCS:user') || '';

    if (!!userStorage) {
      const user = JSON.parse(userStorage);
      const { ip, name, occupation, phone } = user;

      setName(name);
      setOccupation(occupation);
      setPhone(phone);
      setIp(ip);
    }
  }, []);

  const handleSubmit = useCallback(async (data: IformData) => {
    const { ip, name, occupation, phone } = data;
    if (
      ip.trim() === '' ||
      name.trim() === '' ||
      occupation.trim() === '' ||
      phone.trim() === ''
    )
      return;

    const user: Iuser = { ip, name, occupation, phone };

    localStorage.setItem('@DCS:user', JSON.stringify(user));
  }, []);

  const handleGetUserIp = useCallback(async () => {
    const { data } = await api.get('/ip');
    setIp(data);
  }, []);

  const handleClearAllData = useCallback(() => {
    setName('');
    setOccupation('');
    setPhone('');
    setIp('');

    localStorage.removeItem('@DCS:user');
  }, []);
  return (
    <Container>
      <FormWEB onSubmit={event => handleSubmit(event)}>
        <label>Nome:</label>
        <Input
          type="text"
          name="name"
          value={name}
          onChange={event => setName(event.target.value)}
        />
        <section>
          <div>
            <label>Profissão:</label>
            <Input
              type="text"
              name="occupation"
              value={occupation}
              onChange={event => setOccupation(event.target.value)}
            />
          </div>
          <div>
            <label>Celular:</label>
            <Input
              type="text"
              name="phone"
              value={phone}
              onChange={event => setPhone(event.target.value)}
            />
          </div>
        </section>
        <section>
          <div>
            <label>Meu IP:</label>
            <Input
              type="text"
              name="ip"
              disabled
              value={ip}
              onChange={event => setIp(event.target.value)}
            />
          </div>
          <button type="button" onClick={handleGetUserIp}>
            ENCONTRAR IP
          </button>
        </section>
        <footer>
          <button type="submit">SALVAR</button>
          <button type="button" onClick={handleClearAllData}>
            LIMPAR
          </button>
        </footer>
      </FormWEB>
    </Container>
  );
};

export default Form;
