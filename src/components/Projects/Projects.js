import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards"; // assuming your ProjectCard component already exists
import Particle from "../Particle";
import hos from "../../Assets/Projects/hos.jpeg";
import geninsurance from "../../Assets/Projects/geninsurance.png";
import smarthr from "../../Assets/Projects/smarthr.png"; 

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
              imgPath={smarthr}
              isBlog={false}
              title="SmartHR"
              description="SmartHR is a modern, modular, and extensible HR Management System built with Spring Boot. It offers a comprehensive set of features to manage employees, attendance, leaves, payroll, shifts, performance, notifications, and more—designed to simulate real-world enterprise HR operations."
              link="https://github.com/firoze-hossain/SmartHR"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hos}
              isBlog={false}
              title="Hospital Management System"
              description="Hospital Management System provides a user-friendly interface, ensuring seamless access and convenience for policyholders across various devices, promoting widespread adoption of Enterprise Solution coverage. Enhances overall customer experience."
              link="https://www.uhlbd.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={geninsurance}
              isBlog={false}
              title="General Insurance"
              description="A comprehensive software solution for general insurance can efficiently manage motor, marine, and fire insurance policies. It offers a user-friendly interface for policyholders to purchase, renew, and make claims seamlessly. The system incorporates robust risk assessment algorithms."
              link="https://en.wikipedia.org/wiki/General_insurance"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
