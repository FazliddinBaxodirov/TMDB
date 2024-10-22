import React from 'react'
import { useSelector } from 'react-redux'
import CardList from '../components/Card'

export default function SavePage() {
    const savedList = useSelector(state => state.card.savedList)
  return (
    <div className='flex flex-wrap justify-center gap-[30px] py-[30px]'>
      {savedList.length?savedList.map((item,index) => (
        <CardList key={index} item={item}/>
      )):
      <div className='mt-[250px]'><p className=' text-[35px] text-blue-400 font-thin'>no data</p></div>
      }
    </div>
  )
}
