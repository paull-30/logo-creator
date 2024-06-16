import React, { useState } from 'react';
import IconOptions from './IconOptions';
import BackgroundOptions from './BackgroundOptions';
import Logo from '../Logo/Logo';

const Sidebar = () => {
  const [activeButton, setActiveButton] = useState('icon');

  return (
    <div className='flex flex-col md:flex-row h-screen '>
      <div className='p-2 max-md:px-4 border-r flex flex-col gap-2 h-full max-w-72 sm:flex-row sm:border-r-0 sm:h-16 sm:border-b sm:max-w-full'>
        <button
          onClick={() => setActiveButton('icon')}
          className={`max-w-full  px-4 py-2 md:p-2 lg:px-4 lg:py-2 lg:w-full rounded-sm text-left font-medium duration-100 hover:bg-slate-300 ${
            activeButton === 'icon' ? 'bg-slate-300 ' : ''
          }`}
        >
          Icon
        </button>
        <button
          onClick={() => setActiveButton('background')}
          className={`w-min px-4 py-2 md:p-2 lg:px-4 lg:py-2 lg:w-full rounded-sm text-left font-medium duration-100 hover:bg-slate-300 ${
            activeButton === 'background' ? 'bg-slate-300' : ''
          }`}
        >
          Background
        </button>
      </div>
      {activeButton === 'icon' ? <IconOptions /> : <BackgroundOptions />}
      <Logo />
    </div>
  );
};

export default Sidebar;
