import React, { useContext, useEffect, useState } from 'react';
import { LuUndo2 } from 'react-icons/lu';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { BsBackpack2, BsFillBackpack2Fill } from 'react-icons/bs';
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
import { LogoContext } from '../../store/logo-context';

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

  const { icon: Icon } = useContext(LogoContext);

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
          <LuUndo2 className='w-6 h-6 hover:scale-[1.1] duration-100' />
        </button>
        <ul className='flex gap-2 items-center px-4'>
          <li className='text-sm text-slate-500 max-md:hidden'>Presets</li>
          <li>
            <button>
              <div className='bg-slate-300 h-12 w-12 flex items-center justify-center'>
                <Icon className='w-6 h-6 hover:scale-[1.1] duration-100' />
              </div>
            </button>
          </li>
          <li>
            <button>
              <div className='bg-yellow-300 h-12 w-12 flex items-center justify-center'>
                <Icon className='w-6 h-6 hover:scale-[1.1] duration-100' />
              </div>
            </button>
          </li>
          <li>
            <button>
              <div className='bg-red-300 h-12 w-12 flex items-center justify-center rounded-xl'>
                <Icon className='w-6 h-6 hover:scale-[1.1] duration-100' />
              </div>
            </button>
          </li>
          <li>
            <button>
              <div className='bg-green-300 h-12 w-12 flex items-center justify-center rounded-full '>
                <Icon className='w-6 h-6 hover:scale-[1.1] duration-100' />
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
      <div className='flex gap-4 items-center bg-slate-300 rounded-sm px-2 py-3 text-lg text-slate-600 hover:bg-slate-400'>
        <button className='flex items-center '>
          Download <RiArrowDropDownLine className='w-6 h-6' />
        </button>
      </div>
    </header>
  );
};

export default Navbar;
