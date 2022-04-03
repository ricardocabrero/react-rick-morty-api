import PropTypes from 'prop-types';
import styles from './button.module.css';
import { FcPrevious, FcNext } from "react-icons/fc";

export default function Button ({classStyle, action, disabled, text}) {

   return (
      <button 
      className={`${styles.button} 
      ${classStyle === 'prev' ? styles.left : styles.right}`}
      onClick={action}
      disabled={disabled}>
         {classStyle === 'prev' ? null : <span>{text}</span>}
         {classStyle === 'prev' ? <FcPrevious/> : <FcNext/>}
         {classStyle === 'prev' ? <span>{text}</span> : null}
      </button>
   )
}

Button.propTypes = {
   classStyle: PropTypes.string.isRequired,
   action: PropTypes.func.isRequired,
   disabled: PropTypes.string.isRequired,
   text: PropTypes.string.isRequired
}