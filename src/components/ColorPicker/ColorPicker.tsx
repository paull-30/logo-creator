import React, { useState } from 'react';
import { RgbaColorPicker } from 'react-colorful';
import { rgbaToHex, hexToRgba, isValidHex } from '../../utils/colorUtils';

interface ColorPickerProps {
  title: string;
  initialColor: string;
  onColorChange: (color: string) => void;
}

interface RGBA {
  r: number;
  g: number;
  b: number;
  a: number;
}

const ColorPicker = ({
  title,
  initialColor,
  onColorChange,
}: ColorPickerProps) => {
  const [color, setColor] = useState(hexToRgba(initialColor));
  const [hex, setHex] = useState(initialColor);

  //CONVERT RGBA TO HEX AND SET THE STYLES WITH THE RESPECTIVE COLOR
  const handleColorChange = (newColor: RGBA) => {
    const newHex = rgbaToHex(newColor);
    setColor(newColor);
    setHex(newHex);
    onColorChange(newHex);
  };

  //CHANGE THE COLOR BASED ON HEX VALUE FROM THE INPUT
  const handleHexChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newHex = e.target.value;
    setHex(newHex);
    if (isValidHex(newHex)) {
      const newColor = hexToRgba(newHex);
      setColor(newColor);
      onColorChange(newHex);
    }
  };

  //CHANGE THE COLOR BASED OFF THE R,G,B
  const handleRgbChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    component: 'r' | 'g' | 'b'
  ) => {
    const value = parseInt(e.target.value, 10);
    if (!isNaN(value) && value >= 0 && value <= 255) {
      const newColor = { ...color, [component]: value };
      const newHex = rgbaToHex(newColor);
      setColor(newColor);
      setHex(newHex);
      onColorChange(newHex);
    }
  };

  //CHANGE THE OPACITY FROM THE INPUT
  const handleAlphaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);
    if (!isNaN(value) && value >= 0 && value <= 1) {
      const newColor = { ...color, a: value };
      const newHex = rgbaToHex(newColor);
      setColor(newColor);
      setHex(newHex);
      onColorChange(newHex);
    }
  };

  return (
    <div className='flex flex-col items-center'>
      <span className='self-start mb-2 font-mono text-sm'>{title}</span>
      <RgbaColorPicker color={color} onChange={handleColorChange} />
      <div className='flex gap-2 w-full mt-4'>
        <div className='w-[40%] flex flex-col items-center'>
          <input
            className='border-slate-200 border-2 rounded-md w-full text-center'
            value={hex}
            onChange={handleHexChange}
          />
          <span className='font-mono text-sm'>HEX</span>
        </div>
        <div className='w-[18.75%] flex flex-col items-center'>
          <input
            className='border-slate-200 border-2 rounded-md w-full text-center'
            value={color.r}
            onChange={(e) => handleRgbChange(e, 'r')}
          />
          <span className='font-mono text-sm'>R</span>
        </div>
        <div className='w-[18.75%] flex flex-col items-center'>
          <input
            className='border-slate-200 border-2 rounded-md w-full text-center'
            value={color.g}
            onChange={(e) => handleRgbChange(e, 'g')}
          />
          <span className='font-mono text-sm'>G</span>
        </div>
        <div className='w-[18.75%] flex flex-col items-center'>
          <input
            className='border-slate-200 border-2 rounded-md text-center w-full '
            value={color.b}
            onChange={(e) => handleRgbChange(e, 'b')}
          />
          <span className='font-mono text-sm'>B</span>
        </div>
        <div className='w-[18.75%] flex flex-col items-center'>
          <input
            className='border-slate-200 border-2 rounded-md w-full text-center'
            value={color.a}
            onChange={handleAlphaChange}
          />
          <span className='font-mono text-sm'>A</span>
        </div>
      </div>
    </div>
  );
};

export default ColorPicker;
