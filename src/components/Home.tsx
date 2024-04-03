import React, { useState } from 'react';
import About from './About';
import Project from './Project';
import Contact from './Contact';
import Training from './Training';
import CustomOffcanvas from './utils/CustomOffcanvas';
import Button from 'react-bootstrap/Button';
import SoftSkills from './SoftSkills';
import Stack from './Stack';

const Home = () => {
  const [showAbout, setShowAbout] = useState(false);
  const [showTraining, setShowTraining] = useState(false);
  const [showSoftSkills, setShowSoftSkills] = useState(false);
  const [showStack, setShowStack] = useState(false);

  const handleCloseAbout = () => setShowAbout(false);
  const handleCloseTraining = () => setShowTraining(false);
  const handleCloseSoftSkills = () => setShowSoftSkills(false);
  const handleCloseStack = () => setShowStack(false);


  
  return (
    <>
    <section className='boxBtn container'>

      <section className=' my-3' >
        <div className="d-grid gap-2">
          <Button 
          className='btnCustomLink'
            // variant="secondary" 
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
      
      <section className=' my-3' >
        <div className="d-grid gap-2">
          <Button 
          className='btnCustomLink'
            // variant="secondary" 
            size="lg" 
            onClick={() => setShowStack(true)}>Iconographie Technique
          </Button>
          <CustomOffcanvas 
            title="Iconographies Technique" 
            content={<Stack/>} 
            show={showStack} 
            handleClose={handleCloseStack} 
          />
        </div>
      </section>

      <section className='' >
        <div className="d-grid gap-2">
          <Button 
            className='btnCustomLink'
            size="lg" 
            >
              <a href="#project" style={{ color: 'white' }}>Projets</a>
          </Button>
        </div>
      </section>

      <section className='my-3 '>
        <div className="d-grid gap-2">
        <Button  size="lg" className='btnCustomLink' onClick={() => setShowSoftSkills(true)} >Ce que je suis devenue</Button>
        <CustomOffcanvas 
            title="Ce que je suis devenue" 
            content={<SoftSkills />} 
            show={showSoftSkills} 
            handleClose={handleCloseSoftSkills} 
          />
        </div>
      </section>

      <section className='my-3'>
        <div className="d-grid gap-2">
        <Button  size="lg" className='btnCustomLink' onClick={() => setShowTraining(true)} >Formations</Button>
        <CustomOffcanvas 
            title="Formations" 
            content={<Training />} 
            show={showTraining} 
            handleClose={handleCloseTraining} 
          />
        </div>
      </section>

      <section className=''>
        <div className="d-grid gap-2">

          <Button  size="lg" className='btnCustomLink'><a href="#contact" style={{ color: 'white' }}>Contact</a></Button>
          
          {/* <Offcanvas show={showContact} onHide={handleCloseContact} responsive="lg">
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>Contact</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body> */}
              {/* <Contact /> */}
            {/* </Offcanvas.Body>
          </Offcanvas> */}
        </div>
      </section>
    </section>

      <section className="boxProject my-5 pt-4 container-lg" id="project">
        <Project />
      </section>

      <section className="contactFooter" id="contact">
        <Contact />      
      </section>
      


    </>
  );
}

export default Home;
