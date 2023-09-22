import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaPhone,
  FaTwitter,
} from "react-icons/fa";
import Classes from "../sass/Footer.module.scss";

const FooterSection = () => {
  return (
    <>
      <main>
        <aside className={Classes["aside-container"]}>
          <section className={Classes["first-footer-section"]}>
            <h1>
              get<span>linked</span>
              <p>
                Getlinked Tech Hackathon is a technology innovation program
                established by a group of organizations with the aim of
                showcasing young and talented individuals in the field of
                technology
              </p>
              <h4>
                Terms of Use <span>|</span> Privacy Policy
              </h4>
            </h1>
          </section>
          <section className={Classes["second-footer-section"]}>
            <h3>Useful Links</h3>
            <li>Overview</li>
            <li>Timeline</li>
            <li>FAQs</li>
            <li>Register</li>
            <li>
              <span>Follow us</span>
              <FaInstagram />
              <FaTwitter />
              <FaFacebook />
              <FaLinkedin />
            </li>
          </section>
          <section className={Classes["contact-footer-section"]}>
            <p>
              <FaPhone />
              +234 6707653444
            </p>
            <p>
              <FaLocationArrow /> 27,Alara Street Yaba 100012 Lagos State
            </p>
          </section>
        </aside>
        <p>All rights reserved. © getlinked Ltd.</p>
      </main>
    </>
  );
};

export default FooterSection;
