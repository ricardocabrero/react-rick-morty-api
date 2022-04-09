import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import ListItem from '../ListItem/ListItem';
import ListItemSkeleton from '../ListItem/ListItemSkeleton';
import styles from './list.module.css';

export default function List({listData, loading}) {

   const [loadedImages, setLoaddedImages] = useState(false);
   
   useEffect(() => {

      setLoaddedImages(false);

      const listImage = listData.map(({image}) => {
         const img = new Image();
         img.src = image;
         return img;           
      });
         
      function fnRcs() {
         if(listImage.every(item => item.complete)) {
            setLoaddedImages(true)
         } else {
            setTimeout(() => fnRcs(), 200);
         }
      }

       fnRcs();

   }, [listData]);

   return (
      <ul className={styles.list}>
         {listData && listData.map(({id, ...props}) => (
         (!loadedImages || loading)
         ? <ListItemSkeleton key={id} id={id}/> 
         : <ListItem key={id} id={id} {...props}/>)
         )}
      </ul>
   )
}

List.propTypes = {
   listData: PropTypes.array.isRequired,
   loading: PropTypes.bool.isRequired
}