const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: '8b0c5b05ab208e782a2082dd8108f64e',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;