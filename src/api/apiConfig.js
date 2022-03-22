const apiConfig = {
  baseUrl: 'https://api.themoviedb.org/3/',
  apiKey: 'daf7704ac6a2399a01340653b55ee1d1',
  originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
  w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
};

export default apiConfig;
