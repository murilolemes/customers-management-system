import React, { useCallback, useState } from 'react';
import { FiEye, FiX, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { BiFilter } from 'react-icons/bi';

import Header from '../../components/Header';
import { users, servers } from '../../services/server';

import {
  Container,
  ClientFilter,
  ContentFilter,
  DivTitleFilter,
  Body,
  InputDiv,
  Button,
  Content,
  DivFilter,
  Table,
  DivPages,
} from './styles';

const PlanList = () => {
  const [isFilterUser, setIsFilterUser] = useState(users);
  const filterStatus = useState([]);
  const filterServer = useState([]);
  const filterSituation = useState([]);
  const [page, setPage] = useState(0);
  const rowsPerPage = 14;

  const handleButtonClose = useCallback(() => {
    const displayContainer = document.getElementById('clientFilter');
    displayContainer.style.display = 'none';
  }, []);

  const handleButton = useCallback(() => {
    const displayContainer = document.getElementById('clientFilter');
    // const inputName = document.getElementById('inputName').value;
    const inputStatus = document.getElementById('inputStatus').value;
    const inputServer = document.getElementById('inputServer').value;
    const inputSituation = document.getElementById('inputSituation').value;
    // const inputDateContractInitial = document.getElementById(
    //   'inputDateContractInitial',
    // ).value;
    // const inputDateContractEnd = document.getElementById('inputDateContractEnd')
    //   .value;

    if (inputStatus !== '') {
      filterStatus.push(users.filter((user) => user.status === inputStatus));
    } else {
      filterStatus.push(users);
    }

    if (inputServer !== '') {
      filterServer.push(
        filterStatus[2].filter((user) => user.server === inputServer),
      );
    } else {
      filterServer.push(filterStatus[2]);
    }

    if (inputSituation !== '') {
      filterSituation.push(
        filterServer[2].filter((user) => user.situation === inputSituation),
      );
    } else {
      filterSituation.push(filterServer[2]);
    }

    setIsFilterUser(filterSituation[2]);

    displayContainer.style.display = 'none';
  }, [filterStatus, filterServer, filterSituation]);

  const handleFilter = useCallback(() => {
    const displayContainer = document.getElementById('clientFilter');
    displayContainer.style.display = 'flex';
  }, []);

  const handleNextPage = useCallback(() => {
    setPage(page + 1);
  }, [page]);

  const handlePreviousPage = useCallback(() => {
    setPage(page - 1);
  }, [page]);

  const firstLinePage = page === 0 ? 1 : page * rowsPerPage + 1;

  const calcLastLinePage = page === 0 ? 14 : page * rowsPerPage + rowsPerPage;

  const restPage = isFilterUser.length % rowsPerPage;

  const lastPage = isFilterUser.length / rowsPerPage;

  const lastLinePage =
    lastPage < page + 1 ? firstLinePage + restPage - 1 : calcLastLinePage;

  return (
    <Container>
      <ClientFilter id="clientFilter">
        <ContentFilter>
          <DivTitleFilter>
            <h2>Filtro</h2>
            <button type="button" onClick={handleButtonClose}>
              <FiX size={30} />
            </button>
          </DivTitleFilter>

          <Body>
            <InputDiv id="SelectDiv">
              <label htmlFor="name" disabled>
                Nome
                <div>
                  <input
                    type="text"
                    id="inputName"
                    placeholder="Digite o nome"
                    disabled
                  />
                </div>
              </label>

              <label htmlFor="status">
                Status
                <div>
                  <select id="inputStatus">
                    <option value="">Selecione um status</option>
                    <option value="Ativo">Ativo</option>
                    <option value="Inativo">Inativo</option>
                  </select>
                </div>
              </label>

              <label htmlFor="server">
                Servidor
                <div>
                  <select id="inputServer">
                    <option value="">Selecione um servidor</option>
                    {servers.map((server) => (
                      <option key={server.id} value={server.server}>
                        Servidor {server.id + 1}
                      </option>
                    ))}
                  </select>
                </div>
              </label>

              <label htmlFor="situation">
                Situação
                <div>
                  <select id="inputSituation" required>
                    <option value="">Selecione uma situação</option>
                    <option value="Pago">Pago</option>
                    <option value="Pendente">Pendente</option>
                    <option value="Deve">Deve</option>
                  </select>
                </div>
              </label>

              <div id="divInputDateContract">
                <label htmlFor="contractInitial">
                  Data de Contrato
                  <div>
                    <input type="date" id="inputDateContractInitial" disabled />
                  </div>
                </label>

                <label htmlFor="contractEnd">
                  Até
                  <div>
                    <input type="date" id="inputDateContractEnd" disabled />
                  </div>
                </label>
              </div>
              <div id="divInputExpirationDate">
                <label htmlFor="ExpirationDateInitial">
                  Data de Vencimento
                  <div>
                    <input
                      type="date"
                      id="inputExpirationDateInitial"
                      disabled
                    />
                  </div>
                </label>

                <label htmlFor="ExpirationDateEnd">
                  Até
                  <div>
                    <input type="date" id="inputExpirationDateEnd" disabled />
                  </div>
                </label>
              </div>
            </InputDiv>
          </Body>
          <Button type="button" id="filterButton" onClick={handleButton}>
            Enviar
          </Button>
        </ContentFilter>
      </ClientFilter>
      <Header />
      <Content>
        <DivFilter>
          <h2>Lista de Planos</h2>

          <button type="button" onClick={handleFilter}>
            <BiFilter size={30} />
          </button>
        </DivFilter>

        <Table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Data Contrato</th>
              <th>Servidor</th>
              <th>Plano</th>
              <th>Data Vencimento</th>
              <th>Situação</th>
              <th>Status</th>
              <th>Ver</th>
            </tr>
          </thead>
          <tbody>
            {isFilterUser
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((user) => (
                <tr key={user.id} id="tableBody">
                  <td>{user.name}</td>
                  <td>{user.contract}</td>
                  <td>{user.server}</td>
                  <td>{user.plan}</td>
                  <td>{user.expirationDate}</td>
                  <td>{user.situation}</td>
                  <td>{user.status}</td>
                  <td>
                    <button type="button">
                      <FiEye size={20} />
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </Table>
        <DivPages>
          <p>{`${firstLinePage} - ${lastLinePage} de ${isFilterUser.length}`}</p>
          <button
            type="button"
            disabled={page === 0}
            onClick={handlePreviousPage}
          >
            <FiChevronLeft />
          </button>
          <p>{page + 1}</p>
          <button
            type="button"
            disabled={
              lastPage < page + 1 || lastLinePage === isFilterUser.length
            }
            onClick={handleNextPage}
          >
            <FiChevronRight />
          </button>
        </DivPages>
      </Content>
    </Container>
  );
};
export default PlanList;
