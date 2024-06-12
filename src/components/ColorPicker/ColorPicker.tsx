import React from 'react';
import { RgbaColorPicker } from 'react-colorful';

const ColorPicker = ({ title }: { title: string }) => {
  return (
    <div className='flex flex-col items-center'>
      <span className='self-start mb-2 font-mono text-sm'>{title}</span>
      <RgbaColorPicker />
      <div className='flex gap-2 w-full mt-4'>
        <div className='w-[25%] flex flex-col items-center'>
          <input className='border-slate-200 border-2 rounded-md  w-full' />
          <span className='font-mono text-sm'>HEX</span>
        </div>

        <div className='w-[18.75%] flex flex-col items-center'>
          <input className='border-slate-200 border-2 rounded-md  w-full' />
          <span className='font-mono text-sm'>R</span>
        </div>

        <div className='w-[18.75%] flex flex-col items-center'>
          <input className='border-slate-200 border-2 rounded-md  w-full' />
          <span className='font-mono text-sm'>G</span>
        </div>

        <div className='w-[18.75%] flex flex-col items-center'>
          <input className='border-slate-200 border-2 rounded-md text-center w-full' />
          <span className='font-mono text-sm'>B</span>
        </div>

        <div className='w-[18.75%] flex flex-col items-center'>
          <input className='border-slate-200 border-2 rounded-md  w-full' />
          <span className='font-mono text-sm'>A</span>
        </div>
      </div>
    </div>
  );
};

export default ColorPicker;
