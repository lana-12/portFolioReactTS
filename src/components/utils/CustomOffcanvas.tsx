import React from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import ICustomOffcanvas from '../interfaces/ICustomOffcanvas';


const CustomOffcanvas: React.FC<ICustomOffcanvas> = ({ title, content, show, handleClose }) => {
  return (
    <Offcanvas className='offcanvas'  show={show} onHide={handleClose} responsive="lg">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title >{title}</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        {content}
      </Offcanvas.Body>
    </Offcanvas>
  );
}

export default CustomOffcanvas;
