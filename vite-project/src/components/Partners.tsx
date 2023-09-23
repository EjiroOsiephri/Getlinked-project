import partners from "../assets/Partner and sponsors section.png";
import lens from "../assets/Purple-Lens-Flare-PNG.png";
import Classes from "../sass/Partners.module.scss";
import starPu from "../assets/star pu.png";

const Partners = () => {
  return (
    <>
      <main className={Classes["main-partners"]}>
        <img src={lens} alt="" />
        <img src={starPu} alt="" />
        <h1>Partners and Sponsors</h1>
        <p
          style={{
            maxWidth: "600px",
          }}
        >
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
