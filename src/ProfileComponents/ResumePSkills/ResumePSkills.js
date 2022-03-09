import React from 'react';
import { Col, Container, ProgressBar, Row } from 'react-bootstrap';
import './ResumePSkills.css';

const ResumePSkills = () => {
  const HTML = 90;
  const CSS = 85;
  const BOOTSTRAP = 85;
  const JS = 80;
  const REACT = 85;
  const MONGO_DB = 75;
  const NODE_JS = 70;
  const EXPRESS_JS = 70;
  return (
    <Container className='h-100'>
      <Row className='h-100 gx-5'>
        <Col
          xs={12}
          md={6}
          className='d-flex flex-column justify-content-evenly pe-md-5'
        >
          <div className='skill-parent'>
            <div className='heading-bullet'></div>
            <h5>HTML</h5>
            <div className='skill-percentage'>
              <ProgressBar animated now={HTML} label={`${HTML}%`} />
            </div>
          </div>
          <div className='skill-parent'>
            <div className='heading-bullet'></div>
            <h5>CSS</h5>
            <div className='skill-percentage'>
              <ProgressBar animated now={CSS} label={`${CSS}%`} />
            </div>
          </div>
          <div className='skill-parent'>
            <div className='heading-bullet'></div>
            <h5>BOOTSTRAP</h5>
            <div className='skill-percentage'>
              <ProgressBar animated now={BOOTSTRAP} label={`${BOOTSTRAP}%`} />
            </div>
          </div>
          <div className='skill-parent'>
            <div className='heading-bullet'></div>
            <h5>JavaScript</h5>
            <div className='skill-percentage'>
              <ProgressBar animated now={JS} label={`${JS}%`} />
            </div>
          </div>
        </Col>
        <Col
          xs={12}
          md={6}
          className='d-flex flex-column justify-content-evenly ps-md-5'
        >
          <div className='skill-parent'>
            <div className='heading-bullet'></div>
            <h5>REACT JS</h5>
            <div className='skill-percentage'>
              <ProgressBar animated now={REACT} label={`${REACT}%`} />
            </div>
          </div>
          <div className='skill-parent'>
            <div className='heading-bullet'></div>
            <h5>Mongo DB</h5>
            <div className='skill-percentage'>
              <ProgressBar animated now={MONGO_DB} label={`${MONGO_DB}%`} />
            </div>
          </div>
          <div className='skill-parent'>
            <div className='heading-bullet'></div>
            <h5>NODE JS</h5>
            <div className='skill-percentage'>
              <ProgressBar animated now={NODE_JS} label={`${NODE_JS}%`} />
            </div>
          </div>
          <div className='skill-parent'>
            <div className='heading-bullet'></div>
            <h5>EXPRESS JS</h5>
            <div className='skill-percentage'>
              <ProgressBar animated now={EXPRESS_JS} label={`${EXPRESS_JS}%`} />
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ResumePSkills;
