import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';
import { FaQuoteRight } from 'react-icons/fa';

const SingleTestimonial = ({ testimonial }) => {
  const { name, img, designation, organization, comment } = testimonial;
  return (
    <div className='testi-item'>
      <div className='testi-comment'>
        <p>
          <FaQuoteLeft className='quote' />
          {comment}
          <FaQuoteRight className='quote' />
        </p>
      </div>
      <div className='client-info d-flex align-items-center'>
        <img src={img} alt='' />
        <div>
          <h5 className='mb-0 ms-2'>{name}</h5>
          <p className='mb-0 ms-2'>
            {designation}-{organization}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingleTestimonial;
