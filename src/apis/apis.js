export const popular = `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`;
export const top_rated = `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`;
export const upcoming = `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`;
export const movie_details = `https://api.themoviedb.org/3/movie/{{ id }}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`;
