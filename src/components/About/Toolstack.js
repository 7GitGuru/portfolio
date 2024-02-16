import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiDocker, DiFirebase, DiGit, DiGithubBadge, DiMongodb, DiMysql } from "react-icons/di";
// import { SiVercel } from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMysql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGithubBadge />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiDocker />
      </Col>
      {/* <Col xs={4} md={2} className="tech-icons">
        <SiVercel />
      </Col> */}
      <Col xs={4} md={2} className="tech-icons">
        <DiFirebase />
      </Col>
    </Row>
  );
}

export default Toolstack;
