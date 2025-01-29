import { ApiService } from 'services/apiService';
import { GeTUserDTO, GetUsersParams } from 'types/user';

export const useAuth = () => {
  const getUsers = async ({ params }: { params: GetUsersParams }): Promise<Array<GeTUserDTO>> => {
    // Converte os parâmetros para string
    const stringObject = new URLSearchParams(params as Record<string, string>).toString();

    // Realiza a chamada à API com tipo explícito na resposta
    const response = await ApiService.get<{ data: Array<GeTUserDTO> }>(`/users?${stringObject}`);

    // Retorna os dados tipados
    return response.data.data;
  };

  return { getUsers };
};
