import React, { useContext, useEffect, useState } from 'react';
import { LuUndo2 } from 'react-icons/lu';
import { RiArrowDropDownLine, RiArrowDropUpLine } from 'react-icons/ri';
import { TbClover } from 'react-icons/tb';
import { CiHeart } from 'react-icons/ci';
import { IoMdHeartHalf } from 'react-icons/io';
import {
  GiAbstract010,
  GiAbstract019,
  GiAnchor,
  GiAtSea,
  GiCheckedShield,
  GiChiliPepper,
  GiCutDiamond,
  GiOppositeHearts,
} from 'react-icons/gi';
import { useLogo } from '../../store/logo-context';
import Icon from '../Icon/Icon';

const customBorderRadius = ['', 'rounded-xl', 'rounded-full'];
const customBackgroundColors = [
  'bg-slate-300',
  'bg-yellow-300',
  'bg-orange-300',
  'bg-teal-300',
  'bg-fuchsia-300',
  'bg-blue-300',
  'bg-green-300',
  'bg-purple-300',
  'bg-red-300',
];
const icons = [
  TbClover,
  CiHeart,
  IoMdHeartHalf,
  GiOppositeHearts,
  GiAbstract010,
  GiAbstract019,
  GiAnchor,
  GiAtSea,
  GiCheckedShield,
  GiChiliPepper,
  GiCutDiamond,
];

type Item = {
  Icon: React.ElementType;
  borderRadius: string;
  backgroundColor: string;
};

const getRandomElement = <T,>(arr: T[]): T =>
  arr[Math.floor(Math.random() * arr.length)];

const Navbar = () => {
  const { icon, updateIconStyles, undo, downloadPng, downloadSvg } = useLogo();
  const [dropdown, setDropdown] = useState(false);

  const [currentItem, setCurrentItem] = useState<Item>({
    Icon: getRandomElement(icons),
    borderRadius: getRandomElement(customBorderRadius),
    backgroundColor: getRandomElement(customBackgroundColors),
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentItem({
        Icon: getRandomElement(icons),
        borderRadius: getRandomElement(customBorderRadius),
        backgroundColor: getRandomElement(customBackgroundColors),
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <header className='flex py-2 md:pl-6 px-4 border-b gap-4 items-center justify-between flex-wrap'>
      <div className='flex gap-2 items-center'>
        <img
          className='rounded-sm w-6 aspect-square'
          src='/logo.webp'
          alt='logo'
        />
        <h1 className='text-lg font-bold'>FastLogo</h1>
      </div>

      <div className='flex items-center divide-x max-lg:order-last'>
        <button className='mr-4'>
          <LuUndo2
            onClick={undo}
            className='w-6 h-6 hover:scale-[1.1] duration-100'
          />
        </button>
        <ul className='flex gap-2 items-center px-4'>
          <li className='text-sm text-slate-500 max-md:hidden'>Presets</li>
          <li>
            <button>
              <div
                className='bg-slate-300 h-12 w-12 flex items-center justify-center '
                onClick={() =>
                  updateIconStyles({
                    backgroundColor: 'rgb(203 213 225)',
                    radius: '0',
                  })
                }
              >
                <Icon
                  name={icon}
                  className='w-6 h-6 hover:scale-[1.1] duration-100'
                />
                {/* <Icon.type className='w-6 h-6 hover:scale-[1.1] duration-100' /> */}
              </div>
            </button>
          </li>
          <li>
            <button>
              <div
                className='bg-yellow-300 h-12 w-12 flex items-center justify-center'
                onClick={() =>
                  updateIconStyles({
                    backgroundColor: 'rgb(253 224 71)',
                    radius: '0',
                  })
                }
              >
                <Icon
                  name={icon}
                  className='w-6 h-6 hover:scale-[1.1] duration-100'
                />
                {/* <Icon.type className='w-6 h-6 hover:scale-[1.1] duration-100' /> */}
              </div>
            </button>
          </li>
          <li>
            <button>
              <div
                className='bg-red-300 h-12 w-12 flex items-center justify-center rounded-xl'
                onClick={() =>
                  updateIconStyles({
                    backgroundColor: 'rgb(252 165 165)',
                    radius: '2rem',
                  })
                }
              >
                <Icon
                  name={icon}
                  className='w-6 h-6 hover:scale-[1.1] duration-100'
                />
                {/* <Icon.type className='w-6 h-6 hover:scale-[1.1] duration-100' /> */}
              </div>
            </button>
          </li>
          <li>
            <button>
              <div
                className='bg-green-300 h-12 w-12 flex items-center justify-center rounded-full '
                onClick={() =>
                  updateIconStyles({
                    backgroundColor: 'rgb(134 239 172)',
                    radius: '300px',
                  })
                }
              >
                {/* <Icon.type className='w-6 h-6 hover:scale-[1.1] duration-100' /> */}
                <Icon
                  name={icon}
                  className='w-6 h-6 hover:scale-[1.1] duration-100'
                />
              </div>
            </button>
          </li>
          <li>
            <button>
              <div
                className={`${currentItem.backgroundColor} h-12 w-12 flex items-center justify-center ${currentItem.borderRadius}`}
              >
                <currentItem.Icon className='w-6 h-6 hover:scale-[1.1] duration-100' />
              </div>
            </button>
          </li>
        </ul>
      </div>
      <div className='flex gap-4  items-center bg-slate-300 rounded-sm px-2 py-3 text-lg text-slate-600 hover:bg-slate-400 relative'>
        <button
          onClick={() => setDropdown((toggle) => !toggle)}
          className='flex items-center'
        >
          Download
          <RiArrowDropDownLine
            className={`w-6 h-6 transition-transform duration-300 ${
              dropdown ? 'rotate-180' : ''
            }`}
          />
        </button>
        {dropdown && (
          <div
            className={`absolute z-50 right-0 top-14 transform transition-all duration-100 ${
              dropdown ? ' animate-fadeIn' : ''
            }`}
          >
            <div className=' rounded border mt-1 w-52 max-w-sm transform bg-slate-100 shadow-xl'>
              <div className='p-1 space-y-1 text-sm font-semibold '>
                <button
                  onClick={downloadPng}
                  className='flex items-center gap-2 w-full hover:bg-slate-400 cursor-pointer p-2 rounded-sm text-left'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    stroke-width='2'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    className='w-[18px] h-[18px]'
                  >
                    <path d='M12 17V3'></path>
                    <path d='m6 11 6 6 6-6'></path>
                    <path d='M19 21H5'></path>
                  </svg>
                  Download PNG
                </button>
                <button
                  onClick={downloadSvg}
                  className='flex items-center gap-2 w-full hover:bg-slate-400 duration-100 cursor-pointer p-2 rounded-sm text-left'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    stroke-width='2'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    className='w-[18px] h-[18px]'
                  >
                    <path d='M12 17V3'></path>
                    <path d='m6 11 6 6 6-6'></path>
                    <path d='M19 21H5'></path>
                  </svg>
                  Download SVG
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
