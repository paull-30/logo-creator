import React from 'react';
import { RgbaColorPicker } from 'react-colorful';

const ColorPicker = ({ title }: { title: string }) => {
  return (
    <div className='flex flex-col items-center'>
      <span className='self-start mb-2'>{title}</span>
      <RgbaColorPicker />
      <div className='flex gap-2 w-full mt-4'>
        <div className='w-[25%] flex flex-col items-center'>
          <input className='border-slate-200 border-2 rounded-md  w-full' />
          <span>HEX</span>
        </div>

        <div className='w-[18.75%] flex flex-col items-center'>
          <input className='border-slate-200 border-2 rounded-md  w-full' />
          <span>R</span>
        </div>

        <div className='w-[18.75%] flex flex-col items-center'>
          <input className='border-slate-200 border-2 rounded-md  w-full' />
          <span>G</span>
        </div>

        <div className='w-[18.75%] flex flex-col items-center'>
          <input className='border-slate-200 border-2 rounded-md text-center w-full' />
          <span>B</span>
        </div>

        <div className='w-[18.75%] flex flex-col items-center'>
          <input className='border-slate-200 border-2 rounded-md  w-full' />
          <span>A</span>
        </div>
      </div>
    </div>
  );
};

export default ColorPicker;
