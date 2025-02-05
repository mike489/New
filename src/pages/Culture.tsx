import Communty from "../components/Communty";
import ContactUs from "../components/Contact";
import CultureGallery from "../components/CultureGallery";
import CultureHero from "../components/Hero/CultureHero";
import OurStory from "../components/OurStory";
import Values from "../components/Values";

const Culture = () => {
  return (
    <>
      <CultureHero />
      <Communty />
      <Values />
      <OurStory />

      <CultureGallery />
      <ContactUs />
    </>
  );
};

export default Culture;
