import React, { useEffect, useState } from 'react';
import './ScrollToTop.css';

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 150) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    });
  }, []);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <>
      {visible && (
        <div className='scroll-container' onClick={scrollTop}>
          <button className='btn-scroll'>
            {' '}
            <i className='bi bi-arrow-up'></i>
          </button>
        </div>
      )}
    </>
  );
};

export default ScrollToTop;
