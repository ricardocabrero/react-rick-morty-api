import PropTypes from 'prop-types';
import Button from '../Button/Button';
import styles from './pagination.module.css';

export default function Pagination({info, handleChangeUrl}) {

   return(
      <div className={styles.pagination}> 
         <Button 
         classStyle={'prev'}
         action={handleChangeUrl(info.prev)}
         disabled={!info.prev ? 'disabled': ''}
         text={'prev'}/>
         <Button 
         classStyle={'next'}
         action={handleChangeUrl(info.next)}
         disabled={!info.next ? 'disabled': ''}
         text={'next'}/>
      </div>
   )
}

Pagination.propTypes = {
   info: PropTypes.object.isRequired,
   handleChangeUrl: PropTypes.func.isRequired,
}