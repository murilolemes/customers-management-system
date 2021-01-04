import React, { useCallback } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn, FiUser, FiLock } from 'react-icons/fi';

import { Container, Content, Form, DivInput } from './styles';

const SignIn = () => {
  const history = useHistory();

  const handleSubmit = useCallback(() => {
    history.push('/dashboard');
  }, [history]);
  return (
    <Container>
      <Content>
        <h1>SGC</h1>
        <Form onSubmit={handleSubmit}>
          <DivInput>
            <div>
              <FiUser size={15} />
              <input className="login" placeholder="Login" />
            </div>
            <div>
              <FiLock size={15} />
              <input className="password" type="password" placeholder="Senha" />
            </div>
          </DivInput>
          <button type="submit">Entrar</button>
        </Form>
        <Link to="/forgot">
          <FiLogIn size={13} />
          Esqueci minha senha
        </Link>
      </Content>
    </Container>
  );
};
export default SignIn;
