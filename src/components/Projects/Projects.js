import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import chatify from "../../Assets/Projects/rozemart.png";
import bitsOfCode from "../../Assets/Projects/bookstore.png";


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
              imgPath={chatify}
              isBlog={false}
              title="LeetCode"
              description="Visit into my LeetCode Profile."
              link="https://leetcode.com/roze28/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="CodeForces"
              description="This is CodeForces Profile."
              link="https://codeforces.com/profile/firoze.hossain"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Rozemart(Running...)"
              description="This is an E-commerce project with a great enhanced features made for computers and electronics products. Users can easily find their desired products and can buy products. This Project is made by Java(Spring Boot) Technologies and MySQL RDMS Database."
              link="https://github.com/roze28/RozeMart"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Online Bookstore"
              description="This is an e-commerce platform which is developed for selling books to the consumer."
              link="https://github.com/roze28/Online_Bookstore-Java-Spring-Thymeleaf-MySQL"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
