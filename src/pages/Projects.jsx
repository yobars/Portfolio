import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";
import pg from "../assets/projects/pg.png";
import signus from "../assets/signus.png";
import teachme from "../assets/teachme.png";
import krypto from "../assets/projects/krypto.png";
import soundscape from "../assets/soundscape.png";

const Projects = () => {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Recent Top <strong className="yellow">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={teachme}
              isBlog={false}
              title="Teach Me"
              description="A learning platform for children, offering interactive games and activities with progress reports to monitor learning."
              ghLink="https://github.com/yobars/Teach_ME"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={signus}
              isBlog={false}
              title="Sign‑Us"
              description="An online learning platform for Bangla sign language using animated graphics and gesture recognition."
              ghLink="https://github.com/yobars/design-project-1"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={soundscape}
              isBlog={false}
              title="SoundScape"
              description="Music App Design Concept."
              ghLink="https://dribbble.com/shots/20981414-SoundScape-music-app-design"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pg}
              isBlog={false}
              title="Blog Website"
              description="This blogging application features a RESTful API server built with Nodejs and Expressjs. The data is retrieved from the API server and displayed on a user-friendly interface designed using React, Redux, and styled-components for a seamless experience."
              ghLink="https://github.com/19sajib/mern-blog-app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={krypto}
              isBlog={false}
              title="Project Krypto"
              description="Project Krypto is a Web 3 project that utilizes an Ethereum smart contract created using Solidity. It allows users to interact with their Metamask wallet and send Ethereum."
              ghLink="https://github.com/19sajib/Project-Krypto-Web-3.0"
              demoLink="https://project-krypto.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={soundscape}
              isBlog={false}
              title="Solidity Kickstart"
              description="Solidity Kickstart is a Web 3 project that utilizes an Ethereum smart contract created using Solidity. It includes all the functionality of a kickstart platform, enabling users to interact with their Metamask wallet, transfer Ethereum and participate in kickstart campaigns."
              ghLink="https://github.com/19sajib/Solidity-Kickstart"
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  )
}

export default Projects