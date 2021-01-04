import React from 'react';

import {
  Container,
  CardActiveClient,
  CardInativeClient,
  CardActiveServers,
  CardInativeServers,
} from './styles';

const Cards = () => (
  <Container>
    <div>
      <CardActiveClient id="cards">
        <h2>Clientes Ativos</h2>
        <p>1.250</p>
      </CardActiveClient>
      <CardInativeClient id="cards">
        <h2>Clientes Inativos</h2>
        <p>50</p>
      </CardInativeClient>
    </div>
    <div>
      <CardActiveServers id="cards">
        <h2>Servidores Ativos</h2>
        <p>15</p>
      </CardActiveServers>
      <CardInativeServers id="cards">
        <h2>Servidores Inativos</h2>
        <p>15</p>
      </CardInativeServers>
    </div>
  </Container>
);
export default Cards;
