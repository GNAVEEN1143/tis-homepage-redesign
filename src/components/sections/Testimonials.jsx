import { ArrowUpRight, Check } from "lucide-react";
import { motion } from "framer-motion";
import Reveal from "../animation/Reveal";
import "./Testimonials.css";

const reasons = [
  {
    number: "01",
    title: "Holistic Development",
    description:
      "Students are encouraged to grow academically while developing confidence, creativity and essential life skills.",
  },
  {
    number: "02",
    title: "Learning Beyond Classrooms",
    description:
      "Sports, activities and real-world experiences give students opportunities to explore their interests.",
  },
  {
    number: "03",
    title: "Supportive Environment",
    description:
      "A welcoming school community helps students learn, participate and grow with confidence.",
  },
];

function Testimonials() {
  return (
    <section className="testimonials" id="testimonials">
      <Reveal>
        <div className="testimonials-heading">
          <span>WHY TIS</span>

          <h2>
            Growing together,
            <em> every day.</em>
          </h2>
        </div>
      </Reveal>

      <div className="testimonials-grid">
        {reasons.map((reason, index) => (
          <motion.article
            className="testimonial-card"
            key={reason.number}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="testimonial-top">
              <span>{reason.number}</span>
              <Check size={20} />
            </div>

            <h3>{reason.title}</h3>
            <p>{reason.description}</p>

            <a
              href="#admissions"
              aria-label={`Learn more about ${reason.title}`}
            >
              <ArrowUpRight size={18} />
            </a>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;