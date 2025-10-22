export default eventHandler(() => {
  // return 'Hello Nuxt 3';
  // return {
  //   message: 'Hello Nuxt 3',
  // };
  throw createError({
    statusCode: 404,
    statusMessage: '페이지를 찾을 수 없습니다.',
  });
});
