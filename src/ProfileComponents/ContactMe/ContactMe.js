import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import './ContactMe.css';
import img_contact from '../../images/mailz.jpeg';
import { useState } from 'react';

const ContactMe = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [textMessage, setTextMessage] = useState('');
  const [alertMsg, setAlertMsg] = useState('');
  const message = { name, email, subject, textMessage };

  const handleContact = (e) => {
    fetch('https://agile-escarpment-80813.herokuapp.com/nodemail', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(message),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data === 'success') {
          setAlertMsg(
            <h5 className='alert alert-primary' role='alert'>
              Email sent successfully!
            </h5>
          );
          document.getElementById('name').value = '';
          document.getElementById('email').value = '';
          document.getElementById('subject').value = '';
          document.getElementById('textarea').value = '';
        } else {
          setAlertMsg(
            <h5 className='alert alert-danger' role='alert'>
              Something went wrong!
            </h5>
          );
        }
      });

    e.preventDefault();
  };
  return (
    <div className='text-center my-5' id='contact'>
      <div className='heading-container mb-5'>
        <div className='screen-heading'>
          <span>Contact Me</span>
        </div>
        <div className='screen-sub-heading'>
          <span>Lets Keep In Touch</span>
        </div>
        <div className='d-flex align-items-center justify-content-center'>
          <div className='seperator-line'></div>
          <div className='seperator-blob d-flex justify-content-center'>
            <div></div>
          </div>
        </div>
      </div>
      <Container className='contact_container p-5'>
        <div className='contact_top d-flex flex-column align-items-start'>
          <h3 className='text-white'>Get In Touch</h3>
          <div className='social-icons'>
            <ul className='p-0 m-0'>
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
        </div>
        <Row className='contact_content'>
          <Col
            xs={12}
            sm={6}
            className='d-flex flex-column justify-content-center'
          >
            <h4 className='send_email_text'>Send Your Email Here!</h4>
            <img className='img-fluid' src={img_contact} alt='' />
          </Col>
          <Col
            xs={12}
            sm={6}
            className='ps-sm-5 mb-5 pt-5 d-flex flex-column justify-content-center'
          >
            <Form onSubmit={handleContact} className='text-white text-start'>
              <Form.Group className='mb-3'>
                <Form.Label>Name</Form.Label>
                <Form.Control
                  id='name'
                  onBlur={(e) => {
                    setName(e.target.value);
                  }}
                  type='name'
                  placeholder='Your Name'
                />
              </Form.Group>
              <Form.Group className='mb-3'>
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  id='email'
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  type='email'
                  placeholder='name@example.com'
                />
              </Form.Group>
              <Form.Group className='mb-3'>
                <Form.Label>Subject</Form.Label>
                <Form.Control
                  id='subject'
                  onBlur={(e) => {
                    setSubject(e.target.value);
                  }}
                  type='subject'
                  placeholder='Subject'
                />
              </Form.Group>
              <Form.Group className='mb-3'>
                <Form.Label>Message</Form.Label>
                <Form.Control
                  id='textarea'
                  onBlur={(e) => {
                    setTextMessage(e.target.value);
                  }}
                  as='textarea'
                  rows={3}
                />
              </Form.Group>
              {alertMsg}
              <Button variant='primary' type='submit'>
                Send
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ContactMe;
