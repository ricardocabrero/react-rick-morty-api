import PropTypes from 'prop-types';
import Header from '../../components/Header/Header';
import styles from './tplPrimary.module.css'

export default function TplPrimary({textHeader, children}) {
   return (
      <>
      <Header textHeader={textHeader}/>
      <main className={styles.main}>
        {children}
      </main>
      <footer>

      </footer>
    </>
   )
}

TplPrimary.propTypes = {
   textHeader: PropTypes.string,
   children: PropTypes.element.isRequired
}