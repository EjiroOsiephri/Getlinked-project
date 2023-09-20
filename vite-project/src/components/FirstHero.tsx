import Classes from "../sass/FirstHero.module.scss";
import star from "../assets/star.png";
import title from "../assets/Title.png";
import Line from "../assets/Vector 4.png";
import Countdown from "../assets/Countdown time (1).png";
import man from "../assets/man-wearing-smart-glasses-touching-virtual-screen 1.png";

const FirstHero = () => {
  return (
    <>
      <main className={Classes["main-firstSection"]}>
        <section className={Classes["firstSection"]}>
          <div className={Classes["firstSection-img-background"]}>
            <img className={Classes["star"]} src={star} alt="star" />
            <img src={title} alt="title" />
          </div>
          <div className={Classes["img-title-section"]}>
            <p>
              Participate in getlinked tech Hackathon 2023 stand a chance to win
              a Big prize
            </p>
          </div>
          <div className={Classes["btn"]}>
            <button>Register</button>
          </div>
          <img src={Countdown} alt="" />
        </section>
        <section className={Classes["secondSection"]}>
          <div className={Classes["textsection"]}>
            <h1>Igniting a Revolution in HR Innovation</h1>
            <img src={Line} alt="" />
          </div>
          <img src={man} alt="man" />
        </section>
      </main>
      <div className={Classes["line"]}></div>
    </>
  );
};

export default FirstHero;
