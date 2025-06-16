import React from 'react'
import { Link } from 'react-router-dom'
import './footer.css'
import { BsArrowUpRightCircle } from 'react-icons/bs'
import { GrInstagram, GrLinkedin, GrYoutube } from 'react-icons/gr'
import { FaTwitterSquare } from 'react-icons/fa'

const Footer: React.FC = () => {
    return (
        <div className='Footer'>
            <div className='Footer_Navtags'>
                <h2>Menu</h2>
                <div className='Footer_Navtags_Inner'>
                    <div className='Navtags_left'>
                        <Link to='/'><h1>Home</h1></Link>
                        <Link to='/robots'><h1>Robots</h1></Link>
                        <Link to='/sponsors'><h1>Sponsors</h1></Link>
                    </div>
                    <div className='Navtags_right'>
                        <Link to='/members'><h1>Members</h1></Link>
                        <Link to='/docs'><h1>Documentation</h1></Link>
                        <Link to='/contact'><h1>Contact<BsArrowUpRightCircle className='footer_small_arrow'/></h1></Link>
                    </div>
                </div>
            </div>
            <div className='socials'>
                <h2>Socials</h2>
                <div className='Footer_Socials_Inner'>
                    <a target="_blank" href='https://www.instagram.com/illini_robosub/'><GrInstagram/></a>
                    <a target="_blank" href='https://twitter.com/illini_robosub'><FaTwitterSquare/></a>
                    <a target="_blank" href='https://www.youtube.com/channel/UCH1yMqlcyWFXMLoPdFAdIrg'><GrYoutube/></a>
                    <a target="_blank" href="https://www.linkedin.com/company/illini-robosub"><GrLinkedin/></a>
                </div>
            </div>
        </div>
    )
}

export default Footer;