import React from 'react'
import { useSelector } from 'react-redux'
import CardList from '../components/Card'

export default function LikePage() {
    const likedList = useSelector(state => state.card.likedList)
  return (
    <div className='flex flex-wrap justify-center gap-[30px] py-[30px]'>
      {likedList.length?likedList.map((item,index) => (
        <CardList key={index} item={item}/>
      )):
      <div className='mt-[250px]'><p className=' text-[35px] text-blue-400 font-thin'>no data</p></div>
      }
    </div>
  )
}
