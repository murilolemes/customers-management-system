import React, { useCallback } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft, FiUser, FiMail } from 'react-icons/fi';

import { Container, Content, Form, DivInput } from './styles';

const Forgot = () => {
  const history = useHistory();

  const handleSubmit = useCallback(() => {
    history.push('/');
  }, [history]);
  return (
    <Container>
      <Content>
        <h1>Esqueci minha senha!</h1>
        <Form onSubmit={handleSubmit}>
          <DivInput>
            <div>
              <FiUser size={15} />
              <input placeholder="Login" />
            </div>
            <div>
              <FiMail size={15} />
              <input placeholder="E-mail" />
            </div>
          </DivInput>
          <button type="submit">Enviar</button>
        </Form>
        <Link to="/">
          <FiArrowLeft size={15} />
          Voltar ao Login
        </Link>
      </Content>
    </Container>
  );
};
export default Forgot;
