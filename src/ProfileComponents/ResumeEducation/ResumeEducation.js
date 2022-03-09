import React from 'react';
import './ResumeEducation.css';

const ResumeEducation = () => {
  return (
    <div className='resume-screen-container h-100'>
      <div className='resume-heading'>
        <div className='resume-main-heading'>
          <div className='heading-bullet'></div>
          <div className='d-md-flex justify-content-md-between w-100'>
            <span>Bachelor Of Engineering</span>
            <div className='heading-date'>2009-2013</div>
          </div>
        </div>
        <div className='resume-sub-heading'>
          <h6>RAJSHAHI UNIVERSITY OF ENGINEERING AND TECHNOLOGY, BANGLADESH</h6>
        </div>
        <div className='resume-heading-description'>
          <span></span>
        </div>
      </div>
      <div className='resume-heading'>
        <div className='resume-main-heading'>
          <div className='heading-bullet'></div>
          <div className='d-md-flex justify-content-md-between w-100'>
            <span>MERN Development Bootcamp Training</span>
            <div className='heading-date'>2019-2020</div>
          </div>
        </div>
        <div className='resume-sub-heading'>
          <h6>PROGRAMMING HERO TRAINING CENTRE</h6>
        </div>
        <div className='resume-heading-description'>
          <span></span>
        </div>
      </div>
      <div className='resume-heading'>
        <div className='resume-main-heading'>
          <div className='heading-bullet'></div>
          <div className='d-md-flex justify-content-md-between w-100'>
            <span>Higher Secondary School Certificate</span>
            <div className='heading-date'>2006-2008</div>
          </div>
        </div>
        <div className='resume-sub-heading'>
          <h6>NEW GOVERNMENT DEGREE COLLEGE, BANGLADESH</h6>
        </div>
        <div className='resume-heading-description'>
          <span></span>
        </div>
      </div>
    </div>
  );
};

export default ResumeEducation;
