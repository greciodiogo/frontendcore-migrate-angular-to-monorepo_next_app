import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TablePagination,
  TextField,
} from '@mui/material';
import React, { ChangeEvent, useEffect, useMemo, useState } from 'react';

// import { Pagination } from 'classes/Pagination';
import { FormService } from 'common/utils/FormService';
import { AuthService } from 'lib/login';
import { GetLojaDTO, GetRoleDTO, GetUserDTO, PaginationTypes } from 'types';

const Users = () => {
  const auth = useMemo(() => new AuthService(), []);
  const [error, setError] = useState<string | null>(null);
  const formService = useMemo(() => new FormService(), []);
  const [users, setUsers] = useState<Array<GetUserDTO>>([]);
  const [roles, setRoles] = useState<Array<GetRoleDTO>>([]);
  const [lojas, setLojas] = useState<Array<GetLojaDTO>>([]);
  const [pagination, setPagination] = useState({
    page: 1,
    perPage: 5,
    total: 0,
    lastPage: 0,
  });
  const [filters, setFilters] = useState({
    page: 1,
    perPage: '5',
    search: '',
    orderBy: '',
    loja_id: '',
    role_id: '',
    typeFilter: '',
    typeOrderBy: 'DESC',
  });
  const handleChange = (event: SelectChangeEvent) => {
    const { name, value } = event.target;
    setFilters((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setFilters((prevData) => ({ ...prevData, page: newPage + 1 }));
  };

  const handleChangeRowsPerPage = (event: ChangeEvent<HTMLInputElement>) => {
    setFilters((prevData) => ({ ...prevData, perPage: event.target.value, page: 1 }));
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | SelectChangeEvent) => {
    setFilters({
      ...filters,
      search: event.target.value,
    });
  };

  useEffect(() => {
    const fetchUsers = async () => {
      const params = new URLSearchParams({
        page: String(filters.page), // Conversão para string
        perPage: String(filters.perPage),
        search: filters.search,
        orderBy: filters.orderBy,
        lojaId: String(filters.loja_id),
        roleId: String(filters.role_id),
        typeOrderBy: filters.typeOrderBy,
        typeFilter: filters.typeFilter,
      });

      try {
        const rolesResponse = await formService.getRoles(params);
        const roles = (rolesResponse as { data: Array<GetRoleDTO> }).data;
        setRoles(roles);

        const lojasResponse = await formService.getLojas(params);
        const lojas = (lojasResponse as { data: Array<GetLojaDTO> }).data;
        setLojas(lojas);

        const response = await auth.getUsers(params);
        const users = (response as { data: { data: Array<GetUserDTO> } }).data.data;
        const pagination = (response as { data: PaginationTypes }).data;
        setPagination({
          page: pagination.page,
          perPage: pagination.perPage,
          total: pagination.total,
          lastPage: pagination.lastPage,
        });
        setUsers(users);
      } catch (err) {
        setError((err as Error).message);
      }
    };

    void fetchUsers();
  }, [
    auth,
    formService,
    filters.page,
    filters.perPage,
    filters.search,
    filters.orderBy,
    filters.loja_id,
    filters.role_id,
    filters.typeOrderBy,
    filters.typeFilter,
  ]);

  return (
    <div className="row">
      <div className="col-md-12 col-12">
        <div className="modall modal-info fadee" data-backdrop="static">
          <div className="modal-dialog" style={{ maxWidth: '100%', marginTop: 0 }}>
            <div className="modal-content" style={{ boxShadow: '0 0 0rem rgba(0,0,0,.5)' }}>
              {/* <!-- Modal Header --> */}
              <div className="modal-header">
                <h4 className="modal-title"> Filtro de Dados</h4>
                <span className="d-none">{error}</span>
              </div>
              {/* <!-- Modal body --> */}
              <div className="modal-body">
                <div className="row">
                  <FormControl className="col-md-1">
                    <InputLabel id="demo-simple-select-label">Perfil</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      name="role_id"
                      value={filters.role_id}
                      label="Perfil"
                      onChange={handleChange}
                      className="example-full-width
                      "
                    >
                      <MenuItem value="">Perfil</MenuItem>
                      {roles.map((role, index) => (
                        <MenuItem value={role.id} key={index}>
                          {role.name}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>

                  <FormControl className="col-md-1">
                    <InputLabel id="demo-simple-select-label">Loja</InputLabel>
                    <Select
                      labelId="lojaId"
                      id="lojaId"
                      name="loja_id"
                      value={filters.loja_id}
                      label="Age"
                      onChange={handleChange}
                      className="example-full-width
                "
                    >
                      <MenuItem value="">Loja</MenuItem>
                      {lojas.map((loja, index) => (
                        <MenuItem value={loja.id} key={index}>
                          {loja.nome}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>

                  <FormControl className="col-md-1">
                    <InputLabel id="demo-simple-select-label">Filtro</InputLabel>
                    <Select
                      labelId="lojaId"
                      id="demo-simple-select"
                      name="typeFilter"
                      value={filters.typeFilter}
                      label="Filtro"
                      onChange={handleChange}
                      className="example-full-width
                "
                    >
                      <MenuItem value="">Nome</MenuItem>
                      <MenuItem value="">ID</MenuItem>
                      <MenuItem value="">Telefone</MenuItem>
                      <MenuItem value="">Data</MenuItem>
                    </Select>
                  </FormControl>

                  <TextField
                    className="col-md-2"
                    id="outlined-basic"
                    name="search"
                    value={filters.search}
                    onChange={handleInputChange}
                    label="Pesquisar"
                    variant="outlined"
                  />
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
                          <td>{user.perfil?.[0]?.name ?? 'Sem perfil'}</td>
                          <td>
                            {user.is_actived ? (
                              <span className="btn bg-success btn-block ">Activo</span>
                            ) : (
                              <span className="btn bg-danger btn-block ">Inactivo</span>
                            )}
                          </td>
                          <td>{user.loja?.nome ?? '-------'}</td>
                          <td>{user.direccao?.designacao ?? '-------'}</td>
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

      <div className="col-lg-12 col-12">
        <TablePagination
          component="div"
          count={pagination.total}
          page={pagination.page - 1}
          onPageChange={handleChangePage}
          rowsPerPage={Number(filters.perPage)}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </div>
    </div>
  );
};

export default Users;
