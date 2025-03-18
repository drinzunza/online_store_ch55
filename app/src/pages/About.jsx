import { useState } from 'react';
import "./About.css";


function About() {
    const [isVisible, setIsVisible] = useState(false);

    function showData() {
        console.log("button clicked");
        setIsVisible(true);
    }

    return (
        <div className="about">
            <h2>Sergio Inzunza</h2>
            { isVisible ? <h5>sinzunza@sdgku.edu</h5> : <label>Click the button to see my email</label> }

            <button className='btn btn-dark' onClick={showData}>See email</button>
        </div>
    );
}

export default About;