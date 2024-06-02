import React from "react";
import { Container } from "react-bootstrap";

import Particle from '../components/Particle'
import Techstack from "../components/Skillset/Techstack";
import Toolstack from "../components/Skillset/Toolstack";
import QAstack from '../components/Skillset/QAstack'
// import Leetcode from "../components/Skillset/Leetcode";
// import Github from "../components/Skillset/Github";

const Skillset = () => {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Languages and <strong className="yellow">Frameworks </strong>
        </h1>

        <Techstack />

        {/* <h1 className="project-heading">
          UI/UX <strong className="yellow">Design </strong>
        </h1>

        <Techstack /> */}

        <h1 className="project-heading">
          Quality <strong className="yellow">Assurance </strong>
        </h1>

        <QAstack />

        <h1 className="project-heading">
          <strong className="yellow">Tools</strong>
        </h1>
        <Toolstack />

        {/* <Leetcode />
        <Github /> */}
      </Container>
    </Container>
  )
}

export default Skillset