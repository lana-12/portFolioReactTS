import React from 'react';
import { Link } from 'react-router-dom';

interface DownloadCVProps {
  className?: string;
}

const DownloadCV: React.FC<DownloadCVProps> = ({ className }) => {
  return (
    <Link 
      className={className}
      to="assets/img/CV.pdf"
      target="_blank"
      download
      title="Cliquez pour visualiser mon CV"
    >
      <i className="iconFile bi bi-filetype-pdf"></i>
    </Link>
  );
};

export default DownloadCV;
