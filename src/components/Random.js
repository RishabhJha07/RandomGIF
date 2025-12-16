import React from 'react'
import Spinnner from './Spinner'
import useGif from '../hooks/useGif';

const Random=()=> {
  const {gif,loading,fetchData}=useGif();
  function clickHandler(){
    fetchData();
  }
  return (
    <div className='w-1/2 bg-green-500 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px] '>
         <h1 className='mt-[15px] text-2xl underline uppercase font-bold'>A RANDOM GIFS</h1>

         {
          loading ?(<Spinnner/>):(<img src={gif} width="450" alt='gif'></img>)
         }

         <button onClick={clickHandler} className='w-10/12 bg-green-100 text-lg py-2 rounded-lg mb-[20px] hover:bg-green-200'>
         Generate
         </button>
    </div>
  )
}
export default Random;