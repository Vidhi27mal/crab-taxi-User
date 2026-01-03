let lastMethod = null;

export const setLastPaymentMethod = (method) => {
  lastMethod = method;
};

export const getLastPaymentMethod = () => {
  return lastMethod;
};