const useAuth = () => {
  const getSession = async () => {
    const config = useRuntimeConfig();
    const token = getToken();
    return await fetch(`${config.public.REST_API}/api/sessions`, {
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
