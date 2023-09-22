import rewards from "../assets/Rewards.png";
import tropthy from "../assets/9486889 1.png";
import Classes from "../sass/Prices.module.scss";
import star from "../assets/star.png";
import star2 from "../assets/sata gra.png";

const Prices = () => {
  return (
    <>
      <main className={Classes["main-prizes"]}>
        <section className={Classes["trophy-container"]}>
          <img src={tropthy} alt="trophy" />
        </section>
        <section className={Classes["rewards-container"]}>
          <img src={star2} alt="" />
          <h1>
            Prizes and <span>Rewards</span>
          </h1>
          <p>Highlights of the prizes and rewards for the participants</p>
          <img src={rewards} alt="" />
        </section>
      </main>
      <img
        style={{
          marginLeft: "3rem",
        }}
        src={star}
        alt=""
      />
      <div className="line"></div>
    </>
  );
};

export default Prices;
