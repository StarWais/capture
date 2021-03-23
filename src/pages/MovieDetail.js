import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { MovieState } from "../MovieState";

function MovieDetail() {
  const path = useHistory().location.pathname;
  const currentMovie = MovieState().filter((movie) => movie.url === path)[0];
  return (
    <Details>
      <Headline>
        <h2>{currentMovie.title}</h2>
        <img src={currentMovie.mainImg} alt={currentMovie.title} />
      </Headline>
      <Awards>
        {currentMovie.awards.map((award) => (
          <Award
            title={award.title}
            description={award.description}
            secondaryImg={currentMovie.secondaryImg}
          ></Award>
        ))}
      </Awards>
      <SecImage>
        <img src={currentMovie.secondaryImg} alt="sec" />
      </SecImage>
    </Details>
  );
}
const Details = styled.div`
  color: white;
`;
const Awards = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  min-height: 80vh;
  margin: 5rem 10rem;
`;
const Award = ({ title, description, secondaryImg }) => {
  return (
    <StyledAward>
      <h3>{title}</h3>
      <div className="line"></div>
      <p>{description}</p>
    </StyledAward>
  );
};
const Headline = styled.div`
  min-height: 90vh;
  position: relative;
  padding-top: 20vh;
  h2 {
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%, -10%);
  }
  img {
    height: 70vh;
    width: 100%;
    object-fit: cover;
  }
`;
const SecImage = styled.div`
  min-height: 50vh;
  img {
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }
`;
const StyledAward = styled.div`
  padding: 4rem;
  h3 {
    font-size: 1.5rem;
    height: 82px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
  .line {
    background: #23d997;
    width: 100%;
    height: 0.5rem;
    margin: 1rem 0rem;
  }
  p {
    font-size: 1rem;
    padding: 2rem 0rem;
  }
`;
export default MovieDetail;
