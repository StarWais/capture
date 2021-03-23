import React from "react";
import home1 from "../img/home1.png";
import { Link } from "react-router-dom";
import {
  BasicSection,
  Description,
  Image,
  Hidden,
} from "../styles/BasicStyles";
import { motion } from "framer-motion";
import {
  titleAnimation,
  btnParAnimation,
  fade,
  zoomInOut,
} from "../Animations";

const AboutSection = () => {
  return (
    <BasicSection>
      <Description>
        <motion.div>
          <Hidden>
            <motion.h2 variants={titleAnimation}>We work to make</motion.h2>
          </Hidden>
          <Hidden>
            <motion.h2 variants={titleAnimation}>
              your
              <motion.span variants={zoomInOut}> dreams </motion.span>
              come
            </motion.h2>
          </Hidden>
          <Hidden>
            <motion.h2 variants={titleAnimation}>true</motion.h2>
          </Hidden>
        </motion.div>
        <motion.p variants={btnParAnimation} className="AboutSection__Text">
          Contact us for any photography or videography ideas what you have. We
          have professionals with amazing skills
        </motion.p>
        <Link to="/contact">
          <motion.button variants={fade} className="Aboutsection__Button">
            Contact us
          </motion.button>
        </Link>
      </Description>
      <Image>
        <motion.img
          src={home1}
          alt="guy with a camera"
          className="AboutSection__Image"
          variants={zoomInOut}
        />
      </Image>
    </BasicSection>
  );
};
export default AboutSection;
