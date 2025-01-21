import React from 'react';
export const Sidebar = () => {
  const logotipo = 'at.png';
  return (
    <aside className="main-sidebar sidebar-dark-primary elevation-40 sidebar-dark-info">
      <a href="/dashboard" className="brand-link">
        <img
          src={`../../../../assets/img/${logotipo}`}
          alt="AdminLTE Logo"
          className="brand-imagee img-circlee elevation-3e"
          style={{ opacity: 0.8 }}
        />
        <span className="brand-text font-weight-lightf">
          <b></b>
        </span>
      </a>

      <div className="sidebar">
        <div className="user-panel d-flex">
          <div className="image">
            <img src="/assets/img/avatar5.png" className="img-circlee elevation-2e" alt="" />
          </div>
          <div className="info">
            <a href="#" className="d-block">
              Grécio Diogo
            </a>
          </div>
        </div>

        <nav className="mt-2">
          <ul
            className="nav nav-pills nav-sidebar flex-column nav-child-indent"
            data-widget="treeview"
            role="menu"
            data-accordion="false"
          >
            <li className="nav-item has-treeview">
              <a href="/dashboard" className="nav-link">
                <i className="nav-icon fas fa-tachometer-alt"></i>
                <p>Página Principal</p>
              </a>
            </li>
            ;
          </ul>
        </nav>
      </div>
    </aside>
  );
};
