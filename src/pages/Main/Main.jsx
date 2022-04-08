import useFetch from '../../customHooks/useFetch';
import TplPrimary from '../../tpls/TplPrimary/TplPrimary';
import MainView from '../../views/MainView/MainView';

export default function Main() {

  const initialUrl = 'https://rickandmortyapi.com/api/character';
  const textHeader = 'Home';

  const {dataResults, onHandleChangeUrl} = useFetch(initialUrl, {});

  const {results, info} = dataResults.data;
  const {error, loading} = dataResults;
 
  return (
    <>
      <TplPrimary textHeader={textHeader}>
        <MainView 
          loading={loading}
          error={error} 
          info={info} 
          onHandleChangeUrl={onHandleChangeUrl} 
          results={results}/>
      </TplPrimary>
    </>
  );
}