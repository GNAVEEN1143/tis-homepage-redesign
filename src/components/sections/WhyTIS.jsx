import { ArrowUpRight, BookOpen, Heart, Leaf, Trophy } from "lucide-react";
import { motion } from "framer-motion";
import Reveal from "../animation/Reveal";
import "./WhyTIS.css";

const features = [
  {
    number: "01",
    icon: BookOpen,
    title: "Learning",
    description:
      "A learning environment that encourages curiosity, understanding and independent thinking.",
  },
  {
    number: "02",
    icon: Heart,
    title: "Character",
    description:
      "Students are encouraged to develop confidence, responsibility, empathy and strong values.",
  },
  {
    number: "03",
    icon: Trophy,
    title: "Beyond Academics",
    description:
      "Sports, activities and experiences help students discover their interests and abilities.",
  },
  {
    number: "04",
    icon: Leaf,
    title: "Growing Together",
    description:
      "A supportive community where students learn to respect themselves, others and their surroundings.",
  },
];

function WhyTIS() {
  return (
    <section className="why-tis" id="why-tis">
      <Reveal>
        <div className="why-tis-heading">
          <span>WHY TIS</span>

          <h2>
            More than a school.
            <br />
            <em>A place to belong.</em>
          </h2>
        </div>
      </Reveal>

      <div className="why-tis-grid">
        {features.map((feature, index) => {
          const Icon = feature.icon;

          return (
            <motion.article
              className="why-card"
              key={feature.number}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              whileHover={{ y: -8 }}
            >
              <div className="why-card-top">
                <span>{feature.number}</span>

                <div className="why-card-icon">
                  <Icon size={22} strokeWidth={1.6} />
                </div>
              </div>

              <div className="why-card-content">
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>

              <div className="why-card-arrow">
                <ArrowUpRight size={18} />
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}

export default WhyTIS;