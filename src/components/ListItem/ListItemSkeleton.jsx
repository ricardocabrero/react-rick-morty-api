import PropTypes from 'prop-types';
import image from '../../images/skeleton-item-img.jpeg';
import styles from './listItem.module.css';

export default function ListItemSkeleton({id, name}) {

   return (
      <li className={`${styles.item} ${styles.skeleton}`} id={id}>
            <img src={image} alt={name}/>
            <p className={styles.skeleton}></p>
            <p className={styles.skeleton}></p>
            <p className={styles.skeleton}></p>
      </li>
   )
}

ListItemSkeleton.propTypes = {
   id: PropTypes.number.isRequired,
   name: PropTypes.string.isRequired,
}
