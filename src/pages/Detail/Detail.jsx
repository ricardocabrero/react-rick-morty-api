import { useParams } from 'react-router-dom';
import useFetch from '../../customHooks/useFetch';
import TplPrimary from '../../tpls/TplPrimary/TplPrimary';
import DetailView from '../../views/DetailView/DetailView';

export default function Detail() {

   const textHeader = 'Detail';    

   const {id} = useParams();
   const detailUrl = `https://rickandmortyapi.com/api/character/${id}`;
   const {dataResults} = useFetch(detailUrl, {});

   const { loading } = dataResults;
   const { name, image, status, species, gender } = dataResults.data;
   const locationName = dataResults.data.location?.name;

   return (
      <>
         <TplPrimary textHeader={textHeader}>
            <DetailView 
            loading={loading}
            name={name} 
            image={image}
            status={status}
            species={species}
            gender={gender}
            location={locationName}/>
         </TplPrimary>
      </>
   )
}