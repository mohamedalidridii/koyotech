import React from "react";
import { ReactComponent as RightArrow } from "../assets/arrow-right.svg";

const Banner = () => {
  return (
    <section className='main'>
      <div className='container'>
        <div className='row'>
          <h1>
            <div className='line'>
              <span>Digital Agency,</span>
            </div>
            <div className='line'>
              <span>based in Tunisia.</span>
            </div>
          </h1>
          <div className='btn-row'>
            <a href='/about-us'>
              More about us <RightArrow />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
