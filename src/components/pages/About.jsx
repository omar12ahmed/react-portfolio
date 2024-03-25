import { easeInOut, motion, useAnimation, useIsPresent } from "framer-motion"
import React, { useEffect, useRef } from "react"
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

  const refs = [useRef(null), useRef(null), useRef(null)]
  const controlsArray = refs.map((ref) => useAnimation());
  const slideControlsArray = refs.map((ref) => useAnimation())
  const [containerRef, containerInView] = useInView({ once: true })




  useEffect(() => {
    if (containerInView) {
      controlsArray.forEach((control) => {
        control.start("visible");
      });
      slideControlsArray.forEach((control) => {
        control.start("visible")
      })
    }



  }, [containerInView, controlsArray, slideControlsArray]);

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
            style={{
              position: "relative", overflow: "hidden", width: "fitContent",
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
                I am a passionate software developer based in Bristol, United Kingdom. 
                My journey in software development began during my undergraduate studies 
                in pharmacology when I discovered my love for coding. 
                Inspired by my brother-in-law, a full-stack developer, I started self-teaching
                programming languages such as HTML, CSS, and JavaScript through online tutorials
                and exercises. This experience fuelled my desire to delve deeper into software 
                development, leading me to complete a 6-month internship where I honed my skills
                in web development using technologies like Bootstrap and jQuery.

              </>
            )}
            {index === 1 && (
              <>
                To further expand my knowledge and expertise, I joined a 6-month boot camp course
                where I delved into advanced topics such as React and React Hooks. This experience
                not only sharpened my technical abilities but also instilled in me a passion for 
                creating intuitive and user-friendly interfaces.
              </>
            )}
            {index === 2 && (
              <>
                Outside of software development, I enjoy staying active by going to the gym, playing
                basketball, and occasionally challenging friends to a game of pool. I am also excited
                about the prospect of pursuing an internship in Front End Development, where I can apply
                my skills, learn from industry experts, and contribute to meaningful projects.

                I am constantly seeking new challenges and opportunities for growth in the dynamic world of technology, and I look forward to making a positive impact through my work as a software developer.
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
          <div className="img-skill" key={index}>

            <motion.img
              src={path}
              alt={`image ${index + 1}`}
              width={80}
              whileHover={{ scale: 1.5 }}
              whileTap={{ scale: 0.95, rotate: "2.5deg" }}
              transition={{
                duration: 0.725,
                ease: easeInOut
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default About;

