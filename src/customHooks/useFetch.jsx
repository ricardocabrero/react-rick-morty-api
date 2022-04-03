
  import { useState, useEffect, useRef } from 'react';
  
  export default function useFetch(urlFetch, dataType) {
  
  const isMountedFlag = useRef(true);

  const [dataResults, setDataResults] = useState({
     data: dataType,
     loading: true,
     error: null,
  });

  const [currentUrl, setCurrentUrl] = useState(urlFetch);

  useEffect(() => {
    isMountedFlag.current && setDataResults(prev => ({
       ...prev,
       loading: true,             
    }));
   
    const callApi = async() => {
      try {
         const res = await fetch(currentUrl);
         if(res.ok) {
            const dataRes = await res.json();
            isMountedFlag.current && setDataResults(prev => ({
               ...prev,
               data: dataRes,             
            }));
         } else {
            throw new Error(`Service not available, ERROR ${res.status}`);
         }
      } catch(e) {
         isMountedFlag.current && setDataResults(prev => ({
            ...prev,
            error: e.message,             
         }));
      } finally {
         isMountedFlag.current && setDataResults(prev => ({
            ...prev,
            loading: false,             
         }));
      }
    }
    callApi();
  }, [currentUrl]);

  useEffect(() => {
     return () => isMountedFlag.current = false;
  },[]);

  const onHandleChangeUrl = (param) => (e) => {
    setCurrentUrl(param);
  }

  return {
     dataResults,
     onHandleChangeUrl
  }
}