import React from 'react';
import styles from './artistCard.module.scss';

const ArtistCard = ({ artists }) => {
    return (
        <div className={styles.artistCard}>
            {artists.map((artist) => (
                <div key={artist.id} className={styles.artistContainer}>
                    <div className={styles.imgContainer}>
                        {artist.images && artist.images.length >= 1 && (
                            <img src={artist.images[1].url} alt="artist photo" />
                        )}
                    </div>
                    <div className={styles.detailsContainer}>
                        <p className={styles.artistName}>{artist.name}</p>
                        <p>Followers: {artist.followers.total}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ArtistCard;
