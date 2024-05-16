import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Nav.module.css'

export const Nav = () => {
    return (
        <nav className={styles['nav-shadow']}>
            <ul className={styles['nav-display-flex']}>
                <li className={styles['nav-margin-right']}>
                    <Link className={styles['nav-a']} to="/">Home</Link>
                </li>
                <li>
                    <Link className={styles['nav-a']} to="/movies">Movies</Link>
                </li>
            </ul>
        </nav>
    )
}   