import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getTrendingMovies } from '../api';
import { Nav } from '../Nav/Nav';
import styles from './Home.module.css';

export const Home = () => {
    const [trendingMovies, setTrendingMovies] = useState([]);
    useEffect(() => {
        const fetchTrendingMovies = async () => {
            const data = await getTrendingMovies();
            setTrendingMovies(data.results);
        };
        fetchTrendingMovies();
    }, []);

    return (
        <div className={styles.movieItem}>
            <Nav />
            <h1 className={styles.name}>Trending today</h1>
            <ul className={`${styles.moviesList} ${styles.moviesGrid}`}>
                {trendingMovies.map(movie => (
                    <li key={movie.id} className={styles.movieItem}>
                        <Link to={`/movies/${movie.id}`} className={styles.movieLink}>
                            <img  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} className={styles.movieImage} />
                            <span className={styles.movieTitle}>{movie.title}</span> <br />
                            <span className={styles.movieRating}>Rating: {movie.vote_average}</span>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};
