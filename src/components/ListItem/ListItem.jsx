import PropTypes from 'prop-types';
import { stylesStatus } from '../../utils/stylesStatus';
import { Link } from 'react-router-dom';
import styles from './listItem.module.css';

export default function ListItem({id, name, image, species, status}) {

   const colorTypes = {
      alive: `${styles.green}`,
      dead:  `${styles.red}`,
      unknown: `${styles.orange}` 
   }

   return (
      <li className={styles.item} id={id}>
         <Link to={`detail/${id}`}>
            <img src={image} alt={name}/>
            <p>{name}</p>
            <p>{species}</p>
            <p className={stylesStatus(status, colorTypes)}>{status}</p>
         </Link>
      </li>
   )
}

ListItem.propTypes = {
   id: PropTypes.number.isRequired,
   name: PropTypes.string.isRequired,
   image: PropTypes.string.isRequired,
   species: PropTypes.string.isRequired,
   status: PropTypes.string.isRequired
}