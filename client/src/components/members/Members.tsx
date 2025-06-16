import React from 'react'
import './members.css'
import Navbar from "../navbar/Navbar.tsx";
import Footer from "../footer/Footer.tsx";
import {currentMembers, formerMembers} from './memberData.ts';


// Card Component "gets rid of that any error
// The Parameters inside ({}) come from Props which is defined by the interface
interface Props {
    Name: string,
    Position: Array<string>,
    Description: string,
    Contact: {
        Email: string,
        Linkedin: string,
        LinkedinImage: string
    }
}
const MembersCards: React.FC<Props> = ({
   Name,
   Position,
   Description,
   Contact
}) => {

    // Individual member card
    // TODO:
    // - Sort cards by team lead, then by last name alphabetically
    // ? Pull linkedin profile pictures directly
    // - Add character limit
    return (
        <>
            <div className='members_cards'>
                
            <p dangerouslySetInnerHTML={{ __html: Description }}></p>
                <img id='Linkedin_Image' src={Contact.LinkedinImage}/>
                <div className='members_cards_container'>
                    <h2>{Name}</h2>
                    {
                        Position.map((val) => {
                            return (
                                <>
                                    <h3>{val}</h3>
                                </>
                            )
                        })
                    }
                    <a target="_blank" href={Contact.Linkedin}>Linkedin</a>
                </div>
            </div>
        </>
    )
}

// Overall Member Page
const Members: React.FC = () => {
  return (
      <>
          <Navbar/>
          <div className='Members_page'>
              <h1 className='title'>Current Members</h1>
              <div className='Only_Cards'>
              {
                  currentMembers.map((val) => {
                      console.log(val.Name)
                      if (val.Status === "Current") {
                          return (
                              <MembersCards Name={val.Name} Position={val.Position} Description={val.Description} Contact={val.Contact}/>
                          )
                      }
                  })
              }
              </div>
              <h1 className='title'>Previous Members</h1>
              <h2 className='subtitle'>Pre-2024</h2>
              <div className='Only_Cards'>
              {
                  formerMembers.map((val) => {
                      console.log(val.Name)
                      if (val.Status === "Previous") {
                          return (
                              <MembersCards Name={val.Name} Position={val.Position} Description={val.Description} Contact={val.Contact}/>
                          )
                      }
                  })
              }
              </div>
          </div>
          <Footer/>
      </>
  )
}
//<!-- <MembersCards {...val}/> -->

export default Members

