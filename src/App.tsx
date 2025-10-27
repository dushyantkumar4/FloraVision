import React from 'react';
import './App.css';

import LendingPage from './views/LendingPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className='w-full bg-[#1B2316]'>
      <Navbar/>
      <LendingPage/>
      <Footer/>
    </div>
  )
}

export default App