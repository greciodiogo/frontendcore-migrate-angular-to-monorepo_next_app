import { TextField } from '@mui/material';
import { Control, FieldErrors } from 'react-hook-form';
import { Controller } from 'react-hook-form';

type FormValues = {
  username: string;
  password: string;
};

type ControlledTextFieldProps = {
  name: keyof FormValues; // Garantir que o nome pertence aos campos do formulário
  label: string; // Rótulo do campo
  type?: string;
  control: Control<FormValues>; // Controle do react-hook-form
  errors: FieldErrors<FormValues>; // Tipagem correta para os erros
};

export const ControlledTextField = ({ name, label, type, control, errors, ...props }: ControlledTextFieldProps) => (
  <Controller
    name={name}
    control={control}
    defaultValue=""
    render={({ field }) => (
      <TextField
        {...field}
        label={label}
        error={!!errors[name]} // Verifica se há erro
        helperText={errors[name]?.message} // Exibe a mensagem de erro
        variant="outlined"
        className="example-full-width text-height col-md-12 col-xs-12 col-sm-12 pt-5"
        type={type}
        {...props}
      />
    )}
  />
);
