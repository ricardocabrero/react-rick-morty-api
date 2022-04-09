import PropTypes from 'prop-types';
import { useRef, useEffect, forwardRef } from 'react';
import styles from './header.module.css';

const Header = forwardRef(({titleHeader, textHeader}, ref) => {
   
   const headerElem = useRef(null);
   let checkScroll;

   function changeClass(element, initialScroll, currentScroll) {
      if(currentScroll > element.clientHeight) {
         element.classList.toggle(`${styles.anima}`, initialScroll < currentScroll);        
      } else {
         element.classList.toggle(`${styles.anima}`, false);
      }
   }
   
   useEffect(() => {
      let initialScroll = window.scrollY;
      let checkScroll = function() {
         let currentScroll = window.scrollY;
         headerElem.current && changeClass(headerElem.current, initialScroll, currentScroll);
         initialScroll = currentScroll;
      }
      window.addEventListener('scroll', checkScroll);
   }, []); 

   useEffect(() => {
      return () => window.removeEventListener('scroll', checkScroll);
   });

   return (
      <header ref={headerElem} className={styles.header}>
         <h1>{titleHeader}</h1>
         {textHeader && <p>{textHeader}</p>}
      </header>
   )
});

Header.propTypes = {
   titleHeader: PropTypes.string.isRequired,
   textHeader: PropTypes.string,
}

Header.defaultProps = {
   titleHeader: 'Rick and Morty Api',
}

export default Header;