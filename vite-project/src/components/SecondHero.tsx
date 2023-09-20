import big from "../assets/The big idea (1).png";
import starGra from "../assets/sata gra.png";
import Classes from "../sass/SecondHero.module.scss";
import arrow from "../assets/arrow.png";
import lady from "../assets/7450159 1 (1).png";

const SecondHero = () => {
  return (
    <>
      <main className={Classes["second-hero-main"]}>
        <section className={Classes["bigIdea"]}>
          <img src={starGra} className={Classes["starGra"]} alt="" />
          <img src={big} alt="" />
          <img className={Classes["arrow"]} src={arrow} alt="" />
        </section>
        <section className={Classes["bigideaTextSection"]}>
          <h1>
            Introduction to getlinked tech <span>Hackathon 1.0</span>
          </h1>
          <p>
            Our tech hackathon is a melting pot of visionaries, and its purpose
            is as clear as day: to shape the future. Whether you're a coding
            genius, a design maverick, or a concept wizard, you'll have the
            chance to transform your ideas into reality. Solving real-world
            problems, pushing the boundaries of technology, and creating
            solutions that can change the world, that's what we're all about!
          </p>
        </section>
      </main>
      <div className={Classes["line"]}></div>
      <main className={Classes["RulesAndGuideLines"]}>
        <section className={Classes["ruleTextSection"]}>
          <h1>
            Rules and <span> Guidelines</span>
          </h1>
          <p>
            Our tech hackathon is a melting pot of visionaries, and its purpose
            is as clear as day: to shape the future. Whether you're a coding
            genius, a design maverick, or a concept wizard, you'll have the
            chance to transform your ideas into reality. Solving real-world
            problems, pushing the boundaries of technology, and creating
            solutions that can change the world, that's what we're all about!
          </p>
        </section>
        <section className={Classes["ruleImg"]}>
          <img src={lady} alt="" />
        </section>
      </main>
    </>
  );
};

export default SecondHero;
