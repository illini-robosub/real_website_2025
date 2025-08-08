const f24 = "../../../doc_images/fall2024"
const s25 = "../../../doc_images/summer2025"

const docList = [
    {
        Name: "Milwaukee Tool",
        DocMedia: [s25 + "/s25_1.jpg", s25 + "/s25_2.jpg", s25 + "/s25_3.jpg"],
        DocText: "This summer we're ready to fulfill what's been three years in the making, finally entering the official RoboSub competition. Over the past year, our team has successfully demonstrated instances of controlled underwater movement and full autonomous navigation. As a result, we feel optimistic in our robot, 'Box,' to have a strong showing in its first competition. Our subteams have been working hard to prepare Box for its journey to Irvine California, where it will compete against dozens of other schools in its ability to navigate obstacles and complete tasks. A group of six students will also travel to Irvine to accompany Box and answer questions about the design process.",
        Date: "Summer 2025",
    },
    {
        Name: "Hakko",
        DocMedia: [f24 + "/f24_4.jpg", f24 + "/f24_5.jpeg", f24 + "/f24_6.png", f24 + "/f24_1.jpeg", f24 + "/f24_2.jpeg", f24 + "/f24_3.png"],
        
        DocText: "All three of our subteams have been working hard this past semester to get the sub ready to drop in the water and go. Our competition goal is to complete the semi-qualification task. This task includes moving along a straight line while passing under a gate, then turning around a pole and returning to the start. It’s a simple task for wheeled robots made much more difficult underwater. Our mechanical subteam has had the submarine structure for a while but has focused on electronics organization and waterproofing this semester. All the materials required to finish the sub and test our components have been acquired. We will be waterproof testing the whole enclosure that carries our sub’s electronics, camera, and computer at the beginning of next semester. We have strict standards to protect our equipment from water damage, so testing comprises two succinct phases: prolonged static subermision and dynamic submersion. Our electrical subteam has finalized the design for the power distribution board to power up to eight of our brushless thrusters. They have also worked on sending PWM signals to drive the motors, worked with our Pixhawk Orange Cube for simultaneous motor control, and verified the performance of all of our ESCs. Our autonomy subteam has an especially large workload to develop a fully autonomous robotic submarine capable of multiple different tasks. The biggest capability they have been developing is localization, estimating the location of the submarine, with our camera. They have been working with the opensource package OrbSLAM3: a package that uses infrared point cloud readings from the camera to simultaneously estimate the sub’s position and build a map of the pool. They are also building a simulated model of the sub and an underwater simulation environment, which are necessary to sufficiently test our systems.",
        Date: "Fall 2024",
    },
    {
        Name: "dedado",
        DocMedia: ["../../../doc_images/fall2023/robosubfall2023-2.png", "../../../doc_images/fall2023/robosubfall2023-3.png", "../../../doc_images/fall2023/robosubfall2023-1.png"],
        DocText: "In 2023 Illini RoboSub made some considerable progress towards our submarine design. Our mechanical team's primary focus involved using CAD to refine parts such as our camera enclosure, magnetic dropper, and various aspects of our hull design. Through the design process the mechanical team conducted basic water tests on key components. On the electrical side of things we continued to work on designing PCB boards for power distribution and integrating sensors with our Cube Orange controller. Additionally, a test bench with a Raspberry Pi was set up to conduct motor control tests. We received hydrophones from one of our sponsors Oceancom and have been looking into planning out which hardware components we need and how to connect them to the hydrophone in order to extract signals. On the autonomy side of things, we have been hard at work learning about the ZED2 camera interface and various object detection models. We have been able to get our Nvidia Jetson flashed properly and running, allowing us to test deploying code on the real hardware that will be controlling the submarine. Lastly, the autonomy team has been in contact with mentors from our other sponsor, Brunswick, and have received very helpful feedback on approaching object detection and localization challenges underwater.",
        Date: "Fall 2023",
    },
    {
        Name: "Pre-2022",
        DocMedia: ["../../../doc_images/hall.jpg"],
        DocText: "Sometime during the 2020 school year, Illini Robosub was forced to shut down to restrictions caused by the COVID-19 pandemic.",
        Date: "Pre-2022",
    }
    
]

export default docList;