import React from "react";
import Navbar from "../components/Navbar";

function About () {
    return (
        <main className="About">
            <hr />
                <h1>
                    Project Management Website for DEV Teams
                </h1>
                <Navbar />
            <hr />
         <h1>Mission</h1>
         <p> 
            Our project management website is designed to make life easier for web development teams by providing a simple and effective way to track and manage tasks, projects, and collaboration. It offers real-time updates, task assignments, and status tracking, ensuring everyone is on the same page and working efficiently towards shared goals.
        </p>
        <p>
            The user-friendly interface allows for easy navigation and quick access to project details, making communication and coordination seamless. With customization options, our platform fits the unique needs of any web development team, helping ensure projects are successful and delivered on time.
        </p>
         </main>
    )
}

export default About;