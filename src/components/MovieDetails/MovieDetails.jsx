import React, { useEffect, useState } from 'react';
import { useParams, Link, Outlet } from 'react-router-dom';
import { getMovieDetails } from '../api';
import { Nav } from '../Nav/Nav';
import styles from './MovieDetails.module.css';

export const MovieDetails = () => {
    const { movieId } = useParams();
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        const fetchMovieDetails = async () => {
            const data = await getMovieDetails(movieId);
            setMovie(data);
        };

        fetchMovieDetails();
    }, [movieId]);

    if (!movie) return <div>Loading...</div>;

    function getGenres(genres) {
        let genre = ''

        genres.forEach((g) => {
            genre += g.name + ' ';
        })

        return genre;
    }

    return (
        <div>
            <Nav />
            <Link to="/">
                Go Back
            </Link>
            <div>
                <div >
                    <img  src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt="" />
                    <div className={styles['movie-details']}>
                        <div className={styles['max-width']}>
                            <h2>{movie.title}</h2>
                            <p>User Score: {movie.vote_average * 10}%</p>
                        </div>
                        <div className={styles['max-width']}>
                            <h3>Overview</h3>
                            <p>{movie.overview}</p>
                        </div>
                        <div className={styles['max-width']}>
                            <h3>Genres</h3>
                            <p>{getGenres(movie.genres)}</p>
                        </div>
                    </div>
                </div>
            </div>

            <nav>
                <ul>
                    <li>
                        <Link to={`cast`}>Cast</Link>
                    </li>
                    <li>
                        <Link to={`reviews`}>Reviews</Link>
                    </li>
                </ul>
            </nav>

            <Outlet />
        </div>
    )
}