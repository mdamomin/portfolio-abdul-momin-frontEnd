import React from 'react';

const ResumeWorkHistory = () => {
  return (
    <div className='resume-screen-container h-100'>
      <div className='experience-container'>
        <div className='resume-heading'>
          <div className='resume-main-heading'>
            <div className='heading-bullet'></div>
            <span>SUN IT LIMITED</span>
            <div className='heading-date'>2021-Present</div>
          </div>
          <div className='resume-sub-heading'>
            <h5>FRONT END DEVELOPER</h5>
          </div>
          <div className='resume-heading-description'>
            <span></span>
          </div>
        </div>
        <div className='experience-description'>
          <span className='resume-description-text'>
            Currently working as Front end web and mobile developer.
          </span>
        </div>
        <div className='experience-description'>
          <span className='resume-description-text'>
            - Developed an Hospital/clinic website for client with the dashboard
            for managing the services,Doctor's appointment, managing reviews,
            pathology services, payment etc. .
          </span>
          <br />
          <span className='resume-description-text'>
            - Integrated the web app with backend services to create new user
            onboarding application with dynamic form content.{' '}
          </span>
          <br />
          <span className='resume-description-text'>
            - I stretch my mental capacity to develope UI as per the given
            designs.
          </span>
          <br />
        </div>
      </div>
    </div>
  );
};

export default ResumeWorkHistory;
