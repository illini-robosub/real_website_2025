import React from 'react'
import Navbar from "../navbar/Navbar.tsx";
import Footer from "../footer/Footer.tsx";
import sponsorsList from "../sponsors/sponsors_list.ts";
import "./sponsors.css";


interface Props {
    SponsorImage: string,
    SponsorWebsite: string
}
const SponsorCards: React.FC<Props> = ({
   SponsorImage,
   SponsorWebsite
}) => {

    return (
        <>
            <div className='sponsor_cards'>
                <a target="_blank" href={SponsorWebsite}><img id='Sponsor_Image' src={SponsorImage}/></a>
            </div>
        </>
    )
}

const Sponsors: React.FC = () => {


    return (
      <>
        <Navbar/>
          <div className='Sponsors_page'>
              <h1 className='title'>Sponsors</h1>
              <h4 className='desc'>Illini RoboSub is apart of the <a href="https://irobotics.illinois.edu" target="_blank" style ={{ fontWeight:'bold'}}>IRobotics</a> organization which is proudly supported by the following:</h4>
                <div className='Only_Cards' >
                    {
                        sponsorsList.map((val) => {
                            console.log(val.Name)
                            if (val.Status === "Current") {
                                return (
                                    <SponsorCards SponsorImage={val.SponsorImage } SponsorWebsite={val.SponsorWebsite}/>
                                )
                            }
                        })
                    }
                </div>
          </div>
          <br/>
          <br/>
          <br/>
          <br/>
        <Footer/>
      </>
  )
}

export default Sponsors