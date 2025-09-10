import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards"; // assuming your ProjectCard component already exists
import Particle from "../Particle";
import hos from "../../Assets/Projects/hos.jpeg";
import smarthr from "../../Assets/Projects/smarthr.png";
import thundercall from "../../Assets/Projects/Thundercall.png";

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
              imgPath={thundercall}
              isBlog={false}
              title="Thundercall"
              description="Thundercall is a powerful API testing tool that strikes with the speed and force of lightning, allowing you to effortlessly debug and call your web services."
              link="https://github.com/firoze-hossain/thundercall-frontend"
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
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
