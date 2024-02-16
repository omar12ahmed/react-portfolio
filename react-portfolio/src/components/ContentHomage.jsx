// import React from "react";
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';


// import React,{useState, useEffect} from "react";



function ContentHomepage() {
    const [typeEffect] = useTypewriter({
        words: ['Front End Development', "Mobile development"],
        loop: {},
        typeSpeed: 100,
        deleteSpeed: 40

    })
    return (

        <div style={{ marginTop: "10%" }}>

            <h1 style={{ marginBottom: "40px" }}>Exploring the World of Code and Creativity</h1>
            <h3 style={{ marginBottom: "40px" }}>

                <span style={{ fontWeight: "bold", color: 'red' }}> {typeEffect}/</span>
            </h3>
            <a href="https://docs.google.com/document/d/1CAIwv2HWn-TjV8L_-POYujVtfucZvmF45q05u4ghpck/edit" target="_blank" rel="noopener noreferrer">
                <button className='cvButton' type="button">Download CV</button>
            </a>
            <p style={{ fontSize: "25px", marginTop: "20px" }}> Follow me:
                <a href="https://github.com/omar12ahmed?tab=repositories" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon style={{ marginRight: "15px", marginLeft: "20px" }} icon={faGithub} fontSize="40px" />
                </a>
                <a href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faLinkedin} style={{ fontSize: "40px" }} />
                </a>
            </p>
        </div>

    )


}

export default ContentHomepage;