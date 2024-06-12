import React from 'react';
import ColorPicker from '../ColorPicker/ColorPicker';

const BackgroundOptions = () => {
  return (
    <div className='px-4 py-2 w-full md:w-80 max-md:h-64 space-y-4 overflow-y-auto max-md:border-b md:border-r md:pb-20'>
      <div>
        <div>
          <span>Rounded</span>
          <span>0 px</span>
        </div>
        <input type='range' />
      </div>

      <div>
        <div>
          <span>Padding</span>
          <span>45 px</span>
        </div>
        <input type='range' />
      </div>

      <div>
        <span>Shadow</span>
        <input type='range' min='0' max='5' />
        <div>
          <span>NONE</span>
          <span>SM</span>
          <span>MD</span>
          <span>LG</span>
          <span>XL</span>
          <span>2XL</span>
        </div>
      </div>
      <ColorPicker title='Background' />
    </div>
  );
};

export default BackgroundOptions;
