const getToken = () => {
  return {
    headers: {
      Autorizacion: `Bearer ${locslStore.getItem('token')}`,
    }
  };
};
export default getToken;  