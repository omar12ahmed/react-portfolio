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

        <div>

            <h1 style={{ marginBottom: "40px" }}>Exploring the World of Code and Creativity</h1>
            <h3 style={{ marginBottom: "40px" }}>

                <span style={{ fontWeight: "bold", color: 'red' }}> {typeEffect}/</span>
            </h3>
            <a  href="https://docs.google.com/document/d/1valIssK2CUnCCpa8_tqcynFP-_tdXxXtXWkVtvqIX6U/edit" target="_blank" rel="noopener noreferrer">
                <button style={{marginBottom:"20px", fontSize:""}} type="button">Download CV</button>
            </a>
            <p style={{ fontSize: "25px" }}> Follow me: {""}
                <a href="https://github.com/omar12ahmed?tab=repositories" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon style={{ marginRight: "10px" }} icon={faGithub} />
                </a>
                <a href="https://www.linkedin.com/in/yourlinkedinusername" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faLinkedin} />
                </a>
            </p>
        </div>

    )

   
}

export default ContentHomepage;