import { createContext, useContext, useState } from 'react';
import { CiHeart } from 'react-icons/ci';

const LogoContext = createContext(undefined);
const initialLogoStyle = {
  size: 200,
  strokeWidth: 2,
  rotate: 0,
  strokeColor: '#ffffff',
  fillColor: '#ffffff',
  fillOpacity: 0,
  padding: 45,
  radius: 0,
  backgroundColor: '',
  shadow: '',
};

function LogoProvider({ children }) {
  const [icon, setIcon] = useState({ type: CiHeart });
  const [open, setOpen] = useState(false);
  const [iconStyles, setIconStyles] = useState(initialLogoStyle);

  const updateIconStyles = (updatedStyles) => {
    setIconStyles((prevStyles) => ({ ...prevStyles, ...updatedStyles }));
  };

  return (
    <LogoContext.Provider
      value={{
        icon,
        setIcon,
        open,
        setOpen,
        iconStyles,
        updateIconStyles,
      }}
    >
      {children}
    </LogoContext.Provider>
  );
}

function useLogo() {
  const context = useContext(LogoContext);
  if (context === null) {
    throw new Error('useLogo must be used within a LogoProvider');
  }
  return context;
}

export { useLogo, LogoProvider };
