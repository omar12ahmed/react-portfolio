import {easeInOut, motion, useAnimation, useIsPresent} from "framer-motion"
import React, { useEffect, useRef} from "react"
import { useInView } from "react-intersection-observer"




function About() {
    const images = [
      "/images/icons/html.jpg",
      "/images/icons/css.jpg",
      "/images/icons/js.jpg",
      "/images/icons/jquery.jpg",
      "/images/icons/vite-react.jpg",
      "/images/icons/router.jpg",
      "/images/icons/axios.jpg",
      "/images/icons/node.jpg",
      "/images/icons/postman.jpg",
      "/images/icons/bootstrap.jpg",
      "/images/icons/figma.jpg",

    ];

    const refs = [useRef(null),useRef(null),useRef(null)]
    const controlsArray= refs.map((ref) => useAnimation());
    const slideControlsArray = refs.map((ref)=> useAnimation())
    const [containerRef, containerInView]= useInView({once:true})

    


    useEffect(()=>{
      if(containerInView){
        controlsArray.forEach((control)=>{
          control.start("visible");
        });
        slideControlsArray.forEach((control)=>{
          control.start("visible")
        })
      }



    },[containerInView, controlsArray,slideControlsArray]);
  
    return (
      <div >
          <h1 className="title">
               About me
            </h1>
  
          <div ref={containerRef}>
          {refs.map((ref, index) => (
          <motion.p
            key={index}
            ref={ref}
            style={{ position: "relative", overflow: "hidden", width: "fitContent", 
            padding: "20px",
          }}
            variants={{
              hidden: { opacity: 0, y: 75 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={controlsArray[index]}
            transition={{ duration: 0.5, delay: index * 0.5 + 0.25 }}
          >
            {index === 0 && (
              <>
                My journey into the world of software development began with a degree in pharmacology. Yet, I quickly
                realized that my true passion lay in the realm of software development. This epiphany came thanks to my
                brother-in-law, a full-stack developer, who ignited my curiosity and set me on an exciting new path. I
                embarked on this new path through online research and self-guided learning, which proved to be a
                challenging endeavor without proper mentorship.
              </>
            )}
            {index === 1 && (
              <>
                A turning point in my journey came when I secured an internship in software development, a pivotal
                moment that would forever shape my career. Over the course of a 6-month program with two different
                companies, I had the privilege of immersing myself in the diverse facets of software development. Working
                alongside cross-functional teams, I gained invaluable insights and hands-on experience.
              </>
            )}
            {index === 2 && (
              <>
                After completing the internship, I pursued a 6-month bootcamp course in Front End development,
                successfully earning a certificate. This transformative journey has been characterized by perseverance,
                adaptability, and an unwavering drive to excel in the field of software development. I consistently aim
                to surpass expectations and demonstrate effectiveness, whether working independently or as a part of a
                team. I am excited to build on this foundation, continually expanding my horizons and contributing to
                the ever-evolving world of technology.
              </>
            )}
          </motion.p>
          
          
        ))}
      </div>
  <div>
    <h2 className="title">Technology and tools used</h2>
    <p> Blending the latest in technology with reliable open-source tools, i design and build applications and websites that prioritize user experince. From Smartphones and tablets to desktops, my focus is on delivering high perfomance solutions that resonates with users. </p>
  </div>


        <div className="img-container">
          {images.map((path, index) => (
            <div className="img-skill" key= {index}>

           <motion.img
              src={path}
              alt={`image ${index + 1}`}
              width={80}
              whileHover={{scale:1.5}}
              whileTap={{scale:0.95, rotate:"2.5deg"}}
              transition={{
                duration:0.725,
                ease:easeInOut
              }}
              />
              </div>
          ))}
        </div>
      </div>
    );
  }
  
  export default About;

