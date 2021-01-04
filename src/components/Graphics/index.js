import React from 'react';
import { Bar } from 'react-chartjs-2';
import { shade } from 'polished';

import { users, servers } from '../../services/server';

import { Container } from './styles';

const listPlans = [
  {
    plan: 'Plano A',
    qtd: '1205',
  },
  {
    plan: 'Plano B',
    qtd: '977',
  },
  {
    plan: 'Plano C',
    qtd: '1054',
  },
  {
    plan: 'Plano D',
    qtd: '899',
  },
  {
    plan: 'Plano E',
    qtd: '1368',
  },
  {
    plan: 'Plano F',
    qtd: '1295',
  },
  {
    plan: 'Plano G',
    qtd: '1580',
  },
  {
    plan: 'Plano H',
    qtd: '1445',
  },
  {
    plan: 'Plano I',
    qtd: '1150',
  },
  {
    plan: 'Plano J',
    qtd: '924',
  },
];

export const GraphicsServers = () => {
  const data = {
    labels: servers.map((server) => server.server),
    datasets: [
      {
        label: 'Crédito disponível por servidor',
        data: servers.map((server) => server.credits),
        backgroundColor: shade(0.2, '#ff9000'),
        hoverBackgroundColor: '#ff9000',
      },
    ],
  };

  return (
    <Container>
      <Bar
        data={data}
        options={{
          maintainAspectRatio: false,
        }}
      />
    </Container>
  );
};

export const GraphicsClient = () => {
  const ups = servers.map(
    (s) => users.filter((u) => u.server === s.server).length,
  );

  const usersPerServer = ups;

  const data = {
    labels: servers.map((server) => server.server),
    datasets: [
      {
        label: 'Clientes ativos por servidor',
        data: usersPerServer,
        backgroundColor: shade(0.2, '#ff9000'),
        hoverBackgroundColor: '#ff9000',
      },
    ],
  };

  return (
    <Container>
      <Bar
        data={data}
        options={{
          maintainAspectRatio: false,
        }}
      />
    </Container>
  );
};

export const GraphicsPlans = () => {
  const data = {
    labels: listPlans.map((plans) => plans.plan),
    datasets: [
      {
        label: 'Clientes ativos por plano',
        data: listPlans.map((plans) => plans.qtd),
        backgroundColor: shade(0.2, '#ff9000'),
        hoverBackgroundColor: '#ff9000',
      },
    ],
  };

  return (
    <Container>
      <Bar
        data={data}
        options={{
          maintainAspectRatio: false,
        }}
      />
    </Container>
  );
};
