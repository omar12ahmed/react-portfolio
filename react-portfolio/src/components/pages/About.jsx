import {easeInOut, motion} from "framer-motion"
import React, {useEffect} from "react"

function About() {
    const images = [
      "/images/icons/html.jpg",
      "/images/icons/css.jpg",
      "/images/icons/js.jpg",
      "/images/icons/jquery.jpg",
      "/images/icons/React-v-ts.jpg",
      "/images/icons/router.jpg",
      "/images/icons/axios.jpg",
      "/images/icons/node.jpg",
      "/images/icons/postman.jpg",
      "/images/icons/bootstrap.jpg",
      "/images/icons/figma.jpg",

    ];
  
    return (
      <div>
        <div>
          <h1>About me</h1>
  
          <div>
            <p>
              My journey into the world of software development began with a
              degree in pharmacology. Yet, I quickly realized that my true
              passion lay in the realm of software development. This epiphany
              came thanks to my brother-in-law, a full-stack developer, who
              ignited my curiosity and set me on an exciting new path. I embarked
              on this new path through online research and self-guided learning,
              which proved to be a challenging endeavor without proper
              mentorship.
            </p>
  
            <p>
              A turning point in my journey came when I secured an internship in
              software development, a pivotal moment that would forever shape my
              career. Over the course of a 6-month program with two different
              companies, I had the privilege of immersing myself in the diverse
              facets of software development. Working alongside cross-functional
              teams, I gained invaluable insights and hands-on experience.
            </p>
  
            <p>
              After completing the internship, I pursued a 6-month bootcamp course
              in Front End development, successfully earning a certificate. This
              transformative journey has been characterized by perseverance,
              adaptability, and an unwavering drive to excel in the field of
              software development. I am excited to build on this foundation,
              continually expanding my horizons and contributing to the
              ever-evolving world of technology.
            </p>
          </div>
        </div>
  <div>
    <h2>Technology and tools used</h2>
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
                ease:"easeInOut"
              }}
              />
              </div>
          ))}
        </div>
      </div>
    );
  }
  
  export default About;