import React, { useEffect, useState } from 'react'
import { useAxios } from '../hook/useAxios'
import { API_KEY, IMG_URL } from '../hook/useEnv'
import CardList from '../components/Card'
import { Toaster } from 'react-hot-toast'

export default function NowPlaying() {
  const [movieList,setMovieList] = useState([])

  useEffect(() => {
    useAxios().get(`movie/now_playing?language=en-US&page=1&api_key=${API_KEY}`).then(res => {
      setMovieList(res.data.results)      
    })
  },[])
  return (
    <>
    <Toaster position="top-center" reverseOrder={false}/>
    <div className='flex flex-wrap justify-center gap-[30px] py-[30px]'>
      {movieList?movieList.map((item,index) => (
        <CardList key={index} item={item}/>
      )):""}
    </div>
    </>
  )
}
