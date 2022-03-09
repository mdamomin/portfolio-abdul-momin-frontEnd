import React from 'react';
import './ResumeProjects.css';

const ResumeProjects = () => {
  return (
    <div className='resume-screen-container h-100'>
      <div className='resume-heading'>
        <div className='resume-main-heading'>
          <div className='heading-bullet'></div>
          <span>Personal Portfolio Website</span>
          <div className='heading-date'>2020-2021</div>
        </div>
        <div className='resume-sub-heading'>
          <p className='m-0'>Technologies Used: React JS,Node.js, Bootsrap</p>
        </div>
        <div className='resume-heading-description'>
          <p>
            A Personal Portfolio website to showcase all my details and projects
            at one place.
          </p>
        </div>
      </div>
      <div className='resume-heading'>
        <div className='resume-main-heading'>
          <div className='heading-bullet'></div>
          <span>Mobile E-shop </span>
          <div className='heading-date'>2020-2021</div>
        </div>
        <div className='resume-sub-heading'>
          <p className='m-0'>
            Technologies Used: React Native, Mongo DB, Express Js, Node Js.
          </p>
        </div>
        <div className='resume-heading-description'>
          <p>
            An ecommerce application designed to sell products online wth
            payment system integration
          </p>
        </div>
      </div>
      <div className='resume-heading'>
        <div className='resume-main-heading'>
          <div className='heading-bullet'></div>
          <span>Ecommerce Website </span>
          <div className='heading-date'>2020-2021</div>
        </div>
        <div className='resume-sub-heading'>
          <p className='m-0'>
            Technologies Used: Mongo DB, Epress Js, React Js, Node JS,
            Bootstrap.
          </p>
        </div>
        <div className='resume-heading-description'>
          <p>
            Online ecommerce website for showcasing and selling products onlne
            with payment system integration, both Paypal and Stripe
          </p>
        </div>
      </div>
    </div>
  );
};

export default ResumeProjects;
