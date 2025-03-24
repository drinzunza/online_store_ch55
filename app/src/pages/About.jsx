import { useState } from 'react';
import "./About.css";

import anyNameHere from "../assets/homer.png";

function About() {
    const [isVisible, setIsVisible] = useState(false);

    function showData() {
        console.log("button clicked");
        setIsVisible(true);
    }

    return (
        <div className="about page">

            {/* image from public */}
            {/* <img src="/mexican.png" alt="about me"></img> */}

            {/* image in src/assets */}
            <img className='homer' src={anyNameHere} alt="" />


            <h2>Sergio Inzunza</h2>
            { isVisible ? <h5>sinzunza@sdgku.edu</h5> : <label className='d-block'>Click the button to see my email</label> }

            <button className='btn btn-dark' onClick={showData}>See email</button>
        </div>
    );
}

export default About;