import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { searchMovies } from '../api';
import { Nav } from '../Nav/Nav';
import styles from './Movies.module.css';

export const Movies = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const handleSearch = async (e) => {
        e.preventDefault();
        try {
            const data = await searchMovies(searchQuery);
            setSearchResults(data);
        } catch (error) {
            console.error('Error searching movies:', error);
        }
    };

    return (
        <div>
            <Nav />
            <form className={styles.form} onSubmit={handleSearch}>
                <input
                    className={styles.search}
                    type="text"
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                />
                <button className={styles.btn} type="submit">Search</button>
            </form>

            <ul className={`${styles.moviesList} ${styles.moviesGrid}`}>
                {searchResults.map(movie => (
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
