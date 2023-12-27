import React from 'react';
import { ProfessionalSummary } from './components/ProfessionalSummary';
import { EmploymentHistory } from './components/EmploymentHistory';
import { Education } from './components/Education';

function App() {
  return (

    <div className='feed'>
      <div className='panel-one'>
        <p>Profile</p>
      </div>
      <div className='panel-content'>
        <ProfessionalSummary />
        <EmploymentHistory />
        <Education />
      </div>
    </div>
  );
}

export default App;
