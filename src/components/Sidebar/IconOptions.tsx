import React, { useContext, useState } from 'react';
import ColorPicker from '../ColorPicker/ColorPicker';
import { LogoContext } from '../../store/logo-context';

const IconOptions = () => {
  const { icon: Icon } = useContext(LogoContext);

  return (
    <div className='px-4 py-2 w-full md:w-80 max-md:h-64 space-y-4 overflow-y-auto max-md:border-b md:border-r md:pb-20'>
      <div>
        <div className='flex justify-between mt-1 font-mono text-sm'>
          <span>Icon</span>
          <span>{Icon.name}</span>
        </div>
        <button>
          <div className='bg-slate-300 h-12 w-12 flex items-center justify-center rounded-sm mt-2 hover:bg-slate-400'>
            <Icon className='w-6 h-6 hover:scale-[1.1] duration-100' />
          </div>
        </button>
      </div>
      <div>
        <div className='flex justify-between mt-1 font-mono text-sm'>
          <span>Size</span>
          <span>600px</span>
        </div>
        <input className='range' type='range' min='100' max='600' />
      </div>
      <div>
        <div className='flex justify-between mt-1 font-mono text-sm'>
          <span>Rotate</span>
          <span>0°</span>
        </div>
        <input className='range' type='range' min='-180' max='180' />
      </div>
      <div>
        <div className='flex justify-between mt-1 font-mono text-sm'>
          <span>Border width</span>
          <span>2px</span>
        </div>
        <input className='range' type='range' min='1' max='4' />
      </div>
      <ColorPicker title='Border color' />
      <div>
        <div className='flex justify-between mt-1 font-mono text-sm'>
          <span>Fill opacity</span>
          <span>100%</span>
        </div>
        <input className='range' type='range' min='-180' max='180' />
      </div>
      <ColorPicker title='Fill color' />
    </div>
  );
};

export default IconOptions;
