import Header from "../components/Header";
import Classes from "../sass/Contact.module.scss";
import starGra from "../assets/sata gra.png";
import star from "../assets/star.png";
import { useEffect, useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Contact = () => {
  const [state, setState] = useState(false);
  const [email, setEmail] = useState(false);

  const nameInputRef = useRef<HTMLInputElement | null>(null);
  const emailInputRef = useRef<HTMLInputElement | null>(null);
  const messageInputRef = useRef<HTMLTextAreaElement | null>(null);

  function submitHandler(e: any) {
    e.preventDefault();
    const enteredName = nameInputRef.current?.value;
    const enteredEmail = emailInputRef.current?.value;
    const enteredMessage = messageInputRef.current?.value;
    const enteredEmailValid = enteredEmail?.includes("@");

    if (!enteredName || !enteredEmail || !enteredMessage) {
      setState(true);
      toast("Please fill in all fields!!", {
        className: Classes["custom-toast"],
      });
      return;
    }
    if (!enteredEmailValid) {
      setEmail(true);
      toast("Enter A Valid Email");
      return;
    }

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      email: enteredEmail,
      first_name: enteredName,
      message: enteredMessage,
    });

    var requestOptions: any = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("https://backend.getlinked.ai/hackathon/contact-form", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));

    if (nameInputRef.current) {
      nameInputRef.current.value = "";
    }
    if (emailInputRef.current) {
      emailInputRef.current.value = "";
    }
    if (messageInputRef.current) {
      messageInputRef.current.value = "";
    }

    toast("Succesfully created contact");
  }

  useEffect(() => {
    setTimeout(() => {
      setState(false);
    }, 2000);
  }, [submitHandler]);

  return (
    <>
      <Header />
      <ToastContainer />
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
              <input
                style={
                  state
                    ? {
                        border: "2px solid red",
                      }
                    : {}
                }
                ref={nameInputRef}
                type="text"
              />
            </div>
            <div className={Classes["email"]}>
              <label htmlFor="email">Mail</label>
              <input
                style={
                  state || email
                    ? {
                        border: "2px solid red",
                      }
                    : {}
                }
                ref={emailInputRef}
                type="text"
              />
            </div>
            <div className={Classes["message"]}>
              <label htmlFor="message">Message</label>
              <textarea
                style={
                  state
                    ? {
                        border: "2px solid red",
                      }
                    : {}
                }
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
