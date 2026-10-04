import { ArrowUpRight, Mail, Phone } from "lucide-react";
import Reveal from "../animation/Reveal";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer" id="contact">
      <Reveal>
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-logo">TULAS</div>

            <p>
              Tulas International School
              <br />
              Dehradun
            </p>
          </div>

          <div className="footer-heading">
            <span>GET IN TOUCH</span>

            <h2>
              Let's start a
              <em> conversation.</em>
            </h2>
          </div>
        </div>
      </Reveal>

      <div className="footer-contact">
        <Reveal delay={0.1}>
          <a
            href="mailto:info@tis.edu.in"
            className="footer-contact-item"
          >
            <div>
              <span>Email</span>
              <strong>info@tis.edu.in</strong>
            </div>

            <Mail size={20} />
          </a>
        </Reveal>

        <Reveal delay={0.2}>
          <a
            href="tel:+911352690300"
            className="footer-contact-item"
          >
            <div>
              <span>Phone</span>
              <strong>+91 135 269 0300</strong>
            </div>

            <Phone size={19} />
          </a>
        </Reveal>

        <Reveal delay={0.3}>
          <a
            href="https://www.google.com/maps/search/?api=1&query=Tulas+International+School+Dehradun"
            target="_blank"
            rel="noreferrer"
            className="footer-contact-item"
          >
            <div>
              <span>Campus</span>
              <strong>Dehradun, Uttarakhand</strong>
            </div>

            <ArrowUpRight size={20} />
          </a>
        </Reveal>
      </div>

      <Reveal delay={0.2}>
        <div className="footer-bottom">
          <p>© 2026 Tulas International School</p>

          <a href="#home" className="footer-back">
            Back to top
            <ArrowUpRight size={17} />
          </a>
        </div>
      </Reveal>
    </footer>
  );
}

export default Footer;