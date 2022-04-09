import PropTypes from 'prop-types';
import { useEffect, useRef } from 'react';
import { stylesStatus } from '../../utils/stylesStatus';
import styles from './card.module.css';

export default function Card ({image, name, species, status, gender, location}) {

   const mediaImg = useRef(null);
   const textContainer = useRef(null);

   const colorTypes = {
      alive: `${styles.green}`,
      dead:  `${styles.red}`,
      unknown: `${styles.orange}` 
   }

   useEffect(() => {
         const text = textContainer.current;
         const img = mediaImg.current;
         const textH = text.clientHeight;
         const imgH = img.clientHeight

         if(textH > imgH) {
            text.style.height = `${imgH}px`;
            text.classList.add(`${styles.scrolly}`)
         }

         return () => { text.scroollTop = 0; }

   }, [image]);

   return (
      <div className={styles.container}>
         <div className={styles.media}>
            <img ref={mediaImg} src={image} alt={name}/>
         </div>
         <div ref={textContainer} className={styles.text}>
            <p><strong>Name:</strong> {name}</p>
            <p><strong>Specie:</strong> {species}</p>
            <p><strong>Gender:</strong> {gender}</p>
            <p><strong>Status:</strong> 
               <span className={stylesStatus(status, colorTypes)}> {status}</span>
            </p>
            <p><strong>Location:</strong> {location}</p>
         </div>
      </div>
   )
}

Card.propTypes = {
   image: PropTypes.string.isRequired,
   name: PropTypes.string.isRequired,
   species: PropTypes.string.isRequired,
   status: PropTypes.string.isRequired,
   gender: PropTypes.string.isRequired,
   location: PropTypes.string.isRequired
}