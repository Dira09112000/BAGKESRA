import React from 'react'
import Home from './Home'
import {Routes, Route} from "react-router-dom"
import PageNews from './PageNews'
import DetailNews from './DetailNews'
const RouterApp = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/News' element={<PageNews/>}/>
      <Route path='/DetailNews/:id' element={<DetailNews />} />
    </Routes>
    </>
  )
}

export default RouterApp