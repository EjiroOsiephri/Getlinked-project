import Classes from "../sass/FirstHero.module.scss";
import star from "../assets/star.png";
import title from "../assets/Title.png";
import lens from "../assets/Purple-Lens-Flare-PNG (1).png";
import lens2 from "../assets/Image 1.png";
import Line from "../assets/Vector 4.png";
import Countdown from "../assets/Countdown time (1).png";
import man from "../assets/man-wearing-smart-glasses-touching-virtual-screen 1.png";

const FirstHero = () => {
  return (
    <>
      <main className={Classes["main-firstSection"]}>
        <section className={Classes["firstSection"]}>
          <img src={star} alt="star" />
          <img src={lens} className={Classes["lens-img"]} alt="lens" />
          <div className={Classes["img-title-section"]}>
            <img src={title} alt="title" />
            <p>
              Participate in getlinked tech Hackathon 2023 stand a chance to win
              a Big prize
            </p>
          </div>
          <div className="btn">
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
          <img src={lens2} alt="lens 2" />
        </section>
      </main>
    </>
  );
};

export default FirstHero;
