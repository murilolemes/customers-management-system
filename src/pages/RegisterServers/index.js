import React from 'react';

import Header from '../../components/Header';

import { Container, Content, Form, DivButtons } from './styles';

const RegisterServers = () => (
  <Container>
    <Header />
    <Content>
      <h2>Cadastro de Servidores</h2>
      <Form action="/dashboard">
        <div>
          <div>
            <label htmlFor="name">
              Nome
              <div>
                <input type="text" placeholder="Digite o nome do servidor" />
              </div>
            </label>

            <label htmlFor="credits">
              Créditos
              <div>
                <input
                  type="number"
                  placeholder="Digite a quantidade de Crédito"
                />
              </div>
            </label>
          </div>
        </div>

        <DivButtons>
          <button type="submit" id="submit">
            Enviar
          </button>
        </DivButtons>
      </Form>
    </Content>
  </Container>
);
export default RegisterServers;
