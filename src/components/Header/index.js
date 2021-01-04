import React, { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import {
  FiMinus,
  FiMenu,
  FiX,
  FiGrid,
  FiFilePlus,
  FiUser,
  FiList,
  FiUserPlus,
  FiServer,
  FiPlusSquare,
  FiMessageCircle,
  FiSettings,
  FiLogOut,
} from 'react-icons/fi';

import {
  Container,
  Icon,
  Title,
  Lists,
  ControlPanel,
  Actions,
  Content,
  Services,
} from './styles';

const Header = () => {
  const [isClassNameControlPanel, setIsClassNameControlPanel] = useState(
    'list',
  );
  const [isControlPanel, setIsControlPanel] = useState(false);

  const [isClassNameActions, setIsClassNameActions] = useState('list');
  const [isActions, setIsActions] = useState(false);

  const [isClassNameServices, setIsClassNameServices] = useState('list');
  const [isServices, setIsServices] = useState(false);

  const [isMenu, setIsMenu] = useState(false);
  const [isDisplayMenu, setIsDisplayMenu] = useState('displayOff');

  const [isIconMenu, setIsIconMenu] = useState(false);
  const [isIconDisplay, setIsIconDisplay] = useState('displayZIndexNone');

  const handleControlPanel = useCallback(() => {
    if (isControlPanel) {
      setIsClassNameControlPanel('list');
      setIsControlPanel(false);
    } else {
      setIsClassNameControlPanel('listControlPanel');
      setIsControlPanel(true);

      setIsClassNameActions('list');
      setIsActions(false);

      setIsClassNameServices('list');
      setIsServices(false);
    }
  }, [isControlPanel]);

  const handleActions = useCallback(() => {
    if (isActions) {
      setIsClassNameActions('list');
      setIsActions(false);
    } else {
      setIsClassNameActions('listControlPanel');
      setIsActions(true);

      setIsClassNameControlPanel('list');
      setIsControlPanel(false);

      setIsClassNameServices('list');
      setIsServices(false);
    }
  }, [isActions]);

  const handleServices = useCallback(() => {
    if (isServices) {
      setIsClassNameServices('list');
      setIsServices(false);
    } else {
      setIsClassNameServices('listControlPanel');
      setIsServices(true);

      setIsClassNameControlPanel('list');
      setIsControlPanel(false);

      setIsClassNameActions('list');
      setIsActions(false);
    }
  }, [isServices]);

  const handleMenu = useCallback(() => {
    if (isMenu && isIconMenu) {
      setIsMenu(false);
      setIsDisplayMenu('displayOff');

      setIsIconMenu(false);
      setIsIconDisplay('displayZIndexNone');
    } else {
      setIsMenu(true);
      setIsDisplayMenu('displayOn');

      setIsIconMenu(true);
      setIsIconDisplay('displayZIndex1');
    }
  }, [isMenu, isIconMenu]);

  return (
    <Container>
      <Icon onClick={handleMenu} id={isIconDisplay}>
        {!isMenu ? <FiMenu /> : <FiX />}
      </Icon>
      <Title>Sistema de Gerenciamento de Clientes</Title>
      <Content id={isDisplayMenu}>
        <ControlPanel className="content">
          <div className="title">
            <Link to="/dashboard">
              <FiGrid />
              <h2>Painel de controle</h2>
            </Link>
          </div>
        </ControlPanel>

        <Lists className="content">
          <div className="title">
            <button type="button" onClick={handleControlPanel}>
              {!isControlPanel ? <FiList /> : <FiMinus />}
              <h2>Listas</h2>
            </button>
          </div>
          <div className={isClassNameControlPanel}>
            <Link to="/clientsList">
              <FiList />
              Listar Clientes
            </Link>
            <Link to="/serversList">
              <FiList />
              Listar Servidores
            </Link>
            <Link to="/plansList">
              <FiList />
              Listar Planos
            </Link>
          </div>
        </Lists>

        <Actions className="content">
          <div className="title">
            <button type="button" onClick={handleActions}>
              {!isActions ? <FiFilePlus /> : <FiMinus />}
              <h2>Cadastrar</h2>
            </button>
          </div>
          <div className={isClassNameActions}>
            <Link to="/registerCustomers">
              <FiUserPlus />
              Cadastrar Clientes
            </Link>
            <Link to="/dashboard">
              <FiServer />
              Cadastrar Servidores
            </Link>
            <Link to="/dashboard">
              <FiPlusSquare />
              Cadastrar Planos
            </Link>
            <Link to="/dashboard">
              <FiMessageCircle />
              Mensagem WhatsApp
            </Link>
          </div>
        </Actions>

        <Services className="content" onClick={handleServices}>
          <div className="title">
            <button type="button">
              {!isServices ? <FiUser /> : <FiMinus />}
              <h2>Usuário</h2>
            </button>
          </div>
          <div className={isClassNameServices}>
            <Link to="/dashboard">
              <FiSettings />
              Meu Perfil
            </Link>
            <Link to="/">
              <FiLogOut />
              Sair
            </Link>
          </div>
        </Services>
      </Content>
    </Container>
  );
};

export default Header;
