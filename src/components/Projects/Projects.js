import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import codeChef from "../../Assets/Projects/codeChef.jpg";
import codeForces from "../../Assets/Projects/codeforces.png";
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
              imgPath={codeChef}
              isBlog={false}
              title="CodeChef"
              description=""
              link="https://www.codechef.com/users/firoze_hossain"
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
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
