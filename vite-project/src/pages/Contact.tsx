import Header from "../components/Header";
import Classes from "../sass/Contact.module.scss";
import starGra from "../assets/sata gra.png";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Contact = () => {
  return (
    <>
      <Header />
      <main className={Classes["contactSection"]}>
        <img src={starGra} alt="" />
        <section className={Classes["textSection"]}>
          <h1>Get in touch</h1>
          <p>Contact Information</p>
          <p>27,Alara Street Yaba 100012 Lagos State</p>
          <p>we are open from Monday-Friday 08:00am - 05:00pm</p>
          <h3>Share on</h3>
          <h4>
            <FaInstagram />
            <FaTwitter />
            <FaFacebook />
            <FaLinkedin />
          </h4>
        </section>
        <section className={Classes["formSection"]}>
          <h2>Questions or need assistance?</h2>
          <h2 className={Classes["last-text"]}>Let us know about it!</h2>
          <form className={Classes["contactComponentPage"]}>
            <div className={Classes["name"]}>
              <label htmlFor="name"> Name</label>
              <input type="text" />
            </div>
            <div className={Classes["email"]}>
              <label htmlFor="email">Mail</label>
              <input type="text" />
            </div>
            <div className={Classes["message"]}>
              <label htmlFor="message">Message</label>
              <textarea rows={6} placeholder="Type your Message Here" />
            </div>
            <button className={Classes["btn"]}>Submit</button>
          </form>
        </section>
      </main>
    </>
  );
};

export default Contact;
