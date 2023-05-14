export default defineNuxtRouteMiddleware(async (to, from) => {
  console.log(to.path);
  if (to.path === '/coupons' && process.client) {
    const { getSession } = useAuth();
    try {
      const res = await getSession();
      if (res.status === 200) {
        return;
      }
      navigateTo('/');
    } catch (error) {}
    return navigateTo('/');
  }
});
