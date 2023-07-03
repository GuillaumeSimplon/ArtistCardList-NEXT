import React from 'react';
import styles from './albumCard.module.scss';

const AlbumCard = ({ album }) => {
    return (
        <div className={styles.albumCard}>

            <div className={styles.imgContainer}>
                {album.images.length >= 2 && (
                    <img src={album.images[1].url} alt="artist photo" />
                )} <div className={styles.btnPlay}>
                    <div className={styles.triangle}></div>
                </div>
            </div>


            <div className={styles.detailsContainer}>
                {album.artists.map(artist => (
                    <div className={styles.artistNameContainer}>
                        <p className={styles.artistName}>
                            {artist.name}
                        </p>
                    </div>
                ))}

                <p>- <span>{album.name}</span> -</p>
                <p>{album.release_date}</p>
            </div>
        </div>

    );
};

export default AlbumCard;
