import { ArrowDown, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <motion.p
          className="hero-label"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          TULAS INTERNATIONAL SCHOOL
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          Where curiosity
          <br />
          becomes <em>confidence.</em>
        </motion.h1>

        <motion.p
          className="hero-description"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          A nurturing environment where students learn, explore,
          discover their strengths, and grow into confident individuals.
        </motion.p>

        <motion.div
          className="hero-actions"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <a href="#admissions" className="hero-primary-btn">
            Explore Admissions
            <ArrowRight size={18} />
          </a>

          <a href="#about" className="hero-secondary-btn">
            Discover TIS
          </a>
        </motion.div>
      </div>

      <motion.div
        className="hero-visual"
        initial={{ opacity: 0, scale: 1.04 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <img
          src="/about-school.jpg"
          alt="Students at Tulas International School"
        />

        <div className="hero-image-overlay" />

        <div className="hero-image-card">
          <span>DEHRADUN</span>
          <strong>Learning beyond classrooms.</strong>
        </div>
      </motion.div>

      <a href="#about" className="hero-scroll">
        <span>Scroll to explore</span>
        <ArrowDown size={16} />
      </a>
    </section>
  );
}

export default Hero;