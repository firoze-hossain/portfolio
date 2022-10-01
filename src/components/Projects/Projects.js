import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import rozemart from "../../Assets/Projects/rozemart.png";
import bookstore from "../../Assets/Projects/bookstore.png";
import codeForces from "../../Assets/Projects/codeForces.png";
import leetCode from "../../Assets/Projects/leetCode.png";


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
              imgPath={leetCode}
              isBlog={false}
              title="LeetCode"
              description=""
              link="https://leetcode.com/firoze_hossain/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={codeForces}
              isBlog={false}
              title="CodeForces"
              description=""
              link="https://codeforces.com/profile/firoze.hossain"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={rozemart}
              isBlog={false}
              title="Rozemart(Running...)"
              description="This is an E-commerce project with a great enhanced features made for computers and electronics products."
              link="https://github.com/firoze-hossain/RozeMart"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bookstore}
              isBlog={false}
              title="Online Bookstore"
              description="This is an e-commerce platform which is developed for selling books to the consumer."
              link="https://github.com/firoze-hossain/Online_Bookstore-Java-Spring-Thymeleaf-MySQL"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
