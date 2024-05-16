export const apiKey = '78c803ebc536fde3abac3b2349ae256d';
export const apiUrlBase = 'https://api.themoviedb.org/3';

export const getTrendingMovies = async () => {
    try {
        const response = await fetch(
            `https://api.themoviedb.org/3/trending/movie/day?api_key=${apiKey}`
        );

        if (!response.ok) {
            throw new Error('Failed to fetch trending movies');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching trending movies:', error.message);
        throw error;
    }
}

export const getMovieDetails = async (movieId) => {
    try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`);

        if (!response.ok) {
            throw new Error('Failed to fetch movie details');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching movie details:', error);
        throw error;
    }
}

export const searchMovies = async (query) => {
    try {
        const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`);
        if (!response.ok) {
            throw new Error('Failed to search movies');
        }
        const data = await response.json();
        return data.results;
    } catch (error) {
        console.error('Error searching movies:', error);
        throw error;
    }
}

export const getMovieCredits = async (movieId) => {
    try {
      const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${apiKey}`);
      if (!response.ok) {
        throw new Error('Failed to fetch movie credits');
      }
      const data = await response.json();
      return data.cast;
    } catch (error) {
      console.error('Error fetching movie credits:', error);
      throw error;
    }
};


export const getMovieReviews = async (movieId) => {
    try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${apiKey}`);
        if (!response.ok) {
        throw new Error('Failed to fetch movie reviews');
        }
        const data = await response.json();
        return data.results;
    } catch (error) {
        console.error('Error fetching movie reviews:', error);
        throw error;
    }
};