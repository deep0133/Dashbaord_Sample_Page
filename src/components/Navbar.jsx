import { useState } from "react";

export default function Navbar() {
  const [menu, setMenu] = useState(false);
  return (
    <nav className='responsive-width flex justify-between items-center py-3'>
      <h2 className='font-bold text-xl'>Proo.AI</h2>
      <div className='menu flex gap-5 items-center justify-center'>
        <img
          src='https://i.pinimg.com/originals/ae/ec/c2/aeecc22a67dac7987a80ac0724658493.jpg'
          alt='profile'
          className='profile size-8 rounded-full border'
        />
        <div
          className='flex gap-6 items-center relative'
          onClick={() => {
            setMenu(!menu);
          }}
        >
          <div className='name'>
            <h3 className='font-medium text-lg'>Abhishek Singh</h3>
            <p className='text-sm text-gray-400 -mt-1'>Campaign Planner</p>
          </div>
          <i>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='size-6'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='m19.5 8.25-7.5 7.5-7.5-7.5'
              />
            </svg>
          </i>
          {menu && <ShowMenu />}
        </div>
      </div>
    </nav>
  );
}

const ShowMenu = () => {
  return (
    <div className='absolute p-3 border-b-2 top-12 right-0 pr-16 '>
      <div className='flex gap-2 items-center'>
        <div className='w-2 h-3 bg-yellow-400'></div>
        <p className='text-gray-400 text-sm '>Plan Creator</p>
      </div>
      <h3 className='font-medium mt-1 text-nowrap'>Mohan Lal Singh</h3>
    </div>
  );
};
