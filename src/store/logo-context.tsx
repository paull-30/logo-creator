import { createContext, useContext, useState, useEffect, useRef } from 'react';
import { toPng, toSvg } from 'html-to-image';
import download from 'downloadjs';

interface LogoStyles {
  size: number;
  strokeWidth: number;
  rotate: number;
  strokeColor: string;
  fillColor: string;
  fillOpacity: number;
  padding: number;
  radius: number;
  backgroundColor: string;
  shadow: string;
}

interface IHistory {
  icon: string;
  styles: LogoStyles;
}

interface LogoContextProps {
  icon: string;
  updateIcon: (newIcon: string) => void;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  iconStyles: LogoStyles;
  updateIconStyles: (updatedStyles: Partial<LogoStyles>) => void;
  undo: () => void;
  logoRef: React.RefObject<HTMLDivElement>;
  downloadPng: () => void;
  downloadSvg: () => void;
}

interface LogoProviderProps {
  children: React.ReactNode;
}

const LogoContext = createContext<LogoContextProps | null>(null);

const initialLogoStyle: LogoStyles = {
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

function LogoProvider({ children }: LogoProviderProps) {
  const [icon, setIcon] = useState<string>('LuActivity');
  const [open, setOpen] = useState<boolean>(false);
  const [iconStyles, setIconStyles] = useState<LogoStyles>(initialLogoStyle);
  const [history, setHistory] = useState<IHistory[]>([
    { icon: 'LuActivity', styles: initialLogoStyle },
  ]);
  const logoRef = useRef<null | HTMLDivElement>(null);

  //GET THE HISTORY IF IT EXISTS AND SET IT AS DEFAULT
  useEffect(() => {
    const storedHistory = localStorage.getItem('logoHistory');
    if (storedHistory) {
      const parsedHistory: IHistory[] = JSON.parse(storedHistory);
      const lastState = parsedHistory[parsedHistory.length - 1];
      setHistory(parsedHistory);
      setIcon(lastState.icon);
      setIconStyles(lastState.styles);
    }
  }, []);

  //SET THE HISTORY TO LOCALSTORAGE
  useEffect(() => {
    localStorage.setItem('logoHistory', JSON.stringify(history));
  }, [history]);

  //UPDATE THE ICON BASED ON THE NAME AND SET IT TO HISTORY
  const updateIcon = (newIcon: string) => {
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

  //UPDATE THE STYLES BASED ON A PARTICULAR STYLE OR MORE; SET TO HISTORY
  const updateIconStyles = (updatedStyles: Partial<LogoStyles>) => {
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

  //UNDO TO THE NEWEST STATE
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

  //DOWNLOAD THE REF AS PNG
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

  //DOWNLOAD THE REF AS SVG
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
