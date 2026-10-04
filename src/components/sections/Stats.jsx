import { motion } from "framer-motion";
import "./Stats.css";

const stats = [
  {
    number: "22",
    suffix: "",
    label: "Acre Pollution-Free Campus",
  },
  {
    number: "16",
    suffix: "+",
    label: "Olympic Sports",
  },
  {
    number: "24",
    suffix: "x7",
    label: "Medical Assistance",
  },
  { number: "6", 
    suffix: ":1", 
    label: "Student Teacher Ratio" },
];

function Stats() {
  return (
    <section className="stats" aria-label="TIS highlights">
      <div className="stats-header">
        <span>AT A GLANCE</span>
        <p>Everything students need to learn, grow and thrive.</p>
      </div>

      <div className="stats-grid">
        {stats.map((stat, index) => (
          <motion.div
            className="stat-item"
            key={stat.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
            }}
          >
            <div className="stat-number">
              {stat.number}
              <span>{stat.suffix}</span>
            </div>

            <p>{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Stats;