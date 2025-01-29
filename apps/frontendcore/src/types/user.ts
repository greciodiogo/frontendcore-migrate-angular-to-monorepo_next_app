export type Perfil = {
  name: string;
};

export type Loja = {
  nom: string;
};

export type Direccao = {
  designacao: string;
};

export type SignInRequestDTO = {
  username: string;
  password: string;
};

export type GetUsersParams = Record<string, string | number | boolean>;

export type GeTUserDTO = {
  name: string;
  username: string;
  telefone: string;
  email: string;
  perfil?: Array<Perfil>; // Um array de objetos do tipo Perfil
  is_actived?: string; // Opcional
  loja?: Loja; // Opcional
  direccao?: Direccao; // Opcional
  created_at: string;
  updated_at: string;
};

export type Token = {
  token: string;
};

export type DataResponse = {
  token: Token;
};

export type ApiResponse = {
  data: DataResponse;
};

export type SignInResponseDTO = ApiResponse;
