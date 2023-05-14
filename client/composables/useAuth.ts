const useAuth = () => {
  const token = getToken();
  const getSession = async () => {
    const validSes = await fetch('http://localhost:3000/api/sessions', {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
  };
  return {
    token,
    getSession,
  };
};
