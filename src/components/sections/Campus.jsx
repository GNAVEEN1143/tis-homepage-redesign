import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import Reveal from "../animation/Reveal";
import "./Campus.css";

const campusFeatures = [
  {
    number: "01",
    title: "A vibrant campus",
    description:
      "A welcoming campus environment designed to support learning, friendships and everyday student life.",
  },
  {
    number: "02",
    title: "Sports & activities",
    description:
      "Students have opportunities to participate in sports, activities and experiences beyond academics.",
  },
  {
    number: "03",
    title: "Community living",
    description:
      "A supportive school community encourages students to build relationships, take responsibility and grow together.",
  },
];

function Campus() {
  return (
    <section className="campus" id="campus">
      <Reveal>
        <div className="campus-heading">
          <span>CAMPUS & STUDENT LIFE</span>

          <h2>
            Life happens
            <em> beyond the classroom.</em>
          </h2>
        </div>
      </Reveal>

      <div className="campus-visual">
        <Reveal>
          <div className="campus-image-main">
            <img
              src="/campus-school.jpg"
              alt="Campus life at Tulas International School"
            />

            <div className="campus-image-overlay" />

            <div className="campus-image-card">
              <span>03</span>
              <strong>Space to learn, play and discover.</strong>
            </div>
          </div>
        </Reveal>

        <div className="campus-features">
          {campusFeatures.map((feature, index) => (
            <motion.article
              className="campus-feature"
              key={feature.number}
              initial={{ opacity: 0, x: 35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
            >
              <span className="campus-feature-number">
                {feature.number}
              </span>

              <div className="campus-feature-content">
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>

              <ArrowUpRight
                className="campus-feature-icon"
                size={19}
              />
            </motion.article>
          ))}

          <motion.a
            href="#admissions"
            className="campus-link"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Explore student life
            <ArrowUpRight size={18} />
          </motion.a>
        </div>
      </div>
    </section>
  );
}

export default Campus;