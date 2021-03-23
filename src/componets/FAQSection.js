import React from "react";
import styled from "styled-components";
import { BasicSection } from "../styles/BasicStyles";
const FAQSection = () => {
  return (
    <FAQ>
      <h2 className="FAQ__Title">
        Any question <span>FAQ</span>
      </h2>
      <div className="FAQQuestion">
        <h4 className="FAQQuestion__Question">How do I Start</h4>
        <div className="FAQ_Answer">
          <p className="FAQAnswer__Answer">Lorem ipsum dolor sit amet.</p>
          <p className="FAQAnswer__Answer">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta,
            odio.
          </p>
        </div>
        <div className="FAQ__Line"></div>
      </div>
      <div className="FAQQuestion">
        <h4 className="FAQQuestion__Question">Daily Schedule</h4>
        <div className="FAQ_Answer">
          <p className="FAQAnswer__Answer">Lorem ipsum dolor sit amet.</p>
          <p className="FAQAnswer__Answer">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta,
            odio.
          </p>
        </div>
        <div className="FAQ__Line"></div>
      </div>
      <div className="FAQQuestion">
        <h4 className="FAQQuestion__Question">What Products Do You Offer ?</h4>
        <div className="FAQ_Answer">
          <p className="FAQAnswer__Answer">Lorem ipsum dolor sit amet.</p>
          <p className="FAQAnswer__Answer">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta,
            odio.
          </p>
        </div>
        <div className="FAQ__Line"></div>
      </div>
    </FAQ>
  );
};
const FAQ = styled(BasicSection)`
  display: block;
  span {
    display: block;
  }
  .FAQ__Title {
    padding-bottom: 2rem;
    font-size: lighter;
  }
  .FAQ__Line {
    background: #cccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }
  .FAQ__Question {
    padding: 3rem 0rem;
    cursor: pointer;
  }
  .FAQAnswer {
    padding: 2rem 0rem;
    &__Answer {
      padding: 1rem 0rem;
    }
  }
`;
export default FAQSection;
