import big from "../assets/The big idea (1).png";
import starGra from "../assets/sata gra.png";
import Classes from "../sass/SecondHero.module.scss";
import arrow from "../assets/arrow.png";
import lady from "../assets/7450159 1 (1).png";
import star from "../assets/star.png";
import couple from "../assets/8046554 1 (1).png";

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
      <main className={Classes["second-hero-main"]}>
        <section className={Classes["bigideaTextSection"]}>
          <img
            src={star}
            style={{
              position: "absolute",
              left: "50%",
              bottom: "-130%",
              transform: "translateX(-50%)",
              zIndex: "100",
            }}
            alt=""
          />
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
          <img src={starGra} alt="" />
          <img src={lady} alt="" />
        </section>
      </main>
      <div className={Classes["line"]}></div>
      <main className={Classes["second-hero-main"]}>
        <section className={Classes["ruleImg"]}>
          <img src={starGra} alt="" />
          <img src={couple} alt="" />
        </section>
        <section className={Classes["bigideaTextSection"]}>
          <img
            src={star}
            style={{
              position: "absolute",
              left: "50%",
              bottom: "-130%",
              transform: "translateX(-50%)",
              zIndex: "100",
            }}
            alt=""
          />
          <h1>
            Judging Criteria <span> Key attributes</span>
          </h1>
          <p>
            <span>Innovation</span> and Creativity: Evaluate the uniqueness and
            creativity of the solution. Consider whether it addresses a
            real-world problem in a novel way or introduces innovative features.
          </p>
          <p>
            <span>Functionality</span>: Assess how well the solution works. Does
            it perform its intended functions effectively and without major
            issues? Judges would consider the completeness and robustness of the
            solution.
          </p>
          <p>
            <span>Technical Complexity</span>: Evaluate the technical
            sophistication of the solution. Judges would consider the complexity
            of the code, the use of advanced technologies or algorithms, and the
            scalability of the solution.
          </p>
          <p>
            <span>Adherence to Hackathon Rules</span>: Judges will Ensure that
            the team adhered to the rules and guidelines of the hackathon,
            including deadlines, use of specific technologies or APIs, and any
            other competition-specific requirements.
          </p>
          <div className={Classes["btn"]}>
            <button>Read more</button>
          </div>
        </section>
      </main>
      <div className={Classes["line"]}></div>
    </>
  );
};

export default SecondHero;
