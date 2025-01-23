import * as yup from 'yup';

export const validationSchema = {
  login: yup.object().shape({
    username: yup.string().required('É obrigatório informar o nome de Utilizador'),
    password: yup.string().required('É obrigatório informar a senha').min(6, 'A senha deve ter no mínimo 6 caracteres'),
  }),
};
