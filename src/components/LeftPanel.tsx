import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
export function LeftPanel() {
  return <div className='panel-one'>
    <NameContainer
      name="Corey Mann"
      title="SENIOR SOFTWARE ENGINEER"
    />

    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <h3>Skills</h3>
      <Indicator title="Front End Development" percent={90} />
      <Indicator title="Back End Development" percent={80} />
      <Indicator title="Mobile Development" percent={70} />
      <Indicator title="Database Management" percent={80} />
      <Indicator title="Effective Time Management" percent={90} />
      <Indicator title="Collaboration Tools - Jira, Confluence" percent={100} />
      <Indicator title="Code Reviews" percent={100} />

      <h4>Languages</h4>
      <Indicator title="ReactJS / React Native / NextJS" percent={75} />
      <Indicator title="Golang" percent={75} />
      <Indicator title="Python" percent={60} />
      <Indicator title="NodeJS, Typescript, ExpressJS" percent={90} />
      <Indicator title="MongoDB, Postgres, MySQL" percent={90} />
    </div>
  </div>
}


function NameContainer({ name, title }: { name: string, title: string }) {
  return <div id="name-container">
    <h1 id="name">{name}</h1>
    <p>{title}</p>
    <Links />
  </div>
}


function Indicator({ title, percent }: { title: string, percent: number }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '10px' }}>
      <div style={{ fontSize: '16px', fontWeight: '500' }}>{title}</div>
      <div style={{ width: '100%', height: '4px', backgroundColor: '#ccc', borderRadius: '5px', marginTop: '5px' }}>
        <div style={{ height: '100%', borderRadius: '5px', backgroundColor: '#4caf50', width: `${percent}%` }} />
      </div>
    </div>
  );
}

function Links() {
  return <div style={{ display: 'flex', gap: 12 }}>
    <a href="tel:615-852-8091">
      <FontAwesomeIcon icon={faPhone} color="white" size='1x' />
    </a>
    <a href="mailto:friendlytechs+resume@gmail.com">
      <FontAwesomeIcon icon={faEnvelope} color="white" size='1x' />
    </a>
    <a href="https://www.linkedin.com/in/comann2" target='_blank' rel="noreferrer">
      <FontAwesomeIcon icon={faLinkedin} color="white" size='1x' />
    </a>
    <a href="https://github.com/comann" target="_blank" rel="noreferrer">
      <FontAwesomeIcon icon={faGithub} color="white" size='1x' />
    </a>
  </div>
}