import { patch } from '@mui/material'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { PATH } from '../hook/usePath'
import { NowPlaying, Popular, TopRated, UpComing } from '../pages'

export default function CustomRoute() {

    const RoutesList = [
        {
            id:1,
            element:<NowPlaying/>,
            path:PATH.nowPlaying
        },
        {
            id:2,
            element:<Popular/>,
            path:PATH.popular
        },
        {
            id:1,
            element:<TopRated/>,
            path:PATH.topRated
        },
        {
            id:1,
            element:<UpComing/>,
            path:PATH.upComing
        },
    ]
  return (
    <Routes>
        {RoutesList.map(item => (
            <Route path={item.path} element={item.element} key={item.id}/>
        ))}
    </Routes>
  )
}
