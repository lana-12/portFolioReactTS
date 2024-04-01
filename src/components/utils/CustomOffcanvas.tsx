import React from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';

interface CustomOffcanvasProps {
  title: string;
  content: React.ReactNode;
  show: boolean;
  handleClose: () => void;
}

const CustomOffcanvas: React.FC<CustomOffcanvasProps> = ({ title, content, show, handleClose }) => {
  return (
    <Offcanvas show={show} onHide={handleClose} responsive="lg">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>{title}</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        {content}
      </Offcanvas.Body>
    </Offcanvas>
  );
}

export default CustomOffcanvas;
