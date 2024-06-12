import React, { useContext } from 'react';
import ColorPicker from '../ColorPicker/ColorPicker';
import { LogoContext } from '../../store/logo-context';

const IconOptions = () => {
  const { icon: Icon } = useContext(LogoContext);

  return (
    <div className='px-4 py-2 w-full md:w-80 max-md:h-64 space-y-4 overflow-y-auto max-md:border-b md:border-r md:pb-20'>
      <div>
        <div>
          <span>Icon</span>
          <span>{Icon.name}</span>
        </div>
        <button>
          <div>
            <Icon />
          </div>
        </button>
      </div>
      <div>
        <div>
          <span>Size</span>
          <span>600px</span>
        </div>
        <input type='range' min='100' max='600' />
      </div>
      <div>
        <div>
          <span>Rotate</span>
          <span>0°</span>
        </div>
        <input type='range' min='-180' max='180' />
      </div>
      <div>
        <div>
          <span>Border width</span>
          <span>2px</span>
        </div>
        <input type='range' min='1' max='4' />
      </div>
      <ColorPicker title='Border color' />
      <div>
        <div>
          <span>Fill opacity</span>
          <span>100%</span>
        </div>
        <input type='range' min='-180' max='180' />
      </div>
      <ColorPicker title='Fill color' />
    </div>
  );
};

export default IconOptions;
