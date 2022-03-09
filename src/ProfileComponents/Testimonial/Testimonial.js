import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import SingleTestimonial from '../SingleTestimonial/SingleTestimonial';
import './Testimonial.css';

const Testimonial = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
      slidesToSlide: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 576 },
      items: 2,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 576, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };
  const testimonialData = [
    {
      id: 1,
      name: 'Md Kawsarul Islam',
      img: 'https://i.ibb.co/88QRcRh/kawser.jpg',
      designation: 'Tech. Support Eng.',
      organization: 'Sitel',
      comment:
        'Md Abdul Momin is always the first person to sign up for new training and development courses.',
    },
    {
      id: 2,
      name: 'Md kafil uddin',
      img: 'https://i.ibb.co/Yyxf2Y0/kafil.jpg',
      designation: 'IT Specialist',
      organization: 'SaskPower',
      comment:
        'Abdul Momin is able to complete urgent tasks with the same high-quality and detail that I often saw from his regular duties',
    },
    {
      id: 3,
      name: 'MD JAKARIA',
      img: 'https://i.ibb.co/SPQdcZH/jakir.jpg',
      designation: 'CEO',
      organization: 'SUN IT LIMITED',
      comment:
        'Abdul consistently hands in work to agreed deadlines, which helps to keep the entire department on schedule',
    },
    {
      id: 4,
      name: 'Mahmud Siddiqui',
      img: 'https://i.ibb.co/cCt11P9/mahmood.jpg',
      designation: 'Team Lead',
      organization: 'CentriLogic Inc.',
      comment:
        'Abdul performed well under pressure, and he calmed during stressful situations helped all of us to perform better.',
    },
  ];
  return (
    <div className='mt-5 testimonial_container' id='testimonial'>
      <div className='heading-container mb-5 text-center'>
        <div className='screen-heading'>
          <span>Testimonial</span>
        </div>
        <div className='screen-sub-heading'>
          <span>What My Client Say About Me</span>
        </div>
        <div className='d-flex align-items-center justify-content-center'>
          <div className='seperator-line'></div>
          <div className='seperator-blob d-flex justify-content-center'>
            <div></div>
          </div>
        </div>
      </div>
      <div className='testimonial_carousel_container'>
        <div className='testimonial_carousel'></div>

        <div className='testi_content d-flex justify-content-center'>
          <Carousel
            className='d-flex align-items-center h-100 w-75'
            removeArrowOnDeviceType={[
              'tablet',
              'mobile',
              'desktop',
              'superLargeDesktop',
            ]}
            responsive={responsive}
            autoPlay={true}
            infinite={true}
            showDots={false}
            autoPlaySpeed={1000}
            keyBoardControl={false}
            transitionDuration={2000}
            swipeable={true}
            draggable={false}
          >
            {testimonialData.map((testimonial) => (
              <SingleTestimonial
                key={testimonial.id}
                testimonial={testimonial}
              ></SingleTestimonial>
            ))}
          </Carousel>
        </div>
      </div>
      <svg
        className='wave'
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

export default Testimonial;
