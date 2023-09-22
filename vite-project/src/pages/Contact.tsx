import Header from "../components/Header";
import Classes from "../sass/Contact.module.scss";
import starGra from "../assets/sata gra.png";
import star from "../assets/star.png";
import { useRef, useState } from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Contact = () => {
  const [postObject, setPostObject] = useState({});

  const nameInputRef = useRef<HTMLInputElement | null>(null);
  const emailInputRef = useRef<HTMLInputElement | null>(null);
  const messageInputRef = useRef<HTMLTextAreaElement | null>(null);

  function submitHandler(e: any) {
    e.preventDefault();
    const enteredName = nameInputRef.current?.value;
    const enteredEmail = emailInputRef.current?.value;
    const enteredMessage = messageInputRef.current?.value;

    if (!enteredName && !enteredEmail && !enteredMessage) {
      return;
    }
    setPostObject({
      enteredName,
      enteredEmail,
      enteredMessage,
    });
  }
  console.log(postObject);

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
          <img
            style={{
              width: "20px",
              objectFit: "cover",
            }}
            src={star}
            alt=""
          />
        </section>
        <section className={Classes["formSection"]}>
          <h2>Questions or need assistance?</h2>
          <h2 className={Classes["last-text"]}>Let us know about it!</h2>
          <form
            onSubmit={submitHandler}
            className={Classes["contactComponentPage"]}
          >
            <div className={Classes["name"]}>
              <label htmlFor="name"> Name</label>
              <input ref={nameInputRef} type="text" />
            </div>
            <div className={Classes["email"]}>
              <label htmlFor="email">Mail</label>
              <input ref={emailInputRef} type="text" />
            </div>
            <div className={Classes["message"]}>
              <label htmlFor="message">Message</label>
              <textarea
                ref={messageInputRef}
                rows={6}
                placeholder="Type your Message Here"
              />
            </div>
            <button className={Classes["btn"]}>Submit</button>
          </form>
          <img
            style={{
              marginTop: "1rem",
            }}
            src={starGra}
            alt=""
          />
        </section>
      </main>
    </>
  );
};

export default Contact;
