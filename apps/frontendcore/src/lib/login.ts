import { ApiService } from 'services/apiService';
import { SignInRequestDTO, SignInResponseDTO } from 'types/user';
import { GeTUserDTO, GetUsersParams } from 'types/user';

import { StorageService } from './storage';
export class AuthService {
  auth = new StorageService();
  BASE_URL = 'http://localhost:3381/api';

  async login(credentials: SignInRequestDTO): Promise<string> {
    const response = (await ApiService.post('/auth/login', credentials)) as { data: SignInResponseDTO };
    const token = response.data.data.token.token;
    return token;
  }

  getUsers = async ({ params }: { params: GetUsersParams }): Promise<Array<GeTUserDTO>> => {
    // Converte os parâmetros para string
    const stringObject = new URLSearchParams(params as Record<string, string>).toString();

    // Realiza a chamada à API com tipo explícito na resposta
    const response = await ApiService.get<{ data: Array<GeTUserDTO> }>(`/users?${stringObject}`);

    // Retorna os dados tipados
    return response.data.data;
  };
}
