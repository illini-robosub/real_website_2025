import React from 'react'
import { Props } from './interface';

const Robot_Card: React.FC<Props> = ({Robot1, Robot2}) => {
    console.log(Robot1)
    console.log(Robot2)
    if (Robot2.Image !== '') {
        return (
            <div className='robotBigCard'>
                <div className='robotCard1'>
                    <div className='robot_image'>
                        <img src={Robot1.Image}/>
                    </div>
                    <div className='robot_control'>
                        <p>{Robot1.Name}</p>
                        <a target='_blank' href={Robot1.Link}>View Documentation</a>
                    </div>
                </div>
                <div className='robotCard2'>
                    <div className='robot_image'>
                        <img src={Robot2.Image}/>
                    </div>
                    <div className='robot_control'>
                        <p>{Robot2.Name}</p>
                        <a target='_blank' href={Robot2.Link}>View Documentation</a>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div className='robotBigCard'>
                <div className='robotCard1'>
                    <div className='robot_image'>
                        <img src={Robot1.Image}/>
                    </div>
                    <div className='robot_control'>
                        <p>{Robot1.Name}</p>
                        <a target='_blank' href={Robot1.Link}>View Documentation</a>
                    </div>
                </div>
                <div className='robotCard3'>
                    <div className='robot_image'></div>
                    <div className='robot_control'></div>
                </div>
            </div>
        )
    }
}

export default Robot_Card