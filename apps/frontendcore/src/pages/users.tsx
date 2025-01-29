import { FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';

import { useAuth } from 'hooks/useAuth';
const Users = () => {
  const { getUsers } = useAuth();
  const [users, setUsers] = useState([]);
  const [error, setError] = useState<string | null>(null);
  const [roles, setRoles] = useState([]);
  const [lojas, setLojas] = useState([]);
  const [filters, setFilters] = useState({
    page: 1,
    perPage: 5,
    search: '',
    orderBy: '',
    loja_id: '',
    role_id: '',
    typeFilter: '',
    typeOrderBy: 'ASC',
  });

  useEffect(() => {
    const fetchUsers = async () => {
      let params = new URLSearchParams({
        page: filters.page, 
        perPage: filters.perPage,
        search: filters.search,
        orderBy: filters.orderBy,
        lojaId: filters.loja_id,
        roleId: filters.role_id,
        typeOrderBy: filters.typeOrderBy,
        typeFilter: filters.typeFilter,
      });

      try {
        const data = await getUsers({params});
        setUsers(data?.data);
      } catch (err) {
        setError((err as Error).message);
      }
    };

    void fetchUsers();
  }, []);

  return (
    <div className="row">
      <div className="col-md-12 col-12">
        <div className="modall modal-info fadee" data-backdrop="static">
          <div className="modal-dialog" style={{ maxWidth: '100%', marginTop: 0 }}>
            <div className="modal-content" style={{ boxShadow: '0 0 0rem rgba(0,0,0,.5)' }}>
              {/* <!-- Modal Header --> */}
              <div className="modal-header">
                <h4 className="modal-title"> Filtro de Dados</h4>
              </div>
              {/* <!-- Modal body --> */}
              <div className="modal-body">
                <div className="row">
                  <FormControl className="col-md-1">
                    <InputLabel id="demo-simple-select-label">Age</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      // value={age}
                      label="Age"
                      // onChange={handleChange}
                      className="example-full-width
                "
                    >
                      <MenuItem value={5}>5</MenuItem>
                      <MenuItem value={10}>10</MenuItem>
                      <MenuItem value={25}>25</MenuItem>
                    </Select>
                  </FormControl>

                  <FormControl className="col-md-1">
                    <InputLabel id="demo-simple-select-label">Perfil</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      // value={age}
                      label="Age"
                      // onChange={handleChange}
                      className="example-full-width
                "
                    >
                      <MenuItem value="">Perfil</MenuItem>
                    </Select>
                  </FormControl>

                  <FormControl className="col-md-1">
                    <InputLabel id="demo-simple-select-label">Loja</InputLabel>
                    <Select
                      labelId="lojaId"
                      id="demo-simple-select"
                      // value={age}
                      label="Age"
                      // onChange={handleChange}
                      className="example-full-width
                "
                    >
                      <MenuItem value="">Loja</MenuItem>
                    </Select>
                  </FormControl>

                  <FormControl className="col-md-1">
                    <InputLabel id="demo-simple-select-label">Filtro</InputLabel>
                    <Select
                      labelId="lojaId"
                      id="demo-simple-select"
                      // value={age}
                      label="Age"
                      // onChange={handleChange}
                      className="example-full-width
                "
                    >
                      <MenuItem value="">Nome</MenuItem>
                      <MenuItem value="">ID</MenuItem>
                      <MenuItem value="">Telefone</MenuItem>
                      <MenuItem value="">Data</MenuItem>
                    </Select>
                  </FormControl>

                  <TextField className="col-md-2" id="outlined-basic" label="Pesquisar" variant="outlined" />

                  {/* <mat-form-field appearance="outline" className="example-full-width
                col-md-3 col-xs-2 col-sm-2">
                <mat-label>Pesquisar</mat-label>
                <input matInput [(ngModel)]="this.filter.search" placeholder='Pesquisar...'
                  (keyup)="getPageFilterData($event)">
                <mat-icon matSuffix>search</mat-icon>
              </mat-form-field> */}

                  {/* <div className="">
                <mat-radio-group aria-label="Select an option" >
                  <mat-radio-button value="ASC"> Crescente</mat-radio-button><br>
                  <mat-radio-button value="DESC"> Decrescente</mat-radio-button>
                </mat-radio-group>
              </div> */}

                  <div className="">
                    <div className="form-group">
                      <div className="example-button-row">
                        <button
                          type="button"
                          className="btn btn-info filter-color-button"
                          style={{ marginTop: '3px', padding: '4px 16px' }}
                        >
                          <i className="fa fa-search"></i>
                          Filtrar
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-lg-12 col-12">
        <div className="modall modal-info fadee" data-backdrop="static">
          <div className="modal-dialog" style={{ maxWidth: '100%' }}>
            <div className="modal-content" style={{ boxShadow: '0 0 0rem rgba(0,0,0,.5)' }}>
              <div className="modal-header">
                <h4 className="modal-title">TABELA DE UTILIZADORES</h4>

                <div className="card-tools">
                  <button className="btn btn-outline-primary btn-lg " type="button">
                    <i className="icon-refresh"></i>
                    Recarregar Dados
                  </button>
                  <button
                    className="btn btn-primary btn-lg "
                    type="button"
                    data-toggle="modal"
                    data-target="#modalRegistarUser"
                  >
                    <i className="icon-plus"></i> Registar User
                  </button>
                </div>
              </div>
              <div className="modal-body">
                <div className="table-responsivee">
                  <table className="table table-hover table-bordered table-striped text-center m-0 exportAsXLSXCliente">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Nome</th>
                        <th>Username</th>
                        <th>Telefone</th>
                        <th>Email</th>
                        <th>Perfil</th>
                        <th>Status</th>
                        <th>Loja</th>
                        <th>Direcção</th>
                        <th>Data Criação</th>
                        <th>Data Actualização</th>
                        <th>Operações</th>
                      </tr>
                    </thead>
                    <tbody>
                      {users.map((user, index) => (
                        <tr key={index}>
                          <td>{index + 1}</td>
                          <td>{user.name}</td>
                          <td>{user.username}</td>
                          <td>{user.telefone}</td>
                          <td>{user.email}</td>
                          <td>{user.perfil[0]?.name}</td>
                          <td>
                            {user.is_actived ? 
                            <span className="btn bg-success btn-block ">Activo</span>
                              :
                            <span className="btn bg-danger btn-block ">Inactivo</span>
                            }
                            </td>
                          <td>{user.loja?.nome || '-------'}</td>
                          <td>{user.direccao?.designacao}</td>
                          <td>{user.created_at}</td>
                          <td>{user.updated_at}</td>
                          <td>
                            <div className="btn-group">
                              <button
                                type="button"
                                className="btn btn-info
                          btn-sm"
                                data-toggle="dropdown"
                              >
                                Opções
                              </button>
                              <button
                                type="button"
                                className="btn btn-info
                          dropdown-toggle"
                                data-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <span className="caret"></span>
                              </button>
                              <div
                                className="dropdown-menu"
                                role="menu"
                                style={{ position: 'absolute', transform: 'translate3d(67px, 38px, 0px)' }}
                              >
                                <a className="dropdown-item" href="#">
                                  <i className="icon-user"></i> Ver Perfil
                                </a>
                                <a
                                  className="dropdown-item
                            btn-sm"
                                  title="Editar"
                                  data-widget="chat-pane-toggle"
                                  data-toggle="modal"
                                  data-target="#modalRegistarUser"
                                >
                                  <i className="fa fa-edit"></i>
                                  Editar
                                </a>
                                <a
                                  className="dropdown-item
                            btn-sm"
                                  title="Adicionar Roles"
                                  data-widget="chat-pane-toggle"
                                  data-toggle="modal"
                                  data-target="#modalAddRoles"
                                >
                                  <i className="fa fa-edit"></i>
                                  Adicionar Permissão Individual
                                </a>
                                <a className="dropdown-item">
                                  <i className="fa fa-lock"></i> Bloquear
                                </a>
                                <a className="dropdown-item">
                                  <i className="fa fa-unlock"></i>
                                  Desbloquear
                                </a>

                                <a
                                  className="dropdown-item"
                                  data-toggle="modal"
                                  data-target="#modalRegistarRedefinirPassword"
                                >
                                  <i className="fa fa-asterisk"></i> Redefinir Password
                                </a>

                                <a
                                  className="dropdown-item
                            btn-sm"
                                  title="Eliminar"
                                  data-toggle="modal"
                                  data-widget="chat-pane-toggle"
                                >
                                  <i className="fa fa-trash"></i>
                                  Eliminar
                                </a>
                              </div>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;
