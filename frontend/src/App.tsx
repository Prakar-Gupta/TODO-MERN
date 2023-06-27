import React from 'react';
import { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Firstpart from './components/firstheader';
import Secondpart from './components/secondheader';
// import Mainpart from './components/mainpart';
import Newlist from './components/newlist';
import InputTask from './components/inputboard';
import Completetask from './components/completelist';

function App() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <>
      <Firstpart />
      <Secondpart />

      {width <= 800 ? (
        <div className='flex'>
          <InputTask />
          <Newlist />
          <Completetask />
        </div>
      ) : (
        <div className='flex'>
          <Newlist />
          <InputTask />
          <Completetask />
        </div>
      )}
    </>
  );
}

export default App;
