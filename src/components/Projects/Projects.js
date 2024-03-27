import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
// import Gradient from "../../Assets/Projects/gradient.gif";
import Crypto from "../../Assets/Projects/crypto.png";
import Converter from "../../Assets/Projects/converter.png";
import Manager from "../../Assets/Projects/task-manager.png";
// import Shortener from "../../Assets/Projects/shortener.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={5} className="project-card">
            <ProjectCard
              imgPath={Converter}
              isBlog={false}
              title="💱Currency Converter"
              description="This project is a Currency Converter web application developed using Python and Flask. 
              The primary purpose of the application is to enable users to perform 
              real-time currency conversions based on up-to-date exchange rates."
              ghLink="https://github.com/7GitGuru/Currency-Converter"
            />
          </Col>

          <Col md={5} className="project-card">
            <ProjectCard
              imgPath={Manager}
              isBlog={false}
              title="📑Task Manager"
              description="This project is a Task Manager web application built using Python and Flask framework,
               designed to manage tasks by adding, completing, and deleting them. 
               The application also generates an Excel report of the tasks."
              ghLink="https://github.com/7GitGuru/Task-Manager"
            />
          </Col>

          {/* <Col md={5} className="project-card">
            <ProjectCard
              imgPath={Gradient}
              isBlog={false}
              title="Gradient Generator"
              description="Generate the gradient quickly and easily."
              ghLink="https://github.com/7GitGuru/gradient-generator"
              demoLink="https://7gitguru.github.io/gradient-generator/"              
            />
          </Col> */}

          {/* <Col md={5} className="project-card">
            <ProjectCard
              imgPath={Shortener}
              isBlog={false}
              title="🔗URL Shortener"
              description="This Telegram bot is designed to shorten URLs using the TinyURL service."
              ghLink="https://github.com/7GitGuru/TinyUrlrobot"
              demoLink="https://t.me/tinyURLrobot"
            />
          </Col> */}

          <Col md={5} className="project-card">
            <ProjectCard
              imgPath={Crypto}
              isBlog={false}
              title="💲Crypto Tracker"
              description="CryptoTracker is a universal tool designed to track cryptocurrency prices on exchanges in real time. 
              With CryptoTracker, users can track cryptocurrency prices on popular exchanges not only through the command line, 
              but also through the Telegram bot."
              ghLink="https://github.com/7GitGuru/crypto-tracker"
              demoLink="https://cryptotrack3r.vercel.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
