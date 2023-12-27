import * as React from 'react'
import { Header, Timeline } from '../Header'

export function EmploymentHistory() {
  return <div style={{ paddingLeft: '2.5%', paddingRight: '2.5%' }}>
    <Header text='Employment History' />
    <Variable />
    <Transcard />
    <Tricycle />
  </div>
}



function Transcard() {
  return <div >
    <h4>Database Intern, Transcard</h4>
    <Timeline text='05/2011 - 06/2012' />
    <p>In a dynamic role, I managed a helpdesk, serving as a crucial link between developers and account managers. Interacted with data layer through MSSQL database, handling database maintenance and implementing stored procedures. I constructed customized reports, enhancing data analysis and decision-making processes.</p>
  </div>
}

function Tricycle() {
  return <div >
    <h4>Database and Reporting Specialist, Tricycle</h4>
    <Timeline text='12/2010 - 04/2011' />
    <p>I collaborated on C# application development, making significant contributions to data mining and intelligence activities by designing and implementing an intuitive SSRS client interface. Additionally, I successfully managed government grant-funded initia- tives, showcasing my efficiency in executing multiple projects within tight timelines.</p>

  </div>
}
function Variable() {
  return <section>
    <h4>Senior Software Developer, Variable, Inc</h4>
    <Timeline text='06/2012 - Present' />

    <ul>
      <li>Spearheaded the development of customer-facing flows, utilizing Java (Android), React Native, React, Nodejs, Express, and GOlang to solve complex customer experience problems and deliver high-quality code.</li>
      <li>Collaborate closely with other team members to design frameworks, components, and services that power the Color Muse app and other cross-platform projects.</li>
      <li>Implement A/B testing platforms for delivering new features and optimizing existing ones to improve the overall customer experience.</li>
      <li>Demonstrate expertise in Bluetooth 2.1, 4.1+, 5.0, and LE communications, applying this knowledge to enhance the functionality of Variable's products.</li>
      <li>Play a key role in designing, documenting, and maintaining backend services supporting the Variable Cloud product management system, facilitating authentication and online color matching.</li>
      <li>Develop and maintain multiple Standard Development Kits (SDKs) for corporate developers, enabling integrated solutions for color sensor hardware products. These SDKs are tailored for 3rd party consumption, promoting seamless integration with Variable's technology.</li>
      <li>Monitor platform availability and stability and effectively triage incidents and outages.</li>
      <li>Write tests for new features, improve coverage for existing ones, and participate in code reviews.</li>
    </ul>
  </section>
}