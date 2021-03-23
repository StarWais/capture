import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { MovieState } from "../MovieState";
import { motion } from "framer-motion";
import { PageWorkAnimation } from "../Animations";

function OurWork() {
  return (
    <Work
      variants={PageWorkAnimation}
      initial="hidden"
      animate="show"
      className="AboutUs"
    >
      {MovieState().map((item) => (
        <Movie key={uuidv4()}>
          <h2>{item.title}</h2>
          <div className="line"></div>
          <Link to={item.url}>
            <img src={item.mainImg} alt={item.title} />
          </Link>
        </Movie>
      ))}
    </Work>
  );
}
const Work = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;
  h2 {
    padding: 1rem 0rem;
  }
`;
const Movie = styled.div`
  padding-bottom: 10rem;
  .line {
    height: 0.5rem;
    background: #cccc;
    margin-bottom: 3rem;
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;
export default OurWork;
