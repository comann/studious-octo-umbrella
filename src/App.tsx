import React from 'react';
import { ProfessionalSummary } from './components/ProfessionalSummary';
import { EmploymentHistory } from './components/EmploymentHistory';
import { Education } from './components/Education';
import { LeftPanel } from './components/LeftPanel';

function App() {
  return (

    <div className='feed'>
      <LeftPanel />
      <div className='panel-content'>
        <ProfessionalSummary />
        <EmploymentHistory />
        <Education />
      </div>
    </div>
  );
}

export default App;
