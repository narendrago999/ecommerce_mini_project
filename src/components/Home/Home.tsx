import React from 'react'
import SearchAppBar from '../../layout/HeaderBar/SearchAppBar/SearchAppBar'
import Details from './Details'
import Slider from './Slider'

const Home:React.FC = () => {
  return (
    <>
    <div className="home">
    <SearchAppBar />
    <div className="slider">
    <Slider />
    </div>
    <Details />
    </div>
    </>
  )
}

export default Home