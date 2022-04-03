import { useParams } from 'react-router-dom';
import useFetch from '../../customHooks/useFetch';
import Header from '../../components/Header/Header';
import Card from '../../components/Card/Card';

export default function Detail() {

   const textHeader = 'Detail';    

   const {id} = useParams();
   const detailUrl = `https://rickandmortyapi.com/api/character/${id}`;
   const {dataResults} = useFetch(detailUrl, {});

   const { name, image, status, species, gender } = dataResults.data;
   const locationName = dataResults.data.location?.name;

   return (
      <>
      <Header textHeader={textHeader}/>
      <p>Detail page {JSON.stringify(dataResults)}</p>
      <Card name={name} 
      image={image}
      status={status}
      species={species}
      gender={gender}
      location={locationName}/>
      </>
   )
}