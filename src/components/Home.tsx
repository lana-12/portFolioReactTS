import React, { useState } from 'react';
import About from './About';
import Project from './Project';
import Contact from './Contact';
import Training from './Training';
import CustomOffcanvas from './utils/CustomOffcanvas';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

const Home = () => {
  const [showAbout, setShowAbout] = useState(false);
  const [showProject, setShowProject] = useState(false);
  const [showTraining, setShowTraining] = useState(false);
  const [showContact, setShowContact] = useState(false);

  const handleCloseAbout = () => setShowAbout(false);
  const handleCloseProject = () => setShowProject(false);
  const handleCloseTraining = () => setShowTraining(false);
  const handleCloseContact = () => setShowContact(false);


  
  return (
    <>

      <section className='border border-success my-3 imgCV' id="accueil">
        
      </section>
      <section id='about' className='border border-success my-3' >
        <div className="d-grid gap-2">
          <Button 
            variant="secondary" 
            size="lg" 
            onClick={() => setShowAbout(true)}>Qui suis-je ?
          </Button>
          <CustomOffcanvas 
            title="Qui suis-je ?" 
            content={<About />} 
            show={showAbout} 
            handleClose={handleCloseAbout} 
          />
        </div>
      </section>

      <section className='border border-primary' >
        <div className="d-grid gap-2">
          <Button 
            variant="secondary" 
            size="lg" className="" 
            onClick={() => setShowProject(true)} >
              <a href="#project" style={{ color: 'white' }}>Projets</a>
          </Button>
        </div>
      </section>

      <section className='border border-warning my-3'>
        <div className="d-grid gap-2">
        <Button variant="secondary" size="lg" className="" onClick={() => setShowTraining(true)} >Formations</Button>
        <CustomOffcanvas 
            title="Formations" 
            content={<Training />} 
            show={showTraining} 
            handleClose={handleCloseTraining} 
          />
        </div>
      </section>

      <section className='border border-primary'>
        <div className="d-grid gap-2">

          <Button variant="secondary" size="lg" className="" onClick={() => setShowContact(true)} >{' '}Contact</Button>
          <Offcanvas show={showContact} onHide={handleCloseContact} responsive="lg">
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>Contact</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Contact />
            </Offcanvas.Body>
          </Offcanvas>
        </div>
      </section>

      <section className="" id="project">
        <Project />
      </section>

    </>
  );
}

export default Home;
