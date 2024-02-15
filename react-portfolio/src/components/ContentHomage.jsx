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

        <div style={{marginTop:"10%"}}>

            <h1 style={{ marginBottom: "40px" }}>Exploring the World of Code and Creativity</h1>
            <h3 style={{ marginBottom: "40px" }}>

                <span style={{ fontWeight: "bold", color: 'red' }}> {typeEffect}/</span>
            </h3>
            <a  href="https://docs.google.com/document/d/1CAIwv2HWn-TjV8L_-POYujVtfucZvmF45q05u4ghpck/edit" target="_blank" rel="noopener noreferrer">
                <button className='cvButton' style={{marginBottom:"20px", fontSize:"16px", border:"none", color:"", padding:"15px 32px", textAlign:"center"}} type="button">Download CV</button>
            </a>
            <p style={{ fontSize: "25px" }}> Follow me: {""}
                <a href="https://github.com/omar12ahmed?tab=repositories" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon style={{ marginRight: "10px" }} icon={faGithub} />
                </a>
                <a href="https://www.linkedin.com/in/omar-ibrahim-aaba3344/" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faLinkedin} />
                </a>
            </p>
        </div>

    )

   
}

export default ContentHomepage;