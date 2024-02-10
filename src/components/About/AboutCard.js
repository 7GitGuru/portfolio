import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I'm  <span className="purple">Bohdan Kovalchuk, </span>
            a 16 y.o developer from <span className="purple"> Kyiv, Ukraine.</span>
            <br />
            I appreciate the opportunity for development and friendly staff.
            <br />
            Currently learning the fundamentals of web development, diving into both front-end and back-end technologies.
            <br />
            <br />
          </p>

          <p style={{ color: "rgb(155 126 172)" }}>
           “Perfection is achieved not when there is nothing more to add, but rather when there is nothing more to take away.” {" "}
          </p>
          <footer className="blockquote-footer">Antoine de Saint-Exupery</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
