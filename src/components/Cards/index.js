import React from 'react';

import { users, servers } from '../../services/server';

import {
  Container,
  CardActiveClient,
  CardInativeClient,
  CardActiveServers,
  CardInativeServers,
} from './styles';

const Cards = () => {
  const activeClient = users.filter((user) => user.status === 'Ativo');
  const inativeClient = users.filter((user) => user.status === 'Inativo');
  const activeServer = servers.filter((server) => server.status === 'Ativo');
  const inativeServer = servers.filter((server) => server.status === 'Inativo');

  return (
    <Container>
      <div>
        <CardActiveClient id="cards">
          <h2>Clientes Ativos</h2>
          <p>{activeClient.length}</p>
        </CardActiveClient>
        <CardInativeClient id="cards">
          <h2>Clientes Inativos</h2>
          <p>{inativeClient.length}</p>
        </CardInativeClient>
      </div>
      <div>
        <CardActiveServers id="cards">
          <h2>Servidores Ativos</h2>
          <p>{activeServer.length}</p>
        </CardActiveServers>
        <CardInativeServers id="cards">
          <h2>Servidores Inativos</h2>
          <p>{inativeServer.length}</p>
        </CardInativeServers>
      </div>
    </Container>
  );
};
export default Cards;
