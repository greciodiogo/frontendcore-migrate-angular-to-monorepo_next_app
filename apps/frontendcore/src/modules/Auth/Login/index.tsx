import { TextField } from '@mui/material';
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';

import { AuthService } from 'lib/login';

export const Login = () => {
  const authService = new AuthService();
  const [formData, setFormData] = useState({ username: '', password: '' });
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const onHandleSubmit = async (event: React.FormEvent) => {
    try {
      const isCredentializedUser = await toast.promise(
        authService.login({
          username: formData.username,
          password: formData.password,
        }),
        {
          pending: 'Autenticando usuário...',
        },
        {
          position: 'bottom-center',
          hideProgressBar: false,
          autoClose: 3000,
        },
      );

      if (isCredentializedUser) {
        toast.success('Login realizado com sucesso! 🎉  ', {
          position: 'bottom-center',
          autoClose: 3000,
        });
      } else {
        toast.error('Credenciais inválidas!', {
          position: 'bottom-center',
          autoClose: 3000,
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="login-container">
      <div className="login-content">
        <form onSubmit={(event) => {
          event.preventDefault(); // Evita o comportamento padrão do formulário.
          void onHandleSubmit(event); // Encapsula a chamada da função async.
        }}
          className="login-form"
          style={{ position: 'relative' }}
        >
          <img
            className="at-logo pb-4"
            src="assets/img/at.png"
            alt="logo"
            style={{ width: '30%', borderRadius: '8px' }}
          />
          <br />
          <p className="text-muted"></p>

          <div className="row">
            <TextField
              label="Utilizador"
              placeholder="Username"
              name="username"
              variant="outlined"
              value={formData.username}
              onChange={handleChange}
              className="example-full-width text-height col-md-12 col-xs-12 col-sm-12"
            />
            <TextField
              label="Password"
              placeholder="Password"
              name="password"
              variant="outlined"
              type="password"
              value={formData.password}
              onChange={handleChange}
              className="example-full-width text-height col-md-12 col-xs-12 col-sm-12 pt-5"
            />
          </div>

          <div className="row pt-5">
            <button className="btn btn-lg btn-block btn-login" style={{ height: '67px' }}>
              <h2>Entrar</h2>
            </button>
            <ToastContainer
              position="bottom-center"
              hideProgressBar={false}
              newestOnTop
              closeOnClick
              rtl={false}
              pauseOnFocusLoss={false}
              draggable
              pauseOnHover
              theme="light"
            />
          </div>

          <div className="row help-password">
            <div className="col-sm-4">
              <label className="rememberme">
                <input type="checkbox" name="remember" value="1" /> Guardar
                <span></span>
              </label>
            </div>

            <div className="col-sm-8 text-right">
              <div className="forgot-password">
                <a
                  href="#"
                  data-toggle="modal"
                  data-target="#modalEnvioEmailRecuperarPassword"
                  className="forget-password"
                >
                  Esqueceu-se da palavra-passe?
                </a>
              </div>
            </div>
          </div>
        </form>

        <div className="copyright">
          <p>2019-2020 UNIG | Todos os Direitos Reservados</p>
        </div>
      </div>
      <div className="login-bg"></div>
    </div>
  );
};
