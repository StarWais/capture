import React from "react";
import clock from "../img/clock.svg";
import money from "../img/money.svg";
import teamwork from "../img/teamwork.svg";
import diaphragm from "../img/diaphragm.svg";
import home2 from "../img/home2.png";
import { BasicSection, Description, Image } from "../styles/BasicStyles";
import styled from "styled-components";
const ServicesSection = () => {
  return (
    <Services>
      <Description>
        <h2 children="Services__Title">
          High <span>quality</span> service.
        </h2>
        <Cards>
          <Card>
            <div className="ServicesCard__Icon">
              <img src={clock} alt="clock" className="ServicesCard__Image" />
              <h3 className="ServicesCard__Title">Efficent</h3>
            </div>
            <p className="ServicesCard__Text">Lorem ipsum dolor sit amet.</p>
          </Card>
          <Card>
            <div className="ServicesCard__Icon">
              <img src={money} alt="money" className="ServicesCard__Image" />
              <h3 className="ServicesCard__Title">Affordable</h3>
            </div>

            <p className="ServicesCard__Text">Lorem ipsum dolor sit amet.</p>
          </Card>
          <Card>
            <div className="ServicesCard__Icon">
              <img
                src={diaphragm}
                alt="diaphragm"
                className="ServicesCard__Image"
              />
              <h3 className="ServicesCard__Title">Pro Grade Gear</h3>
            </div>
            <p className="ServicesCard__Text">Lorem ipsum dolor sit amet.</p>
          </Card>
          <Card>
            <div className="ServicesCard__Icon">
              <img src={teamwork} alt="teams" className="ServicesCard__Image" />
              <h3 className="ServicesCard__Title">Teamwork</h3>
            </div>
            <p className="ServicesCard__Text">Lorem ipsum dolor sit amet.</p>
          </Card>
        </Cards>
      </Description>
      <Image>
        <img src={home2} alt="servicespic" className="Services__Image" />
      </Image>
    </Services>
  );
};
const Services = styled(BasicSection)`
  h2 {
    padding-bottom: 5rem;
  }
  p {
    width: 70%;
    padding: 2rem 0 2rem 0;
  }
`;

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Card = styled.div`
  flex-basis: 16rem;
  .ServicesCard__Icon {
    display: flex;
    align-items: center;
  }
  h3 {
    margin-left: 1rem;
    background: white;
    color: black;
    padding: 1rem;
  }
`;
export default ServicesSection;
