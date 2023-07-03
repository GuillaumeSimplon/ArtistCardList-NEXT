import data from './dataBDD/data';
import styles from './page.module.scss';

const albums = data.albums.items;

export default function Home() {
  return (
    <>
      <>
        <h1 className={styles.mainTitle}>List of latest releases</h1>
      </>

      <div className={styles.imgArtist}>
        {albums.map(album => (
          <>
            {album.images.length >= 2 && (
              <div className={styles.imgArtistEffect}>
                <img src={album.images[1].url} alt="artist photo" />
                <p className={styles.artistName}>{album.name}</p>
              </div>
            )}
          </>
        ))}
      </div>
    </>
  );
}
