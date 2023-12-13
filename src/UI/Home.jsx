import React from 'react'
import { Routes } from 'react-router-dom'
import ViewEmployee from '../Operation/ViewEmployee'
import Footer from './Footer'



const Home = () => {
  return (
    <>
    <ViewEmployee/>
    <Footer/>
    </>
  )
}

export default Home