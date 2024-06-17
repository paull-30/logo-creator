import { useLogo } from '../../store/logo-context';
import ColorPicker from '../ColorPicker/ColorPicker';
import Icon from '../Icon/Icon';

const IconOptions = () => {
  const { icon, setOpen, iconStyles, updateIconStyles } = useLogo();

  const handleSizeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateIconStyles({ size: parseInt(e.target.value) });
  };

  const handleRotateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateIconStyles({ rotate: parseInt(e.target.value) });
  };

  const handleStrokeWidthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateIconStyles({ strokeWidth: parseInt(e.target.value) });
  };

  const handleFillOpacityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateIconStyles({ fillOpacity: parseInt(e.target.value) });
  };

  return (
    <div className='px-4 py-2 w-full md:max-w-[18rem] max-md:h-64 space-y-4 overflow-y-auto max-md:border-b md:border-r md:pb-20'>
      <div>
        <div className='flex justify-between mt-1 font-mono text-sm'>
          <span>Icon</span>
          <span>{icon.slice(2)}</span>
        </div>
        <button>
          <div
            className='bg-slate-300 h-12 w-12 flex items-center justify-center rounded-sm mt-2 hover:bg-slate-400'
            onClick={() => setOpen((toggle) => !toggle)}
          >
            <Icon
              name={icon}
              className='w-6 h-6 hover:scale-[1.1] duration-100'
            />
          </div>
        </button>
      </div>
      <div>
        <div className='flex justify-between mt-1 font-mono text-sm'>
          <span>Size</span>
          <span>{iconStyles.size}</span>
        </div>
        <input
          className='range'
          type='range'
          min='100'
          max='600'
          value={iconStyles.size}
          onChange={handleSizeChange}
        />
      </div>
      <div>
        <div className='flex justify-between mt-1 font-mono text-sm'>
          <span>Rotate</span>
          <span>{iconStyles.rotate}°</span>
        </div>
        <input
          className='range'
          type='range'
          min='-180'
          max='180'
          value={iconStyles.rotate}
          onChange={handleRotateChange}
        />
      </div>
      <div>
        <div className='flex justify-between mt-1 font-mono text-sm'>
          <span>Border width</span>
          <span>{iconStyles.strokeWidth}px</span>
        </div>
        <input
          className='range'
          type='range'
          min='1'
          max='4'
          value={iconStyles.strokeWidth}
          onChange={handleStrokeWidthChange}
        />
      </div>
      <ColorPicker
        title='Border color'
        initialColor={iconStyles.strokeColor}
        onColorChange={(color) => updateIconStyles({ strokeColor: color })}
      />
      <div>
        <div className='flex justify-between mt-1 font-mono text-sm'>
          <span>Fill opacity</span>
          <span>{iconStyles.fillOpacity}%</span>
        </div>
        <input
          className='range'
          type='range'
          min='0'
          max='100'
          value={iconStyles.fillOpacity}
          onChange={handleFillOpacityChange}
        />
      </div>
      <ColorPicker
        title='Fill color'
        initialColor={iconStyles.fillColor}
        onColorChange={(color) => updateIconStyles({ fillColor: color })}
      />
    </div>
  );
};

export default IconOptions;
