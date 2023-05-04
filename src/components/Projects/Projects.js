import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import skinstoreImg from "../../Assets/Projects/skinstoreImg.png";
import hotstarImg from "../../Assets/Projects/hotstarImg.jpeg";
import suicide from "../../Assets/Projects/suicide.png";
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

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Plant AI"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink=""
              demoLink=""
            />
          </Col> */}

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink=""
              // demoLink="" <--------Please include a demo link here
            />
          </Col> */}

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink=""
              // demoLink=""      <--------Please include a demo link here 
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
