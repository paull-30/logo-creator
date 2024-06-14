import './App.css';

import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';

import IconPicker from './components/IconPicker/IconPicker';
import { LogoProvider, useLogo } from './store/logo-context';

const App = () => {
  return (
    <main className='relative w-full'>
      <LogoProvider>
        <IconPicker />
        <Navbar />
        <Sidebar />
      </LogoProvider>
    </main>
  );
};

export default App;
