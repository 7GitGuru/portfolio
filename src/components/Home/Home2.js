import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaEnvelope, FaGithub, FaInstagram, FaTelegram } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I fell in love with programming and I have at least learnt
              something, I think… 🤷‍♂️
              <br />
              <br />
              My field of Interest's is building&nbsp;
                <b className="purple">new and innovative</b> web applications
                that solve real-world problems.{" "}
                <b className="purple">
                I enjoy creating and bringing ideas to life through code.
                </b>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              with <b className="purple">cutting-edge technologies</b> and
                <b className="purple">
                  {" "}
                  staying up-to-date
                </b>
              &nbsp; with
                <b className="purple"> the latest trends in web development.</b>
            </p>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/7GitGuru"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://t.me/Cod3rX"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaTelegram />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/07bohdan/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaInstagram />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://mail.google.com/mail/?view=cm&source=mailto&to=Cod3rX@proton.me"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaEnvelope  />
                </a>
              </li>
              {/* <li className="social-icons">
                <a
                  href="https://www.buymeacoffee.com/bohd4n"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <SiBuymeacoffee />
                </a>
              </li> */}
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
