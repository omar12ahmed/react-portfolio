import React, { useRef } from "react"
import emailjs from "@emailjs/browser"
import styled from "styled-components"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faAt } from '@fortawesome/free-solid-svg-icons';
import { motion } from "framer-motion"
import { useState, useEffect } from "react";



function Contact() {

    const [text, setText] = useState('');
  const fullText =  `If you'd like to connect with me on LinkedIn,
  feel free to search for my name and send a connection request. Explore my GitHub profile
  to discover some of my coding projects that you might find interesting. The repositories
  showcase my latest work and coding endeavours. Feel free to reach out if you have any
  questions or want to connect. I appreciate your interest.`

  useEffect(()=>{
    let index=0;
    const intervalId= setInterval(()=>{
        setText(fullText.slice(0, index + 1));
        index += 1;

        if(index >= fullText.length){
            clearInterval(intervalId)
        }

    }, 20)
    return () => clearInterval(intervalId);
  }, [])




    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_cmwnrac",
                "template_hqkybd4",
                form.current,
                "MMAR9NMSvKNys_gPS"
            )
            .then(
                (result) => {
                    window.alert("Form Submitted, Thank you 😁")
                },
                (error) => {
                    console.log(error.text);
                }
            );
    };



    return (
        <div >

            <h1 style={{ marginTop: "20px" }}>Contact Me</h1>

            <div style={{ display: "flex", justifyContent: "space-around" }} >


                <StyledContactForm className="contactForm">
                    <form ref={form} onSubmit={sendEmail}>
                        <label>Name</label>
                        <input type="text" name="user_name" />
                        <label> Email</label>
                        <input type="email" name="user_email" />
                        <label >Message</label>
                        <textarea name="message" placeholder="Feel free to drop me a message about anything - whether it's a project idea, collaboration, or just to say hello! " />
                        <input type="submit" value={"Send"} style={{ backgroundColor: "rgb(103 86 76" }} />
                    </form>

                </StyledContactForm>

                <p style={{ width: "50%", marginTop: "10%", opacity: text.length / fullText.length }}>{text}</p>

            </div>


            <motion.div
                style={{
                    display: "flex",
                    marginLeft: "50%",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >


                <a href="https://github.com/omar12ahmed?tab=repositories" target="_blank">
                    <motion.div style=
                        {{}}
                        initial={{ opacity: 0, x: -60 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        whileHover={{
                            translateY: -20,
                            filter: "invert(40%) sepia(100%) saturate(60%) hue-rotate(10deg)",


                        }}>

                        <FontAwesomeIcon
                            icon={faGithub}
                            style={{
                                color: "black",
                                marginRight: "10px",
                                width: "100%",
                                fontSize: "50px",
                                transition: "0.2s"
                            }} />
                    </motion.div>
                </a>
                <a href="mailto:omar12ahmed@hotmail.com" target="_blank">
                    <motion.div
                        initial={{ opacity: 0, x: -60 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        whileHover={{
                            translateY: -20,
                            filter: "invert(40%) sepia(100%) saturate(60%) hue-rotate(10deg)",
                            transition: "0.9"
                        }}>

                        <FontAwesomeIcon icon={faAt}
                            style={{
                                color: "black",
                                marginRight: "80px",
                                width: "100%",
                                fontSize: "50px"
                            }} />
                    </motion.div>
                </a>
                <a href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile" target="_blank">
                    <motion.div
                        initial={{ opacity: 0, x: -60 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        whileHover={{
                            translateY: -20,
                            filter: "invert(40%) sepia(100%) saturate(60%) hue-rotate(10deg)",
                            transition: "0.9"
                        }}>

                        <FontAwesomeIcon icon={faLinkedin} style={{ color: "black", marginRight: "40px", fontSize: "50px" }} />
                    </motion.div >
                </a>

                <a href="https://docs.google.com/document/d/1CAIwv2HWn-TjV8L_-POYujVtfucZvmF45q05u4ghpck/edit" target="_blank">

                    <motion.div
                        initial={{ opacity: 0, x: -60 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        style={{ width: "60px", overflow: "hidden", marginTop: "60px", }}
                        whileHover={{
                            translateY: -20,
                            filter: "invert(40%) sepia(100%) saturate(120%) hue-rotate(10deg)",
                            // color:"blue",
                            transition: "0.2"
                        }}>
                        <img style={{ maxWidth: "100%", borderRadius: "0px", marginBottom: "100px" }} src="./images/icons/cv.jpg" alt="" />
                    </motion.div>
                </a>
            </motion.div>

        </div>
    );
};


export default Contact

const StyledContactForm = styled.div`
  width: 400px;

  form {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
    font-size: 16px;

    input {
      width: 100%;
      height: 35px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);

      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }

    textarea {
      max-width: 100%;
      min-width: 100%;
      width: 100%;
      max-height: 100px;
      min-height: 100px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);

      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }

    label {
      margin-top: 1rem;
    }

    input[type="submit"] {
      margin-top: 2rem;
      cursor: pointer;
      background: rgb(249, 105, 14);
      color: white;
      border: none;
    }
  }
`;

// invert(45%) sepia(10%) saturate(100%) hue-rotate(100deg)
// grey