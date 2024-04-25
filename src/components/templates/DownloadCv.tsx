import React from 'react';
import { Link } from 'react-router-dom';
import IDownloadCv from '../interfaces/IDownloadCv';
import Config from '../configs/Config';


const DownloadCV: React.FC<IDownloadCv> = ({ className }) => {
  return (
    <Link 
      className={className}
      to={Config.CV_LINK}
      target="_blank"
      download
      title="Cliquez pour visualiser mon CV"
    >
      <i className="iconFile bi bi-filetype-pdf"></i>
    </Link>
  );
};

export default DownloadCV;
