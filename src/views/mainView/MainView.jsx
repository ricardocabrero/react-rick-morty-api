import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import List from '../../components/List/List';
import Pagination from '../../components/Pagination/Pagination';


export default function MainView({error, info, loading, onHandleChangeUrl, results}) {

   const [isMobile, setIsMobile] = useState(false);
   const errorComponent = error && <p>{error}</p>;
   const paginationComponent = info && <Pagination info={info} handleChangeUrl={onHandleChangeUrl}/>;
   const listComponent = results && <List listData={results} loading={loading}/>;
   const secondPaginationComponent = !isMobile && paginationComponent;

   useEffect(() => {
      (window.innerWidth <= 768)  && setIsMobile(true);
   }, []);

   return (
      <>
         {paginationComponent} 
         {errorComponent}
         {listComponent}
         {secondPaginationComponent}
      </>
   )
}

MainView.propTypes = {
   error: PropTypes.string,
   loading: PropTypes.bool,
   info: PropTypes.object,
   results: PropTypes.array,
}