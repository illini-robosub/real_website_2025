import React, { useState } from "react";
import {
    image_style_mechanical,
    image_style_electrical,
    image_style_software,
    image_style_software_infrastructures,
} from "./Subteam_Image_style";

const subteams = [
    { name: "Mechanical", description: "The mechanical team designs and fabricates the structural and mechanical components of the AUV, ensuring its integrity, functionality, and performance in challenging underwater conditions.", tools: "CAD (Fusion 360), CFD, Waterjet, Laser Cutter, 3D Printer", imageStyle: image_style_mechanical },
    { name: "Autonomy", description: "The objective of our autonomy team is to design the autonomous code that runs onboard the submarine. The team uses ROS2 (Robot Operating System 2), which is an open source set of Python/C++ libraries specifically geared for robotics software development.", tools: "ROS, ORCA4, Gazebo, C++", imageStyle: image_style_software },
    { name: "Electrical", description: "The electrical team is responsible for taking all of the software commands and turning them into actions that the motors and other components of the submarine can execute. Our focus this season was primarily researching and looking at previous RoboSub teams’ electrical layouts, acquiring the electrical components that we plan on using, and designing a power distribution board for the submarine.", tools: "Fusion 360, Nvidia Xavier AGX, Stereo Labs Zed Camera", imageStyle: image_style_electrical },
    { name: "Software Infrastructure", description: "...", tools: "...", imageStyle: image_style_software_infrastructures },
];

export const Subteam: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState(2);
    const [isFading, setIsFading] = useState(false); // State for fade animation
    const active = subteams[activeIndex];


    // TODO:
    // Make animation not ugly
    const handleButtonClick = (index: number) => {
        if (index !== activeIndex) {
            setIsFading(true); // Start fade-out animation
            setTimeout(() => {
                setActiveIndex(index); // Update active index
                setIsFading(false); // Start fade-in animation
            }, 300); // Match the CSS transition duration, make sure timeout matches CSS fade-in
        }
    };

    return (
        <div className="Subteam" id="Subteam">
            <div className="Subteam_header">
                <h1>Meet the Subteams</h1>
            </div>

            <div className="Subteam_Content">
                <div className="subteamButtons">
                    {subteams.map((team, index) => (
                        <button
                            key={team.name}
                            className={`subteamButton ${activeIndex === index ? "active" : ""}`}
                            onClick={() => handleButtonClick(index)}
                            aria-pressed={activeIndex === index} // Accessibility
                        >
                            {team.name}
                        </button>
                    ))}
                </div>

                <div className={`imageAndText ${isFading ? "fading" : ""}`}>
                    <div className="subteam_image_container">
                        <div className="imageInner" style={active.imageStyle}></div>
                    </div>
                    <div className="subteam_text_container">
                        <p>{active.description}</p>
                        <br />
                        <p>
                            <strong>Tools: </strong> {active.tools}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};