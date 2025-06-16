import React from 'react'
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';
import Robot_Card from './RobotCard';
import allRobots from './allRobots';
import { Robot } from './interface';
import './robots.css'


const Robots: React.FC = () => {
    let count = 0;
    const robot_list: Array<Robot> = [];

    return (
        <>
            <Navbar/>
            <div className='Robot_Outer_Container'>
                <div className='Robot_Inner_Container'>
                    {
                        allRobots.map((robot) => {
                            count++;
                            if (robot_list.length === 2) {
                                robot_list.pop();
                                robot_list.pop();
                            }
                            if (robot_list.length === 1) {
                                robot_list.push(robot)
                                const data = {
                                    Robot1 : robot_list[0],
                                    Robot2 : robot_list[1]
                                }
                                return (
                                    <Robot_Card {...data}/>
                                )
                            }
                            if (robot_list.length === 0) {
                                robot_list.push(robot)
                                if (count === allRobots.length) {
                                    const data = {
                                        Robot1 : robot_list[0],
                                        Robot2 : {Name: '', Link: '', Image: ''}
                                    }
                                    return (
                                        <Robot_Card {...data}/>
                                    )
                                }
                            }
                        })
                    }
                </div>
            </div>
            <Footer/>
        </>
    )
}
export default Robots;