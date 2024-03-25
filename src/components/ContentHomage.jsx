// import React from "react";
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';



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
            <a href="https://drive.google.com/file/d/1d4HgiPXFgn2SnTSeZA5WDCnJQ2DizLeM/view?usp=sharing" target="_blank" rel="noopener noreferrer">
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