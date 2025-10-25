export default defineNuxtRouteMiddleware(() => {
  // const { isAuthenticated } = useAuthUser();
  const isAuthenticated = useAuthenticated();

  if (isAuthenticated.value) {
    if (process.server) return navigateTo('/');
    return abortNavigation();
  }
});
