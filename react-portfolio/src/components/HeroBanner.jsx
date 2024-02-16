import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';


function HeroBanner() {

  return (



    <section className="hero-banner">
      <div className="animated-circle"></div>
      <div className="pic-mask">
        <img src="./images/omar.jpg" alt="A picture of me" className="me-pic" />

      </div>

      <div className="banner-content">
        <h1 className='titleName'>Omar Ibrahim</h1>
        <p>Software Developer</p>
        <hr />
        <p> <FontAwesomeIcon icon={faPhone} />   +447379119026 </p>
        <p> <FontAwesomeIcon icon={faEnvelope} /> omar12ahmed@hotmail.com</p>

      </div>
    </section>
  );
}


export default HeroBanner




// <div className="subtitle">
// <h2>Exploring the World of Code and Creativity</h2>
// </div>