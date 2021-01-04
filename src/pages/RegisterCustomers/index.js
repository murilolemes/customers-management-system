import React from 'react';

import Header from '../../components/Header';
import Input from '../../components/Inputs';

import { Container, Content, Form } from './styles';

const RegisterCustomers = () => (
  <Container>
    <Header />
    <Content>
      <h2>Cadastro de Clientes</h2>
      <Form>
        <Input />
        <Input />
        <Input />
        <Input />
        <Input />
        <Input />
        <Input />
        <Input />
        <Input />
      </Form>
    </Content>
  </Container>
);
export default RegisterCustomers;
