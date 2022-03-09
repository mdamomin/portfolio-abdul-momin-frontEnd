import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Route, Switch } from 'react-router-dom';
import ResumeEducation from '../ResumeEducation/ResumeEducation';
import ResumeInterests from '../ResumeInterests/ResumeInterests';
import ResumeProjects from '../ResumeProjects/ResumeProjects';
import ResumePSkills from '../ResumePSkills/ResumePSkills';
import ResumeSidebar from '../ResumeSidebar/ResumeSidebar';
import ResumeWorkHistory from '../ResumeWorkHistory/ResumeWorkHistory';
import './Resume.css';

const Resume = () => {
  return (
    <Container className='mt-5' id='resume'>
      <Row>
        <div className='heading-container mb-5 text-center'>
          <div className='screen-heading'>
            <span>Resume</span>
          </div>
          <div className='screen-sub-heading'>
            <span>My Formal Bio Details</span>
          </div>
          <div className='d-flex align-items-center justify-content-center'>
            <div className='seperator-line'></div>
            <div className='seperator-blob d-flex justify-content-center'>
              <div></div>
            </div>
          </div>
        </div>
        <Col md={12} lg={5} className='pb-4'>
          <ResumeSidebar></ResumeSidebar>
        </Col>
        <Col md={12} lg={7} className='px-md-5'>
          <Switch>
            <Route exact path='/'>
              <ResumeEducation></ResumeEducation>
            </Route>
            <Route path='/WorkHistory'>
              <ResumeWorkHistory></ResumeWorkHistory>
            </Route>
            <Route path='/PSkills'>
              <ResumePSkills></ResumePSkills>
            </Route>
            <Route path='/Projects'>
              <ResumeProjects></ResumeProjects>
            </Route>
            <Route path='/Interests'>
              <ResumeInterests></ResumeInterests>
            </Route>
          </Switch>
        </Col>
      </Row>
    </Container>
  );
};

export default Resume;
