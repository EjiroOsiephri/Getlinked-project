import FirstHero from "../components/FirstHero";
import Header from "../components/Header";
import SecondHero from "../components/SecondHero";
import Faq from "../components/Faqs";
import Timeline from "../components/Timeline";
import Prices from "../components/Prices";
import Partners from "../components/Partners";
import PrivacyPolicy from "../components/PrivacyPolicy";
import FooterSection from "../components/FooterSection";

const Home = () => {
  return (
    <>
      <Header />
      <FirstHero />
      <SecondHero />
      <Faq />
      <Timeline />
      <Prices />
      <Partners />
      <PrivacyPolicy />
      <FooterSection />
    </>
  );
};

export default Home;
