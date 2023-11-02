import React, { useState } from 'react';
import Topbar from './Topbar';
import Footer from './Footer';
import './css/Study.css';
import StudyForm from '../component/StudyForm';
import StudyList from '../dummy/StudyList';

const Study = () => {
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <div>
      <Topbar fixed="top" />
      <div className='StudyContent'>
        <button className='createStudy' onClick={toggleForm}>
          + 스터디 만들기
        </button>
        <div className='StudyForm' style={{ display: showForm ? 'block' : 'none' }}>
          <StudyForm />
        </div>
        <div className='StudyList'>
            <StudyList />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Study;
