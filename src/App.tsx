import { IoCloseOutline } from 'react-icons/io5';
import './App.css';

import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import { LogoProvider } from './store/logo-context';
import * as lucideIcons from 'react-icons/lu';

const iconList = Object.keys(lucideIcons);

const App = () => {
  return (
    <main className='relative w-full'>
      <LogoProvider>
        <div className='bg-slate-100 shadow-md w-[40%] left-[198px] z-10 h-full absolute overflow-y-auto'>
          <div className='flex mt-10'>
            <p className='text-2xl ml-20 font-medium'>Pick an icon</p>
            <span className='ml-auto mr-7 cursor-pointer'>
              <IoCloseOutline size={40} />
            </span>
          </div>
          <form className='mt-4 ml-20'>
            <input
              type='text'
              className='h-11 rounded-md bg-transparent border-2 border-slate-200 text-slate-600 px-4'
              placeholder='Search icons'
            />
          </form>
          <div className='mt-4 mx-20 flex flex-wrap gap-2 cursor-pointer'>
            {iconList.map((icon, index) => {
              const IconComponent = lucideIcons[icon];
              return (
                <div
                  key={index}
                  className='bg-slate-200 rounded-sm w-12 h-12 items-center flex justify-center'
                >
                  <IconComponent size={30} />
                </div>
              );
            })}
          </div>
        </div>
        <Navbar />
        <Sidebar />
      </LogoProvider>
    </main>
  );
};

export default App;
