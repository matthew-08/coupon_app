export default defineNuxtRouteMiddleware((to, from) => {
  console.log(to.path);
  const { getSession } = useAuth();
  if (to.path === '/coupons') {
    return navigateTo('/');
  }
});
