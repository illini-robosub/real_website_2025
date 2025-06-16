import React from 'react'

export const Team_description: React.FC = () => {
    return (
        <div className='Team_description'>
            <div className='team_img_container'>
                <img src = '../../../ece.jpg' className="team_img"></img>
                <div className='team_text_container'>
                <h4>Our Mission</h4>
                <p>
                    We are a newly-formed team representing the University of Illinois at Urbana Champaign,
                    eagerly preparing to participate in Robosub 2025. It's worth noting that a previous
                    Robosub team had temporarily disbanded due to the impact of COVID-19 restrictions.
                    However, driven by our enthusiasm and determination, we have successfully revived and
                    assumed the mantle of the former Robosub team. With a professional approach and commitment
                    to excellence, we are poised to make a remarkable impact in the upcoming competition.
                </p>
                </div>
            </div>
        </div>
    )
}