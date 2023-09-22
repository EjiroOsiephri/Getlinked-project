import partners from "../assets/Partner and sponsors section.png";
import lens from "../assets/Purple-Lens-Flare-PNG.png";

const Partners = () => {
  return (
    <>
      <main>
        <img src={lens} alt="" />
        <h1>Partners and Sponsors</h1>
        <p>
          Getlinked Hackathon 1.0 is honored to have the following major
          companies as its partners and sponsors
        </p>
        <section>
          <img src={partners} alt="" />
        </section>
      </main>
    </>
  );
};

export default Partners;
