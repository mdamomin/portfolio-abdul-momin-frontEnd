import React from 'react';
import { Button } from 'react-bootstrap';
import './Buttons.css';

const Buttons = () => {
  return (
    <div className='special_btn d-flex justify-content-around justify-content-sm-center'>
      <a href='Resume_MD-ABDUL-MOMIN.pdf' download='Resume_MD-ABDUL-MOMIN.pdf'>
        {' '}
        <Button variant='outline-warning' className='resume_btn'>
          GET RESUME
        </Button>
      </a>

      <a href='#contact'>
        <Button variant='warning' className='hireMe_btn'>
          HIRE ME
        </Button>
      </a>
    </div>
  );
};

export default Buttons;
