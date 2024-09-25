import AboutUsSection from "../../components/AboutUs/AboutUsSection";
import AboutPart1 from "../../components/AboutUsPart1/AboutPart1";
import Navbar from "../../components/Navbar/Navbar";

const AboutUs: React.FC = () => {
  return (
    <>
    <Navbar />
    <AboutPart1 />
    <AboutUsSection />
    </>
  );
};

export default AboutUs;
