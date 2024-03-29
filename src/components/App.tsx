import React from 'react';
import Header from './templates/Header';
import Footer from './templates/Footer';
import { Outlet } from 'react-router-dom';


function App() {
  return (
    <div className="App" id="container_all">
      <Header/>
      <main> 
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
