import React, { useEffect, useState } from 'react'
import { useAxios } from '../hook/useAxios'
import { API_KEY, IMG_URL } from '../hook/useEnv'
import CardList from '../components/Card'

export default function TopRated() {
  const [movieList,setMovieList] = useState([])

  useEffect(() => {
    useAxios().get(`movie/upcoming?language=en-US&page=1&api_key=${API_KEY}`).then(res => {
      setMovieList(res.data.results)
      console.log(movieList);
      
    })
  },[])
  return (
    <div className='flex flex-wrap justify-center gap-[30px] py-[30px]'>
      {movieList?movieList.map((item,index) => (
        <CardList key={index} title={item.title} text={item.overview} image={`${IMG_URL}${item.poster_path}`}/>
      )):""}
    </div>
  )
}
