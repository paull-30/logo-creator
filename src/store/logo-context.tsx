import { createContext, useState } from 'react';
import { CiHeart } from 'react-icons/ci';

export const initialLogoIcon = CiHeart;

const initialPresets = {
  logoPreset1: {
    size: 400,
    strokeWidth: 2,
    rotate: 0,
    strokeColor: '#ffffff',
    fillColor: '#ffffff',
    fillOpacity: 0,
    padding: 45,
    radius: 0,
    backgroundColor: 'rgb(203 213 225)',
    shadow: 'shadow-none',
  },
  logoPreset2: {
    size: 400,
    strokeWidth: 2.2,
    rotate: 0,
    strokeColor: '#222222',
    fillColor: '#ffffff',
    fillOpacity: 0.9,
    padding: 45,
    radius: 0,
    backgroundColor: '#ffeda0',
    shadow: 'shadow-none',
  },
  logoPreset3: {
    size: 400,
    strokeWidth: 2,
    rotate: 0,
    strokeColor: '#1e1e1e',
    fillColor: '#ffffff',
    fillOpacity: 0.9,
    padding: 45,
    radius: 120,
    backgroundColor: 'linear-gradient(45deg, #ef709b 0%, #eca0ff 100%)',
    shadow: 'shadow-xl',
  },
  logoPreset4: {
    size: 400,
    strokeWidth: 2,
    rotate: 0,
    strokeColor: '#1e1e1e',
    fillColor: '#ffffff',
    fillOpacity: 0.9,
    padding: 45,
    radius: 300,
    backgroundColor: 'radial-gradient(circle, #c6f8ff 0%, #a9ff68 100%)',
    shadow: 'shadow-2xl',
  },
};

export const LogoContext = createContext({
  icon: initialLogoIcon,
  presets: initialPresets,
  updateIcon: () => {},
});

export const LogoProvider = ({ children }) => {
  const [presets] = useState(initialPresets);
  const [icon, setIcon] = useState(() => initialLogoIcon);

  const updateIcon = (newIcon) => {
    setIcon(() => newIcon);
  };

  return (
    <LogoContext.Provider value={{ icon, presets, updateIcon }}>
      {children}
    </LogoContext.Provider>
  );
};
