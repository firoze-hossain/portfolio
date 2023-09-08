import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import ilife from "../../Assets/Projects/i-life.jpg";
import geninsurance from "../../Assets/Projects/geninsurance.png";


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
              imgPath={ilife}
              isBlog={false}
              title="i-life"
              description="i-Life is an internet based life insurance system. This is a responsive application. So, this system accessible through Smart Phone, Tablet, Laptop and desktop."
              link="https://leads.com.bd/insurance-solutions/internet-insurance-solution/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={geninsurance}
              isBlog={false}
              title="General Insurance"
              description="A comprehensive software solution for general insurance can efficiently manage motor, marine, and fire insurance policies. It offers a user-friendly interface for policyholders to purchase, renew, and make claims seamlessly. The system incorporates robust risk assessment algorithms, enabling accurate premium calculations based on factors like vehicle type, cargo value, and property specifications. Additionally, it streamlines claims processing, ensuring timely settlements for accidents, maritime incidents, or fire-related losses, enhancing overall customer satisfaction and operational efficiency."
              link="https://www.codechef.com/users/firoze_hossain"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
