import React from 'react'
import SearchAppBar from '../../layout/HeaderBar/SearchAppBar/SearchAppBar'
import Details from './Details'

const Home:React.FC = () => {
  return (
    <>
    <SearchAppBar />
    <Details />
    </>
  )
}

export default Home