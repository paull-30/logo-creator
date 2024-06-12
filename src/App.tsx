import './App.css';

import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import { LogoProvider } from './store/logo-context';

const App = () => {
  return (
    <main>
      <LogoProvider>
        <Navbar />
        <Sidebar />
      </LogoProvider>
    </main>
  );
};

export default App;
