import React from 'react';
import dataArtists from '../dataBDD/dataArtists';
import ArtistCard from '../Componants/ArtistCard/ArtistCard';
import styles from './artists.module.scss';

const artists = dataArtists.artists.items;

const Home = () => {
    return (
        <>
            <h1 className={styles.artistTitle}>List of Artists</h1>

            <div className={styles.artistImg}>
                <ArtistCard artists={dataArtists.artists} />
            </div>
        </>
    );
};

export default Home;
