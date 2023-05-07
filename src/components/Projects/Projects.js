import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import skinstoreImg from "../../Assets/Projects/skinstoreImg.png";
import hotstarImg from "../../Assets/Projects/hotstarImg.jpeg";

import ebayImg from "../../Assets/Projects/ebayImg.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hotstarImg}
              isBlog={false}
              title=" Disney+ Hotstar"
              description="A React Redux Firebase-based web application that replicates the popular streaming platform Hotstar, allowing users to browse and stream their favorite movies, TV shows, and sports events.."
              ghLink="https://github.com/Imrajsrivastava/Hot-Star-Clone"
              demoLink="https://my-hotstar-project.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ebayImg}
              isBlog={false}
              title="eBay-Ecommerce"
              description="The project includes features such as user registration, product listing, search and filtering, shopping cart, checkout, payment processing, and order tracking.It is built using modern web technologies such as HTML, CSS, JavaScript,JSON-Server API."
              ghLink="https://github.com/Imrajsrivastava/ebay-project-2"
              demoLink="https://dreamy-marigold-b2eb4d.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={skinstoreImg}
              isBlog={false}
              title=""
              description="The store offers a wide range of skincare products such as cleansers, serums, masks, and more, to cater to different skin types and concerns.It is a web-based application that aims to replicate the functionalities and user experience of the Skine Store online marketplace."
              ghLink="https://github.com/shree1109/SkinStore.com-Unit4"
              demoLink="https://masaiskinstorecom.netlify.app/"              
            />
          </Col>

        
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
