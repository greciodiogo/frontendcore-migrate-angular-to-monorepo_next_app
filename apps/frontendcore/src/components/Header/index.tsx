import React from 'react';
export const Header = () => {
  return (
    <nav className="main-header navbar navbar-expand navbar-white navbar-light">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" data-widget="pushmenu" href="#">
            <i className="fa fa-bars"></i>
          </a>
        </li>
      </ul>

      <form className="form-inline ml-3">
        <div className="input-group input-group-sm">
          <input
            className="form-control form-control-navbar"
            type="search"
            placeholder="Pesquisar..."
            aria-label="Search"
          />
          <div className="input-group-append">
            <button className="btn btn-navbar" type="submit">
              <i className="fas fa-search"></i>
            </button>
          </div>
        </div>
      </form>

      <ul className="navbar-nav ml-auto">
        <li className="nav-item dropdown">
          <a className="nav-link nav-header" data-toggle="dropdown" href="#" aria-expanded="true">
            <i className="far fa-bell"></i>
            <span className="badge badge-info navbar-badge" style={{ top: '-7px', right: '-5px' }}>
              15
            </span>
          </a>
          <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right" style={{ left: 'inherit', right: '0px' }}>
            <span className="dropdown-item dropdown-header">15 Notificações</span>
            <div className="dropdown-divider"></div>
            <a href="#" className="dropdown-item">
              <i className="fas fa-envelope mr-2"></i> 4 new messages
              <span className="float-right text-muted text-sm">3 mins</span>
            </a>
            <div className="dropdown-divider"></div>
            <a href="#" className="dropdown-item">
              <i className="fas fa-users mr-2"></i> 8 friend requests
              <span className="float-right text-muted text-sm">12 hours</span>
            </a>
            <div className="dropdown-divider"></div>
            <a href="#" className="dropdown-item">
              <i className="fas fa-file mr-2"></i> 3 new reports
              <span className="float-right text-muted text-sm">2 days</span>
            </a>
            <div className="dropdown-divider"></div>
            <a href="#" className="dropdown-item dropdown-footer">
              See All Notifications
            </a>
          </div>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link nav-header" data-toggle="dropdown" href="#">
            <i className="fa fa-wifi"></i>
            <span className="badge badge-warning navbar-badge" style={{ top: '-7px', right: '-5px' }}></span>
          </a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link nav-header" data-toggle="dropdown" href="#">
            <i className="icon-user"></i>
          </a>
          <div
            className="dropdown-menu dropdown-menu-lg dropdown-menu-right"
            style={{ left: '-100px', borderRadius: '3px', padding: 0 }}
          >
            <span
              className="dropdown-item dropdown-header"
              style={{ background: '#22283a', color: '#dad7d7', padding: '25px 20px' }}
            >
              <div className="image">
                <img className="image-user" src="/assets/img/avatar5.png" alt="" />
              </div>
            </span>
            <div className="dropdown-divider"></div>
            <a href="#" className="dropdown-item">
              Grécio Diogo
            </a>
            <div className="dropdown-divider"></div>
            <a href="#" className="dropdown-item">
              <i className="icon-user mr-2"></i> Meu Perfil
            </a>
            <div className="dropdown-divider"></div>
            <a href="#" className="dropdown-item">
              <i className="fa fa-cog mr-2"></i> Definição
            </a>
            <div className="dropdown-divider"></div>
            <a
              href="#"
              className="dropdown-item"
              data-toggle="modal"
              data-target="#modalRegistarRedefinirPasswordUserLogado"
            >
              <i className="icon-note mr-2"></i> Alterar Password
            </a>
            <div className="dropdown-divider"></div>
            <a href="#" className="dropdown-item">
              <i className="fa fa-folder mr-2"></i> Actividades
            </a>
            <div className="dropdown-divider"></div>
            <a href="#" className="dropdown-item" style={{ background: '#ecf0f5' }} data-slide="true">
              <i className="icon-login mr-2"></i> Terminar Sessão
            </a>
          </div>
        </li>
        <li className="nav-item nav-header">
          <a className="nav-link" data-widget="control-sidebar" data-slide="true" href="#">
            <i className="icon-login"></i>
          </a>
        </li>
      </ul>
    </nav>
  );
};
