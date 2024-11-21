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
import "bootstrap/dist/css/bootstrap.min.css";
import "./Homepage.css";
import Navbar from "./Navbar";
import { Container, Row, Col, Image } from "react-bootstrap";
import { useTheme } from "./contexts/ThemeContext"; // Import custom hook for theme

function Projects() {
  const { theme } = useTheme(); // Get theme from context

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
      <Container className={`project-container pb-5 ${theme}`} fluid bg="dark" data-bs-theme="dark">
        <Container fluid className="my-8">
          <div className="text-center"> 
            <h2 className={`caption-size ${theme}`}>Projects</h2></div>
            <Row className="pt-5 g-4">
  {imageLinks.map((item, index) => (
    <Col xs={12} md={6} lg={4} xl={3} key={index}>
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

      
    </>
  );
}

export default Projects;
