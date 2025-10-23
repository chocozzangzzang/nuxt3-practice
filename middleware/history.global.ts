export default defineNuxtRouteMiddleware((to) => {
  console.log('global middleware to? : ', to.path);
});
