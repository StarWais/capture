import AboutSection from "../componets/AboutSection";
import ServicesSection from "../componets/ServicesSection";
import FAQSection from "../componets/FAQSection";
import { motion } from "framer-motion";
import { PageAnimation } from "../Animations";

const AboutUs = () => {
  return (
    <motion.div
      variants={PageAnimation}
      initial="hidden"
      animate="show"
      className="AboutUs"
    >
      <AboutSection />
      <ServicesSection />
      <FAQSection />
    </motion.div>
  );
};

export default AboutUs;
