import React, { useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Navigation.css';

const NavigationBar = () => {
  const [navBg, setNavBg] = useState(false);
  const navBgChange = () => {
    if (window.scrollY >= 30) {
      setNavBg(true);
    } else {
      setNavBg(false);
    }
  };
  window.addEventListener('scroll', navBgChange);
  return (
    <Navbar
      collapseOnSelect
      expand='lg'
      variant='dark'
      className={
        navBg ? 'fixed-top navbar_section_scrolled' : 'navbar_section fixed-top'
      }
    >
      <Container>
        <Navbar.Brand href='#home'>MOMIN</Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='ms-auto'>
            <Nav.Link className='margin-right' href='#home'>
              HOME
            </Nav.Link>
            <Nav.Link className='margin-right' href='#about'>
              ABOUT ME
            </Nav.Link>
            <Nav.Link className='margin-right' href='#resume'>
              RESUME
            </Nav.Link>
            <Nav.Link className='margin-right' href='#testimonial'>
              TESTIMONIAL
            </Nav.Link>
            <Nav.Link className='margin-right' href='#contact'>
              CONTACT ME
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
