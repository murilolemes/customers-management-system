import React from 'react';

import Header from '../../components/Header';

import { Container, Content, Form, DivButtons } from './styles';

const RegisterCustomers = () => (
  <Container>
    <Header />
    <Content>
      <h2>Cadastro de Clientes</h2>
      <Form action="/dashboard">
        <div>
          <div>
            <label htmlFor="name">
              Nome
              <div>
                <input type="text" placeholder="Digite o nome" />
              </div>
            </label>

            <label htmlFor="whatsapp">
              WhatsApp
              <div>
                <input placeholder="Digite o whatsApp" />
              </div>
            </label>

            <label htmlFor="email">
              E-mail
              <div>
                <input placeholder="Digite o e-mail" />
              </div>
            </label>

            <label htmlFor="login">
              Login
              <div>
                <input placeholder="Digite o login" />
              </div>
            </label>

            <label htmlFor="password">
              Senha
              <div>
                <input placeholder="Digite a senha" type="password" />
              </div>
            </label>
          </div>

          <div>
            <label htmlFor="servers">
              Servidor
              <div>
                <select required>
                  <option value="">Selecione uma servidor</option>
                  <option value="Servidor 1">Servidor 1</option>
                  <option value="Servidor 2">Servidor 2</option>
                  <option value="Servidor 3">Servidor 3</option>
                </select>
              </div>
            </label>

            <label htmlFor="plans">
              Planos
              <div>
                <select required>
                  <option value="">Selecione um plano</option>
                  <option value="Plano 1">Plano 1</option>
                  <option value="Plano 2">Plano 2</option>
                  <option value="Plano 3">Plano 3</option>
                </select>
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

            <label htmlFor="ExpirationDate">
              Vencimento
              <div>
                <select required>
                  <option value="">Selecione uma opção</option>
                  <option value="01">Dia 01</option>
                  <option value="05">Dia 05</option>
                  <option value="10">Dia 10</option>
                  <option value="15">Dia 15</option>
                  <option value="20">Dia 20</option>
                  <option value="25">Dia 25</option>
                </select>
              </div>
            </label>

            <label htmlFor="contract">
              Data de Contrato
              <div>
                <input type="date" />
              </div>
            </label>
          </div>
        </div>

        <DivButtons>
          {/* <button type="button" id="cancel">
            Cancelar
          </button> */}

          <button type="submit" id="submit">
            Enviar
          </button>
        </DivButtons>
      </Form>
    </Content>
  </Container>
);
export default RegisterCustomers;
