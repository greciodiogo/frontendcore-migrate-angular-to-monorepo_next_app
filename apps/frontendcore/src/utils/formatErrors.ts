export const formatErrors = (error: any): void => {
  // Pode personalizar o tratamento de erros aqui
  console.error('API Error:', error.response ? error.response.data : error.message);
};
