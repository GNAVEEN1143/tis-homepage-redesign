import { ArrowUpRight, Trophy } from "lucide-react";
import Reveal from "../animation/Reveal";
import "./Sports.css";

const sports = [
  "Football",
  "Cricket",
  "Basketball",
  "Swimming",
  "Athletics",
  "Badminton",
];

function Sports() {
  return (
    <section className="sports" id="sports">
      <Reveal>
        <div className="sports-heading">
          <span>SPORTS & ACTIVITIES</span>

          <h2>
            Play with purpose.
            <em> Grow with confidence.</em>
          </h2>
        </div>
      </Reveal>

      <div className="sports-content">
        <Reveal>
          <div className="sports-image">
            <img
              src="/sports-school.jpg"
              alt="Students participating in sports at Tulas International School"
            />

            <div className="sports-image-card">
              <Trophy size={20} />

              <div>
                <strong>16+</strong>
                <span>Olympic Sports</span>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="sports-info">
            <p className="sports-description">
              Sports at Tulas International School encourage teamwork,
              discipline, confidence and a healthy approach to competition.
            </p>

            <div className="sports-list">
              {sports.map((sport, index) => (
                <div className="sport-item" key={sport}>
                  <span>0{index + 1}</span>
                  <strong>{sport}</strong>
                  <ArrowUpRight size={17} />
                </div>
              ))}
            </div>

            <a href="#admissions" className="sports-link">
              Explore student life
              <ArrowUpRight size={18} />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default Sports;