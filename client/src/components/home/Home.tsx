import Navbar from '../navbar/Navbar'
import Footer from "../footer/Footer.tsx";
import React from 'react'
import { Hero } from "./Hero.tsx";
import { Subteam } from "./Subteam.tsx";
import { Team_description } from "./team_description.tsx";
import './home.css'


const Home: React.FC = () => {
  return (
      <>
        <Navbar/>
        <div className='Home'>
          <Hero/>
          <Team_description/>
          <Subteam/>
        </div>
        <Footer/>
      </>
  )
}

export default Home

