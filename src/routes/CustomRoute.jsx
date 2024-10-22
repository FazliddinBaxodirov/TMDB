import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { PATH } from '../hook/usePath'
import { LikePage, NowPlaying, Popular, SavePage, TopRated, UpComing } from '../pages'

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
            id:3,
            element:<TopRated/>,
            path:PATH.topRated
        },
        {
            id:4,
            element:<UpComing/>,
            path:PATH.upComing
        },
        {
            id:5,
            element:<LikePage/>,
            path:PATH.liked
        },
        {
            id:6,
            element:<SavePage/>,
            path:PATH.saved
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
