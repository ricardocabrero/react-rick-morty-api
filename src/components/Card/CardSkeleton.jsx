import PropTypes from 'prop-types';
import image from '../../images/skeleton-item-img.jpeg';
import styles from './card.module.css';

export default function CardSkeleton ({name}) {
   
   return (
      <div className={styles.container}>
         <div className={styles.media}>
            <img src={image} alt={name}/>
         </div>
         <div className={styles.text}>
            <p className={styles.skeleton}></p>
            <p className={styles.skeleton}></p>
            <p className={styles.skeleton}></p>
            <p className={styles.skeleton}></p>
            <p className={styles.skeleton}></p>
         </div>
      </div>
   ) 
}

CardSkeleton.propTypes = {
   name: PropTypes.string,
}