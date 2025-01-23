// useToast.ts
import { toast, ToastOptions } from 'react-toastify';

// Definindo as opções do toast
type ToastMessages = {
  pending?: string;
  success?: string;
  error?: string;
};

// Hook customizado para exibir mensagens de Toast
export const useToast = () => {
  const showToast = async <T>(promise: Promise<T>, messages: ToastMessages, options: ToastOptions = {}) => {
    try {
      // Exibindo o toast com base no status da Promise
      await toast.promise(
        promise,
        {
          pending: messages.pending ?? 'Carregando...',
          success: messages.success ?? 'Operação realizada com sucesso!',
          error: messages.error ?? 'Ocorreu um erro!',
        },
        options,
      );
    } catch (error) {
      console.error('Erro no toast:', error);
      toast.error('Erro desconhecido!', { position: 'bottom-center', autoClose: 3000 });
    }
  };

  return { showToast };
};
