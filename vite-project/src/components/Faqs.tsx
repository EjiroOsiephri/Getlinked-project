import Classes from "../sass/Faqs.module.scss";
import star from "../assets/star.png";
import man from "../assets/cwok_casual_21 1.png";
import star2 from "../assets/sata gra.png";
import star3 from "../assets/star pu.png";
import question from "../assets/_.png";
import question2 from "../assets/_@2x.png";
import question3 from "../assets/_@3x.png";
const Faqs = () => {
  return (
    <>
      <main className={Classes["main-faqs"]}>
        <section>
          <img src={star} alt="" />
          <h1>
            Frequently Ask
            <span> Question</span>
          </h1>
          <p>
            We got answers to the questions that you might want to ask about
            getlinked Hackathon 1.0
          </p>
          <aside className={Classes["questions-container"]}>
            <div className={Classes["flexContainer"]}>
              <p>Can I work on a project I started before the hackathon?</p>
              <p>+</p>
            </div>
            <div className={Classes["line"]}></div>
            <div className={Classes["flexContainer"]}>
              <p>Can I work on a project I started before the hackathon?</p>
              <p>+</p>
            </div>
            <div className={Classes["line"]}></div>
            <div className={Classes["flexContainer"]}>
              <p>What happens if I need help during the hackathon?</p>
              <p>+</p>
            </div>
            <div className={Classes["line"]}></div>
            <div className={Classes["flexContainer"]}>
              <p>What happens if I don't have an idea for a project?</p>
              <p>+</p>
            </div>
            <div className={Classes["line"]}></div>
            <div className={Classes["flexContainer"]}>
              <p>Can I join a team or do I have to come with one?</p>
              <p>+</p>
            </div>
            <div className={Classes["line"]}></div>
            <div className={Classes["flexContainer"]}>
              <p>Can I work on a project I started before the hackathon?</p>
              <p>+</p>
            </div>
            <div className={Classes["line"]}></div>
          </aside>
          <img src={star3} alt="" />
        </section>
        <section>
          <div className={Classes["questions-section"]}>
            <img src={question} alt="" />
            <img src={question2} alt="" />
            <img src={question3} alt="" />
          </div>
          <img src={man} alt="" />
          <img src={star2} alt="" />
        </section>
      </main>
    </>
  );
};

export default Faqs;
