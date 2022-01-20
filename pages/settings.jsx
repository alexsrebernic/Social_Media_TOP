import React from 'react';
import MyToggle from '../components/Toggle';
import { Icon } from '@iconify/react';

export const settings = () => {
  return (
  <div className='w-full h-full'>
      <div className='px-10 py-12'>
        <div><h1 className='text-4xl font-bold border-b py-2'>Settings</h1></div>
            <div className='py-6 flex flex-col items-start justify-center'>
                <span className='p-4'>
                    <span className='text-xl text-center '>Change theme</span>
                    <div className='flex items-center  border-t pt-2'>
                        <Icon icon="carbon:light"  />
                            <MyToggle/>
                        <Icon icon="fluent:dark-theme-20-filled" />
                    </div>
                </span>
                <span className='p-4'>
                    <span className='text-xl'>Delete account</span>
                    <div className='flex items-center border-t pt-2 '>
                        <button className='px-3 py-1 rounded-xl border-red-500 border-2 text-red-500 hover:bg-red-500 hover:text-white'>Delete</button>
                    </div>
                </span>
               
            </div>
      </div>
  </div>);
};
export default settings