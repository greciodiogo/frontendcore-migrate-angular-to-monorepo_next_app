import createCache from '@emotion/cache';

// Criação do cache no lado do cliente
export const createEmotionCache = () => {
  return createCache({ key: 'css', prepend: true });
};
