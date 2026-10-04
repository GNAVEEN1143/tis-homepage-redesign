import { ArrowRight, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import Reveal from "../animation/Reveal";
import "./Admissions.css";

function Admissions() {
  return (
    <section className="admissions" id="admissions">
      <Reveal>
        <div className="admissions-content">
          <span>ADMISSIONS</span>

          <h2>
            Give your child
            <br />
            <em>room to grow.</em>
          </h2>

          <p>
            Discover an environment where learning, experiences and
            personal growth come together.
          </p>

          <div className="admissions-actions">
            <a href="#contact" className="admissions-primary">
              Begin Your Journey
              <ArrowRight size={18} />
            </a>

            <a href="#contact" className="admissions-secondary">
              Contact Us
              <ArrowUpRight size={18} />
            </a>
          </div>
        </div>
      </Reveal>

      <motion.div
        className="admissions-decoration"
        initial={{ opacity: 0, scale: 0.7, rotate: -10 }}
        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <span>TIS</span>
      </motion.div>
    </section>
  );
}

export default Admissions;