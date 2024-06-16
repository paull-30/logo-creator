import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useRef,
} from 'react';
import { toPng, toSvg } from 'html-to-image';
import download from 'downloadjs';

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
  backgroundColor: '#0da4aeff',
  shadow: '',
};

function LogoProvider({ children }) {
  const [icon, setIcon] = useState('LuActivity');
  const [open, setOpen] = useState(false);
  const [iconStyles, setIconStyles] = useState(initialLogoStyle);
  const [history, setHistory] = useState([
    { icon: 'LuActivity', styles: initialLogoStyle },
  ]);
  const logoRef = useRef(null);

  useEffect(() => {
    const storedHistory = localStorage.getItem('logoHistory');
    if (storedHistory) {
      const parsedHistory = JSON.parse(storedHistory);
      const lastState = parsedHistory[parsedHistory.length - 1];
      setHistory(parsedHistory);
      setIcon(lastState.icon);
      setIconStyles(lastState.styles);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('logoHistory', JSON.stringify(history));
  }, [history]);

  const updateIcon = (newIcon) => {
    setIcon(newIcon);
    setHistory((prevHistory) => {
      const newHistory = [
        ...prevHistory,
        { icon: newIcon, styles: iconStyles },
      ];
      if (newHistory.length > 10) {
        newHistory.shift();
      }
      return newHistory;
    });
  };

  const updateIconStyles = (updatedStyles) => {
    setIconStyles((prevStyles) => {
      const newStyles = { ...prevStyles, ...updatedStyles };
      setHistory((prevHistory) => {
        const newHistory = [...prevHistory, { icon, styles: newStyles }];
        if (newHistory.length > 10) {
          newHistory.shift();
        }
        return newHistory;
      });
      return newStyles;
    });
  };

  const undo = () => {
    setHistory((prevHistory) => {
      const newHistory = [...prevHistory];
      if (newHistory.length > 1) {
        newHistory.pop();
        const prevState = newHistory[newHistory.length - 1];
        setIcon(prevState.icon);
        setIconStyles(prevState.styles);
        return newHistory;
      }
      if (newHistory.length === 1) {
        const prevState = newHistory[0];
        setIcon(prevState.icon);
        setIconStyles(prevState.styles);
        return newHistory;
      }
      return prevHistory;
    });
  };

  const downloadPng = () => {
    if (logoRef.current === null) {
      return;
    }

    toPng(logoRef.current)
      .then((dataUrl) => {
        download(dataUrl, 'icon.png');
      })
      .catch((err) => {
        console.error('Oops, something went wrong!', err);
      });
  };

  const downloadSvg = () => {
    if (logoRef.current === null) {
      return;
    }

    toSvg(logoRef.current)
      .then((dataUrl) => {
        download(dataUrl, 'icon.svg');
      })
      .catch((err) => {
        console.error('Oops, something went wrong!', err);
      });
  };

  return (
    <LogoContext.Provider
      value={{
        icon,
        updateIcon,
        open,
        setOpen,
        iconStyles,
        updateIconStyles,
        undo,
        logoRef,
        downloadPng,
        downloadSvg,
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
