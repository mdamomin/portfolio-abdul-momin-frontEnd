import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './TopBanner.css';
import Typewriter from 'typewriter-effect';
import portfolio_img from '../../images/MD_ABDUL_MOMIN.jpg';
import Buttons from '../Buttons/Buttons';

const TopBanner = () => {
  return (
    <div className='top_banner mt-3 text-center' id='home'>
      <Container>
        <Row>
          <Col xs={12} md={7} className='py-5 top_left'>
            <div className='social-icons'>
              <ul>
                <li>
                  <a href='https://www.facebook.com/MdAbdulMomin19/'>
                    <i className='bi bi-facebook'></i>
                  </a>
                </li>
                <li>
                  <a href='https://twitter.com/MD_ABDUL_MOMIN_'>
                    <i className='bi bi-twitter'></i>
                  </a>
                </li>
                <li>
                  <a href='https://www.linkedin.com/in/md-abdul-momin-b278851b0/'>
                    <i className='bi bi-linkedin'></i>
                  </a>
                </li>
              </ul>
            </div>
            <h4>
              Hello, I'M <span className='profile_name'>MD ABDUL MOMIN</span>
            </h4>
            <Typewriter
              options={{
                strings: [
                  '<h2>React Developer <i class="bi bi-globe"></i></h2>',
                  '<h2>MERN Stack Developer <i class="bi bi-laptop"></i></h2>',
                  '<h2>Front End Developer <i class="bi bi-phone"></i></h2>',
                ],
                autoStart: true,
                loop: true,
                wrapperClassName: 'Typewriter__wrapper',
                cursorClassName: 'Typewriter__cursor',
              }}
            ></Typewriter>
            <h5 className='py-3'>
              Knack of building applications with front and back end operations.
            </h5>
            <Buttons></Buttons>
          </Col>
          <Col
            xs={12}
            md={5}
            className='py-5 d-flex justify-content-center align-items-center top_right'
          >
            <div className='top_banner_img d-flex justify-content-center align-items-center'>
              <img className='img-fluid' src={portfolio_img} alt='' />
            </div>
          </Col>
        </Row>
      </Container>
      <svg
        className='top_wave'
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 1440 320'
      >
        <path
          fill='#ffffff'
          fillOpacity='1'
          d='M0,224L80,213.3C160,203,320,181,480,192C640,203,800,245,960,234.7C1120,224,1280,160,1360,128L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z'
        ></path>
      </svg>
    </div>
  );
};

export default TopBanner;
