import styles from './card.module.css';

export default function Card ({image, name, species, status, gender, location}) {

   return (
      <div className={styles.container}>
         <div className={styles.media}>
            <img src={image} alt={name}/>
         </div>
         <div className={styles.text}>
            <p>Name: {name}</p>
            <p>Specie: {species}</p>
            <p>Gender: {gender}</p>
            <p>Status: {status}</p>
            <p>Location: {location}</p>
         </div>
      </div>
   )
}