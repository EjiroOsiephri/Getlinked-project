import rewards from "../assets/Rewards.png";
import tropthy from "../assets/9486889 1.png";

const Prices = () => {
  return (
    <>
      <main>
        <section>
          <img src={tropthy} alt="trophy" />
        </section>
        <section>
          <h1>
            Prizes and <span>Rewards</span>
          </h1>
          <img src={rewards} alt="" />
        </section>
      </main>
    </>
  );
};

export default Prices;
