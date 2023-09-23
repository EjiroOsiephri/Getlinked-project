import imageLock from "../assets/08 1.png";
import Classes from "../sass/PrivacyPolicy.module.scss";
import star from "../assets/star pu.png";
import star2 from "../assets/star.png";
import lens from "../assets/Purple-Lens-Flare-PNG (1).png";
import bgImg from "../assets/56v.png";
import { motion, useAnimation } from "framer-motion";
import { useRef, useEffect } from "react";

const PrivacyPolicy = () => {
  const targetRef = useRef(null);
  const controls = useAnimation();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          controls.start({
            x: 0,
            opacity: 1,
          });
        } else {
          controls.start({
            x: -100,
            opacity: 0,
          });
        }
      });
    });

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    return () => {
      if (targetRef.current) {
        observer.unobserve(targetRef.current);
      }
    };
  }, [controls]);
  return (
    <>
      <motion.main className={Classes["privacy-main"]}>
        <motion.section
          initial={{ x: -100, opacity: 0 }}
          animate={controls}
          transition={{ duration: 0.3 }}
          ref={targetRef}
        >
          <img src={star} alt="" />
          <h1>
            Privacy Policy and <span>Terms</span>
          </h1>
          <p
            style={{
              color: "rgba(255, 255, 255, 0.75)",
            }}
          >
            Last updated on September 12, 2023
          </p>
          <p>
            Below are our privacy & policy, which outline a lot of goodies. it’s
            our aim to always take of our participant
          </p>

          <aside className={Classes["aside-privacy"]}>
            <img src={star2} alt="" />
            <p>
              At getlinked tech Hackathon 1.0, we value your privacy and are
              committed to protecting your personal information. This Privacy
              Policy outlines how we collect, use, disclose, and safeguard your
              data when you participate in our tech hackathon event. By
              participating in our event, you consent to the practices described
              in this policy.
            </p>

            <h4>Licensing Policy</h4>
            <p>Here are terms of our Standard License:</p>
            <ul>
              <li>
                The Standard License grants you a non-exclusive right to
                navigate and register for our event
              </li>
              <li>
                You are licensed to use the item available at any free source
                sites, for your project developement
              </li>
            </ul>
            <img
              src={lens}
              style={{
                position: "absolute",
                left: "-30px",
              }}
              alt=""
            />
            <div className={Classes["btn"]}>
              <button>Read More</button>
            </div>
          </aside>
          <img src={star2} alt="" />
        </motion.section>

        <motion.section
          initial={{ x: -100, opacity: 0 }}
          animate={controls}
          transition={{ duration: 0.3 }}
          ref={targetRef}
          className={Classes["imageLock-section"]}
        >
          <img src={bgImg} alt="" />
          <img src={imageLock} alt="imagelock" />
        </motion.section>
      </motion.main>
    </>
  );
};

export default PrivacyPolicy;
