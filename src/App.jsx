import React, { useState } from 'react';
import Control from './components/control';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Iphone from './components/Iphone';
import MacBook from './components/MacBook';
import Watch from './components/Watch';
import IMac from './components/IMac';
import PageTransition from './components/PageTransition';
function App() {
  const [frameZoom, setFrameZoom] = useState(false);
  const [activePage, setActivePage] = useState(0);

  const handleNavClick = (pageIndex) => {
    setActivePage(pageIndex);
  }

  const toggleZoom = () => {
    setFrameZoom(!frameZoom);
  }

  return (
    <div className='w-full h-screen grid place-items-center bg-orange-100'>
      <div className={`${frameZoom && "min-w-[97vw] min-h-[97vh]"} w-[70vw] h-[85vh] min-w-[70vw] min-h-[85vh] max-w-[90vw] max-h-[90vh] border border-gray-300 rounded-2xl resize overflow-auto relative transition-all duration-100 border-shadow-lg shadow-lg bg-white flex`}>

        <Navbar activePage={activePage} handleNavClick={handleNavClick} />
        <Control toggleZoom={toggleZoom} frameZoom={frameZoom} />
        <div className='flex-grow'>
          <PageTransition activePage={activePage}>
            <Home onNavigate={handleNavClick}/>
            <Iphone />
            <MacBook />
            <Watch />
            <IMac />
          </PageTransition>

        </div>
      </div>
    </div>
  )
}

export default App
