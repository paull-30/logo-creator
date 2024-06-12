import React from 'react';
import ColorPicker from '../ColorPicker/ColorPicker';

const BackgroundOptions = () => {
  return (
    <div className='px-4 py-2 w-full md:w-80 max-md:h-64 space-y-4 overflow-y-auto max-md:border-b md:border-r md:pb-20'>
      <div>
        <div className='flex justify-between mt-1 font-mono text-sm'>
          <span>Rounded</span>
          <span>0 px</span>
        </div>
        <input type='range' />
      </div>

      <div>
        <div className='flex justify-between mt-1 font-mono text-sm'>
          <span>Padding</span>
          <span>45 px</span>
        </div>
        <input type='range' />
      </div>

      <div>
        <span className='font-mono text-sm'>Shadow</span>
        <input type='range' min='0' max='5' />
        <div>
          <span className='font-mono text-sm'>NONE</span>
          <span className='font-mono text-sm'>SM</span>
          <span className='font-mono text-sm'>MD</span>
          <span className='font-mono text-sm'>LG</span>
          <span className='font-mono text-sm'>XL</span>
          <span className='font-mono text-sm'>2XL</span>
        </div>
      </div>
      <ColorPicker title='Background' />
    </div>
  );
};

export default BackgroundOptions;
