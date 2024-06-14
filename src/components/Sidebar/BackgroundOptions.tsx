import React from 'react';
import ColorPicker from '../ColorPicker/ColorPicker';
import { useLogo } from '../../store/logo-context';

const BackgroundOptions = () => {
  const { updateIconStyles, iconStyles } = useLogo();

  const handleRadiusChange = (e) => {
    updateIconStyles({ radius: parseInt(e.target.value) });
  };

  const handlePaddingChange = (e) => {
    updateIconStyles({ padding: parseInt(e.target.value) });
  };

  const handleShadowChange = (e) => {
    const shadowClasses = [
      'shadow-none',
      'shadow-sm',
      'shadow-md',
      'shadow-lg',
      'shadow-xl',
      'shadow-2xl',
    ];
    updateIconStyles({ shadow: shadowClasses[parseInt(e.target.value)] });
  };

  return (
    <div className='px-4 py-2 w-full md:w-80 max-md:h-64 space-y-4 overflow-y-auto max-md:border-b md:border-r md:pb-20'>
      <div>
        <div className=' flex justify-between mt-1 font-mono text-sm'>
          <span>Rounded</span>
          <span>{iconStyles.radius} px</span>
        </div>
        <input
          type='range'
          className='range'
          min={0}
          value={iconStyles.radius}
          max={300}
          onChange={handleRadiusChange}
        />
      </div>

      <div>
        <div className='flex justify-between mt-1 font-mono text-sm'>
          <span>Padding</span>
          <span>{iconStyles.padding} px</span>
        </div>
        <input
          type='range'
          className='range'
          min={0}
          value={iconStyles.padding}
          max={100}
          onChange={handlePaddingChange}
        />
      </div>

      <div>
        <span className='font-mono text-sm'>Shadow</span>
        <input
          type='range'
          min='0'
          max='5'
          className='range'
          onChange={handleShadowChange}
        />
        <div className='flex justify-between'>
          <span className='font-mono text-sm'>NONE</span>
          <span className='font-mono text-sm'>SM</span>
          <span className='font-mono text-sm'>MD</span>
          <span className='font-mono text-sm'>LG</span>
          <span className='font-mono text-sm'>XL</span>
          <span className='font-mono text-sm'>2XL</span>
        </div>
      </div>
      <ColorPicker
        title='Background'
        initialColor={iconStyles.backgroundColor}
        onColorChange={(color) => updateIconStyles({ backgroundColor: color })}
      />
    </div>
  );
};

export default BackgroundOptions;
