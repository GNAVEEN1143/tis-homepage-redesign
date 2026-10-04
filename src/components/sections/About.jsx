import { ArrowUpRight } from "lucide-react";
import Reveal from "../animation/Reveal";
import "./About.css";

function About() {
  return (
    <section className="about" id="about">
      <Reveal>
        <div className="about-heading">
          <span>ABOUT TIS</span>

          <h2>
            Education that shapes
            <em> character.</em>
          </h2>
        </div>
      </Reveal>

      <div className="about-content">
        <Reveal>
          <div className="about-image-wrapper">
            <img
              src="/hero-school.jpg"
              alt="Tulas International School campus"
            />

            <div className="about-image-tag">
              <span>01</span>
              <p>Learn. Explore. Grow.</p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="about-text">
            <p className="about-lead">
              Tulas International School brings together learning,
              character, creativity and experiences beyond the classroom.
            </p>

            <p>
              Our approach encourages students to discover their interests,
              develop confidence and build the skills they need to navigate
              an ever-changing world.
            </p>

            <a href="#academics" className="about-link">
              Discover our approach
              <ArrowUpRight size={18} />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default About;