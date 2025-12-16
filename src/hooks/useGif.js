import  { useEffect, useState,useCallback } from 'react'
import Axios from 'axios';

const API_KEY=process.env.REACT_APP_GIPHY_API_KEY

const useGif=(tag)=> {
  const [gif,setGif]=useState('');
  const [loading,setLoading]=useState(false);

   const fetchData = useCallback(async () => {
    setLoading(true);
    const tagMemeUrl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
    const randomMemeUrl =`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
    const { data } = await Axios.get(tag?(tagMemeUrl):(randomMemeUrl));
    const imageSource = data.data.images.downsized_large.url;
    setGif(imageSource);
    setLoading(false);
  }, [tag]); 

  useEffect(() => {
    fetchData();
  }, [fetchData]); 
  
  return{gif,loading,fetchData}
}

export default useGif;