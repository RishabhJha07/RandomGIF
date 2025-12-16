import React, {useState} from 'react'
import Spinnner from './Spinner'
import useGif from '../hooks/useGif';
const Tag=()=> {
  const [tag,setTag]=useState('');

  const{gif,loading,fetchData}=useGif(tag);

  function clickHandler() {
    fetchData();
  }

  function changeHandler(event) {
    setTag(event.target.value);
  }
  return (
    <div className='w-1/2 bg-blue-400 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px] '>
         <h1 className='mt-[15px] text-2xl underline uppercase font-bold'>RANDOM {tag} GIFS</h1>

         {
          loading ?(<Spinnner/>):(<img src={gif} width="450" alt='gif'></img>)
         }

         <input className='w-10/12 text-lg py-2 rounded-lg mb-[3px] text-center' onChange={changeHandler} value={tag}></input>

         <button onClick={clickHandler} className='w-10/12 bg-blue-100 text-lg py-2 rounded-lg mb-[20px] hover:bg-blue-200'>
         Generate
         </button>
    </div>
  )
}
export default Tag;