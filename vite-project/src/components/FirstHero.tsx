import Classes from "../sass/FirstHero.module.scss";
import star from "../assets/star.png";
import title from "../assets/Title.png";
import Line from "../assets/Vector 4.png";
import man from "../assets/man-wearing-smart-glasses-touching-virtual-screen 1.png";
import { NavLink } from "react-router-dom";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { useState, useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";

const FirstHero = () => {
  const [text] = useTypewriter({
    words: [
      "Participate in getlinked tech Hackathon 2023 stand a chance to win a Big prize",
    ],
    loop: 0,
  });

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timerInterval = setInterval(() => {
      const newTimeLeft = calculateTimeLeft();
      setTimeLeft(newTimeLeft);

      if (newTimeLeft.total <= 0) {
        clearInterval(timerInterval);
      }
    }, 1000);

    return () => {
      clearInterval(timerInterval);
    };
  }, []);

  function calculateTimeLeft() {
    const now: any = new Date();
    const targetTime: any = getNextTuesday();
    const timeDifference: any = targetTime - now;

    if (timeDifference <= 0) {
      const nextTuesday: any = new Date(now);
      nextTuesday.setDate(now.getDate() + ((9 - now.getDay() + 7) % 7));
      nextTuesday.setHours(23, 59, 0, 0);
      return {
        total: nextTuesday - now,
        hours: 23 - now.getHours(),
        minutes: 59 - now.getMinutes(),
        seconds: 59 - now.getSeconds(),
      };
    }

    const hours = Math.floor(timeDifference / (1000 * 60 * 60));
    const minutes = Math.floor(
      (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    return {
      total: timeDifference,
      hours,
      minutes,
      seconds,
    };
  }

  function getNextTuesday() {
    const now = new Date();
    const daysUntilNextTuesday = (9 - now.getDay() + 7) % 7;
    const nextTuesday = new Date(now);
    nextTuesday.setDate(now.getDate() + daysUntilNextTuesday);
    nextTuesday.setHours(23, 59, 0, 0);
    return nextTuesday;
  }

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
      <main className={Classes["main-firstSection"]}>
        <motion.section
          initial={{ x: -100, opacity: 0 }}
          animate={controls}
          transition={{ duration: 0.3 }}
          ref={targetRef}
          className={Classes["firstSection"]}
        >
          <div className={Classes["firstSection-img-background"]}>
            <img className={Classes["star"]} src={star} alt="star" />
            <img src={title} alt="title" />
          </div>
          <div className={Classes["img-title-section"]}>
            <p>
              {text}
              <Cursor cursorColor="#903AFF" />
            </p>
          </div>
          <div className={Classes["btn"]}>
            <button>
              <NavLink to="/Register">Register</NavLink>
            </button>
          </div>
          <div>
            <h1
              style={{
                color: "white",
                marginTop: "1rem",
                textAlign: "left",
              }}
            >{`${String(timeLeft.hours).padStart(2, "0")} h  ${String(
              timeLeft.minutes
            ).padStart(2, "0")} m  ${String(timeLeft.seconds).padStart(
              2,
              "0"
            )} s`}</h1>
            <p>To the announcement of results day</p>
          </div>
        </motion.section>
        <motion.section
          initial={{ right: -100, opacity: 0 }}
          animate={controls}
          transition={{ duration: 0.4 }}
          ref={targetRef}
          className={Classes["secondSection"]}
        >
          <div className={Classes["textsection"]}>
            <h1>Igniting a Revolution in HR Innovation</h1>
            <img src={Line} alt="" />
          </div>
          <img src={man} alt="man" />
        </motion.section>
      </main>
      <div className={Classes["line"]}></div>
    </>
  );
};

export default FirstHero;
