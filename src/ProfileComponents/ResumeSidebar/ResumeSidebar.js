import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './ResumeSidebar.css';

import { FaUserGraduate } from 'react-icons/fa';
import { FaHistory } from 'react-icons/fa';
import { FaLaptop } from 'react-icons/fa';
import { AiOutlineBarChart } from 'react-icons/ai';
import { BsPalette } from 'react-icons/bs';

const ResumeSidebar = () => {
  const dataTabs = [
    {
      id: 1,
      tabTitle: 'Education',
      path: '/',
      logo: <FaUserGraduate />,
    },
    {
      id: 2,
      tabTitle: 'Work History',
      path: '/WorkHistory',
      logo: <FaHistory />,
    },
    {
      id: 3,
      tabTitle: 'Programming Skills',
      path: '/PSkills',
      logo: <FaLaptop />,
    },
    {
      id: 4,
      tabTitle: 'Projects',
      path: '/Projects',
      logo: <AiOutlineBarChart />,
    },
    {
      id: 5,
      tabTitle: 'Interests',
      path: '/Interests',
      logo: <BsPalette />,
    },
  ];

  const location = useLocation();

  return (
    <div className='resume-bullets'>
      <div className='bullet-container'>
        <div className='bullet-icons'></div>
        <div className='bullets'>
          {dataTabs.map((datatab) => {
            return (
              <Link
                key={datatab.id}
                to={datatab.path}
                className={
                  datatab.path === location.pathname
                    ? 'bullet selected-bullet'
                    : 'bullet'
                }
              >
                <span
                  className={
                    datatab.path === location.pathname
                      ? 'bullet-label bullet-label-selected'
                      : 'bullet-label'
                  }
                >
                  <span className='bullet-logo'>{datatab.logo}</span>
                  {datatab.tabTitle}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ResumeSidebar;
