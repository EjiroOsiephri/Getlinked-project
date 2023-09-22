import FirstHero from "../components/FirstHero";
import Header from "../components/Header";
import SecondHero from "../components/SecondHero";
import Faq from "../components/Faqs";
import Timeline from "../components/Timeline";
import Prices from "../components/Prices";

const Home = () => {
  return (
    <>
      <Header />
      <FirstHero />
      <SecondHero />
      <Faq />
      <Timeline />
      <Prices />
    </>
  );
};

export default Home;
