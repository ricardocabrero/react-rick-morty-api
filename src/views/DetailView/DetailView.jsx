import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import CardSkeleton from '../../components/Card/CardSkeleton';
import Card from "../../components/Card/Card";


export default function DetailView (props) {

   const { image, loading } = props;
   const [loadedImages, setLoaddedImages] = useState(false);

   useEffect(() => {
      setLoaddedImages(false);

      const imgCard = (image) => {
         const img = new Image();
         img.src = image;
         return img;
      }
         
      function fnRcs() {
         const imgC = imgCard(image);
         if(imgC.complete) {
            setLoaddedImages(true);
         } else {
            setTimeout(() => fnRcs(), 200);
         }
      }
      
      fnRcs();

   }, [image]);
   
   const cardComponent = (!loadedImages || loading) 
   ? <CardSkeleton/> : <Card {...props}/>;

   return (
      <>
         {cardComponent}       
      </>
   )
}

DetailView.propTypes = {
   image: PropTypes.string,
   loading: PropTypes.bool.isRequired
}
