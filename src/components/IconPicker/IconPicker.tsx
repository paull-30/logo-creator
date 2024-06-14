import * as lucideIcons from 'react-icons/lu';
import { IoCloseOutline } from 'react-icons/io5';
import { IconType } from 'react-icons';
import { useLogo } from '../../store/logo-context';
import { useState } from 'react';

const iconList: string[] = Object.keys(lucideIcons);

const IconPicker = () => {
  const { setIcon, open, setOpen } = useLogo();
  const [searchTerm, setSearchTerm] = useState('');

  if (!open) return null;

  const filteredIconList = iconList.filter((icon) =>
    icon.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div
      className={`bg-slate-100 shadow-md w-[40%] left-[198px] z-10 h-full absolute overflow-y-auto ${
        open ? 'animate-fadeIn' : ''
      } `}
    >
      <div className='flex mt-10'>
        <p className='text-2xl ml-20 font-medium'>Pick an icon</p>
        <span className='ml-auto mr-7 cursor-pointer'>
          <IoCloseOutline onClick={() => setOpen(false)} size={40} />
        </span>
      </div>
      <form className='mt-4 ml-20'>
        <input
          type='text'
          className='h-11 rounded-md bg-transparent border-2 border-slate-200 text-slate-600 px-4'
          placeholder='Search icons'
          value={searchTerm}
          onChange={handleSearch}
        />
      </form>
      <div className='mt-4 mx-20 flex flex-wrap gap-2 cursor-pointer'>
        {filteredIconList.map((icon, index) => {
          const IconComponent: IconType = (
            lucideIcons as { [key: string]: IconType }
          )[icon];
          return (
            <div
              key={index}
              className='bg-slate-200 rounded-sm w-12 h-12 items-center flex justify-center hover:bg-slate-400 hover:scale-[1.2] transition-transform duration-300 ease-in-out'
              onClick={() => {
                setIcon({ type: IconComponent });
                setOpen(false);
              }}
            >
              <IconComponent size={30} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default IconPicker;
