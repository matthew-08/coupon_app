const useAuth = () => {
  const getSession = async () => {
    const token = getToken();
    return await fetch('http://localhost:3000/api/sessions', {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
  };
  return {
    getSession,
  };
};

export { useAuth };
