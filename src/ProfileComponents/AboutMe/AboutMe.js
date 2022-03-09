import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Buttons from '../Buttons/Buttons';
import './AboutMe.css';

const AboutMe = () => {
  return (
    <div className='About_me  mt-2 mt-sm-0 text-center' id='about'>
      <div className='heading-container mb-5'>
        <div className='screen-heading'>
          <span>About Me</span>
        </div>
        <div className='screen-sub-heading'>
          <span>Why Choose Me?</span>
        </div>
        <div className='d-flex align-items-center justify-content-center'>
          <div className='seperator-line'></div>
          <div className='seperator-blob d-flex justify-content-center'>
            <div></div>
          </div>
        </div>
      </div>
      <Container className='d-flex justify-content-center'>
        <Row className='About_me_content w-75'>
          <Col
            md={6}
            className='d-none d-sm-none d-md-block d-lg-block d-xl-block d-xxl-block about_img'
          ></Col>
          <Col xs={12} md={6} className='ps-sm-5 mb-5 pt-5'>
            <div className='about-me-details text-start text-secondary'>
              <h6>
                Front End developer with background knowledge of MERN stacks
                with web services like REST, JSON, along with a knack of
                building applications with utmost efficiency. Strong
                professional with a BSC willing to be an asset for an
                organization.
              </h6>
            </div>
            <div className='about-me-highlights text-start text-secondary my-5'>
              <div>
                <h4>Here are a Few Highlights:</h4>
              </div>
              <div className='d-flex align-items-center'>
                <div className='highlight-blob'></div>
                <span>MERN development</span>
              </div>
              <div className='d-flex align-items-center'>
                <div className='highlight-blob'></div>
                <span>Interactive Front End as per the design</span>
              </div>
              <div className='d-flex align-items-center'>
                <div className='highlight-blob'></div>
                <span>React and React Native</span>
              </div>
              <div className='d-flex align-items-center'>
                <div className='highlight-blob'></div>
                <span>Handle web service like JSON, CONTEXT </span>
              </div>
              <div className='d-flex align-items-center'>
                <div className='highlight-blob'></div>
                <span>Building REST API</span>
              </div>
              <div className='d-flex align-items-center'>
                <div className='highlight-blob'></div>
                <span>Managing database like MongoDB</span>
              </div>
            </div>
            <Buttons></Buttons>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AboutMe;
