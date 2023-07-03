import React from 'react';
import data from '../dataBDD/data';
import AlbumCard from '../Componants/AlbumCard/AlbumCard';
import styles from './albums.module.scss';

const albums = data.albums.items;

const Home = () => {
  return (
    <>
    <>
      <h1 className={styles.albumsTitle}>List of albums</h1>
    </>

    <div className={styles.albumCardContainer}>
      {albums.map(album => (
        <AlbumCard key={album.id} album={album} />
      ))}
    </div>
    </>
  );
};

export default Home;
