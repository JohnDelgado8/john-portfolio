import React, { useEffect, useState } from "react";
import banner from "./assets/JohnNew1.png";
import aboutImage from "./assets/imageJohn.jpg";
import helloWave from "./assets/hello.gif";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Homepage.css";
import Navbar from "./Navbar";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { useTheme } from "./contexts/ThemeContext"; // Import custom hook for theme
import HTX from "./assets/HTX.png";
import Adventure from "./assets/Adventureprimal.png";
import ClearFishing from "./assets/Clearfishing.png";
import Clinilink from "./assets/Clinilink.png";
import Dolizemy from "./assets/Dolizemy.png";
import Restaurant from "./assets/Restaurant.png";
import Antunes from "./assets/Antunes.png";
import GiftSpark from "./assets/GiftSpark.png";
import Netflix from "./assets/Netflix.png";
import Edgar from "./assets/Edgar.png";
import Gym from "./assets/Gym.png";

function Homepage() {
  const { theme } = useTheme(); // Get theme from context
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true);
  }, []);

  const imageLinks = [
    { src: Clinilink, link: "https://clinilinkhealth.com/",  label: "WordPress | Elementor | JavaScript ", labeldescription:"CLINILINK" },
    { src: HTX, link: "https://htxcustoms.com/",  label: "WordPress | Elementor | JavaScript ", labeldescription:"HTX CUSTOMS" },
    { src: Adventure, link: "https://adventureprimal.com.au/",  label: "WordPress | Elementor | WooCommerce ", labeldescription:"ADVENTURE PRIMAL" },
    { src: Dolizemy, link: "https://dolizemy.com/",  label: "WordPress | Elementor | WooCommerce", labeldescription:"DOLIZEMY" },
    { src: ClearFishing, link: "https://www.clearfinishpainting.com.au/",   label: "WordPress | Elementor", labeldescription:"CLEARFISHING" },
    { src: Antunes, link: "https://antunes.com/",  label: "WordPress | Elementor | WooCommerce", labeldescription:"ANTUNES" },
    { src: Restaurant, link: "https://johndelgado8.github.io/resturant-website/",  label: "HTML/CSS | Bootstrap | JavaScript", labeldescription:"RESTAURANT WEBSITE" },
    { src: Gym, link: "https://johndelgado8.github.io/colossal-fitness/",  label: "HTML/CSS | Bootstrap | JavaScript | PHP", labeldescription:"GYM MANAGEMENT SYSTEM" },
    { src: Netflix, link: "https://johndelgado8.github.io/netflix-project/",  label: "HTML/CSS | Bootstrap | JavaScript | PHP", labeldescription:"NETFLIX CLONE" },
    { src: GiftSpark, link: "https://giftspark.co/",   label: "Shopify | JavaScript", labeldescription:"GIFTSPARK" },
    { src: Edgar, link: "https://944264-a1.myshopify.com/",   label: "Shopify | JavaScript", labeldescription:"EDGARTOWN" },

  ];
  



  return (
    <>
      <Navbar />
      
      <Container className={`landingpage ${theme}`} fluid bg="dark" data-bs-theme="dark">
        <Container fluid className="second-container">
          <Row className="first-row">
            <Col className="second-column d-none d-md-block" xs={6} md={7} lg={6} xl={6}>
              <img
                src={banner}
                className={`banner-image ${fadeIn ? "fade-in" : ""}`}
                alt="banner"
              />
            </Col>
            <Col className="first-column" xs={12} md={5} lg={6} xl={6}>
              <p className={`animated-greet ${theme}`}></p>
              <h1 className={`first-caption ${theme}`}>I'm John Delgado</h1>
              <h3 className={`second-caption ${theme}`}>Web Developer</h3>
              <div className={`social-icons ${theme}`}>
                <a href="https://www.facebook.com/john.delgado.3150" target="" className="social-icon">
                  <FaFacebook size={24} className="facebook-icon" />
                </a>
                <a href="https://www.linkedin.com/in/john-rodolfo-delgado-a47103254/             " target="" className="social-icon">
                  <FaLinkedin size={24} />
                </a>
              </div>
              <div className="hire-button">
                <Button className="button-hire">HIRE</Button>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>

      <Container className={`about-container pb-5 ${theme}`} fluid bg="dark" data-bs-theme="dark">
        <Container fluid className="my-6">
          <div className="text-center"> 
            <h2 className={`caption-size ${theme}`}>About Me</h2></div>
        <Row className="pt-5">
        <Col className="align-self-center" xs={12} md={6} lg={6} xl={6}>
       
        <h2 className={`first-caption ${theme}`}>Hey. What's Up? Hello!  <Image className="hello-image" roundedCircle src={helloWave}></Image></h2>
        

       <p className={`about-text ${theme}`}>I'm John Rodolfo Delgado, a Web, WordPress, and Shopify developer with specialization in
         creating custom, user-friendly e-commerce websites, integrating complex features, optimizing performance, and delivering seamless digital experiences. </p>
       <p className={`about-text2 ${theme}`}>Coding is what I live for.</p>
       <p className={`about-text ${theme}`}>Outside of work, I'm a drummer who loves playing and listening to music, as it fuels my creativity and keeps me inspired. I also enjoy playing online games, which help me unwind and release stress after a busy day. Additionally, I love to travel during holidays, exploring new places and cultures, which broadens my perspective and adds to my personal growth. These hobbies keep me balanced and motivated, both personally and professionally.</p>

       <p className={`about-text ${theme}`}>With 3 years of experience in the tech industry, I have developed strong expertise as a <span className="highlight-text">Web, WordPress, and Shopify developer</span>.  I am eager to take on new challenges and expand my knowledge to deliver high-quality results for clients.</p>
       <a href="http://localhost:3000/about" className="resume-button">
        RESUME
      </a>
       
       </Col> 
        <Col className="image-circle align-self-center" xs={12} md={6} lg={6} xl={6}>
        <Image className="circle-image"  roundedCircle src={aboutImage}  />
        </Col>

        
            </Row>
        </Container>
      </Container>


      <Container className={`project-container pb-5 ${theme}`} fluid bg="dark" data-bs-theme="dark">
      <Container fluid className="my-10">
          <div className="text-center"> 
            <h2 className={`caption-size ${theme}`}>Projects</h2></div>
            <Row className="pt-5 g-4">
  {imageLinks.map((item, index) => (
    <Col xs={6} md={6} lg={4} xl={3} key={index}>
      <div className="image-container">
        <a href={item.link} target="_blank" rel="noopener noreferrer">
          <div className="overlay"></div> {/* Dark overlay */}
          <Image src={item.src} />
          <div className="image-hover-label">{item.labeldescription}</div> 
        </a>
      </div>
      <p className="image-label">{item.label}</p>
    </Col>
  ))}
</Row>
        </Container>
      </Container>


      <Container className={`about-container pb-5 ${theme}`} fluid bg="dark" data-bs-theme="dark">
        <Container fluid className="my-6">
          <div className="text-center"> 
            <h2 className={`caption-size ${theme}`}>About Me</h2></div>
        <Row className="pt-5">
        <Col className="align-self-center" xs={12} md={6} lg={6} xl={6}>
       
        <h2 className={`first-caption ${theme}`}>Hey. What's Up? Hello!  <Image className="hello-image" roundedCircle src={helloWave}></Image></h2>
        

       <p className={`about-text ${theme}`}>I'm John Rodolfo Delgado, a Web, WordPress, and Shopify developer with specialization in
         creating custom, user-friendly e-commerce websites, integrating complex features, optimizing performance, and delivering seamless digital experiences. </p>
       <p className={`about-text2 ${theme}`}>Coding is what I live for.</p>
       <p className={`about-text ${theme}`}>Outside of work, I'm a drummer who loves playing and listening to music, as it fuels my creativity and keeps me inspired. I also enjoy playing online games, which help me unwind and release stress after a busy day. Additionally, I love to travel during holidays, exploring new places and cultures, which broadens my perspective and adds to my personal growth. These hobbies keep me balanced and motivated, both personally and professionally.</p>

       <p className={`about-text ${theme}`}>With 3 years of experience in the tech industry, I have developed strong expertise as a <span className="highlight-text">Web, WordPress, and Shopify developer</span>.  I am eager to take on new challenges and expand my knowledge to deliver high-quality results for clients.</p>
       <a href="http://localhost:3000/about" className="resume-button">
        RESUME
      </a>
       
       </Col> 
        <Col className="image-circle align-self-center" xs={12} md={6} lg={6} xl={6}>
        <Image className="circle-image"  roundedCircle src={aboutImage}  />
        </Col>

        
            </Row>
        </Container>
      </Container>

    </>
  );
}

export default Homepage;
