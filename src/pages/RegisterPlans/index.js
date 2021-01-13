import React from 'react';

import Header from '../../components/Header';

import { Container, Content, Form, DivButtons } from './styles';

const RegisterPlans = () => (
  <Container>
    <Header />
    <Content>
      <h2>Cadastro de Planos</h2>
      <Form action="/dashboard">
        <div>
          <div>
            <label htmlFor="name">
              Nome
              <div>
                <input type="text" placeholder="Digite o nome do plano" />
              </div>
            </label>

            <label htmlFor="value">
              Valor
              <div>
                <input type="number" placeholder="Digite o valor do plano" />
              </div>
            </label>

            <label htmlFor="adultChannels">
              +18
              <div>
                <select required>
                  <option value="">Selecione uma opção</option>
                  <option value="true">Sim</option>
                  <option value="false">Não</option>
                </select>
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
export default RegisterPlans;
