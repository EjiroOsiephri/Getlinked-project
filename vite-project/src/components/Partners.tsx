import partners from "../assets/Partner and sponsors section.png";
import lens from "../assets/Purple-Lens-Flare-PNG.png";
import Classes from "../sass/Partners.module.scss";

const Partners = () => {
  return (
    <>
      <main className={Classes["main-partners"]}>
        <img src={lens} alt="" />
        <h1>Partners and Sponsors</h1>
        <p>
          Getlinked Hackathon 1.0 is honored to have the following major
          companies as its partners and sponsors
        </p>
        <section className={Classes["partner-img-section"]}>
          <img src={partners} alt="" />
        </section>
      </main>
      <div className="line"></div>
    </>
  );
};

export default Partners;
