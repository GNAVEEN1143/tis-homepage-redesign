import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import Reveal from "../animation/Reveal";
import "./Academics.css";

const academicAreas = [
  {
    number: "01",
    title: "Strong Foundations",
    description:
      "A structured academic environment that helps students build strong fundamentals and develop a deeper understanding of what they learn.",
  },
  {
    number: "02",
    title: "Curiosity & Exploration",
    description:
      "Students are encouraged to ask questions, explore ideas and connect classroom learning with the world around them.",
  },
  {
    number: "03",
    title: "Skills for Tomorrow",
    description:
      "Learning goes beyond textbooks to develop communication, collaboration, creativity and independent thinking.",
  },
];

function Academics() {
  return (
    <section className="academics" id="academics">
      <Reveal>
        <div className="academics-top">
          <span>ACADEMICS</span>

          <h2>
            Learning with
            <em> purpose.</em>
          </h2>
        </div>
      </Reveal>

      <div className="academics-main">
        <Reveal>
          <div className="academics-image">
            <img
              src="/academics-school.jpg"
              alt="Students learning at Tulas International School"
            />

            <div className="academics-image-label">
              <span>02</span>
              <p>Beyond the classroom</p>
            </div>
          </div>
        </Reveal>

        <div className="academics-list">
          {academicAreas.map((area, index) => (
            <motion.article
              className="academic-item"
              key={area.number}
              initial={{ opacity: 0, x: 35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 0.5,
                delay: index * 0.12,
              }}
            >
              <div className="academic-item-number">
                {area.number}
              </div>

              <div className="academic-item-content">
                <h3>{area.title}</h3>
                <p>{area.description}</p>
              </div>

              <div className="academic-item-icon">
                <ArrowUpRight size={19} />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Academics;