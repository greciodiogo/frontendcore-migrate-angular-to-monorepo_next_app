import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

import { ToastContainer } from 'common/shared/components/Toast/ToastContainer';
import { useAuth } from 'context/AuthContext';
import { ControlledTextField } from 'hooks/useFormHandler';
import { validationSchema } from 'utils/validationSchema';

export const Login = () => {
  // const { showToast } = useToast(); // Use o hook aqui
  const { login } = useAuth();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema.login),
    mode: 'all', // Validação ocorre ao sair do campo
  });

  const onHandleSubmit = async (data: { username: string; password: string }) => {

    try {
      const isCredentializedUser = await toast.promise(
        login({
          username: data.username,
          password: data.password,
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

  const handleFormSubmit = async (data: { username: string; password: string }) => {
    try {
      await onHandleSubmit(data); // Chama a função assíncrona diretamente
    } catch (err) {
      console.error('Erro ao processar o formulário:', err);
    }
  };

  return (
    <div className="login-container">
      <div className="login-content">
        <form onSubmit={handleSubmit(handleFormSubmit)} className="login-form" style={{ position: 'relative' }}>
          <img
            className="at-logo pb-4"
            src="assets/img/at.png"
            alt="logo"
            style={{ width: '30%', borderRadius: '8px' }}
          />
          <br />
          <p className="text-muted"></p>

          <div className="row">
            <ControlledTextField name="username" label="Utilizador" control={control} errors={errors} />

            <ControlledTextField name="password" label="Password" type="password" control={control} errors={errors} />
          </div>
          <div className="row pt-5">
            <button className="btn btn-lg btn-block btn-login" style={{ height: '67px' }}>
              <h2>Entrar</h2>
            </button>
            <ToastContainer />
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
