
import Image from 'react-bootstrap/Image';
import aboutImage from "./assets/imageJohn.jpg";
import helloWave from "./assets/hello.gif";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Homepage.css";
import Navbar from "./Navbar";

import { useTheme } from "./contexts/ThemeContext"; // Import custom hook for theme

function About() {
  const { theme } = useTheme(); // Get theme from context
 

  return (
    <>
      <Navbar />
      
     
      <Container className={`about-container pb-5 ${theme}`} fluid bg="dark" data-bs-theme="dark">
        <Container fluid className="my-9">
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

export default About;
