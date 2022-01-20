import React from 'react';
import { Icon } from '@iconify/react';
import Link from 'next/link';
const Sidebar = () => {
  return (
      <div className='w-72 sidebar  z-0 flex flex-col justify-between '> 
          <div className='w-full mt-16 options-sidebar'>
              <Link href="/">
                <div className='p-4 flex items-center cursor-pointer ' tabIndex={1}>
                    <Icon icon="ant-design:home-filled" color="#e5e5e7" width="30" />
                    <span className='ml-2'>Home</span>
                </div>
              </Link>
              <Link href="/messages">
                <div className='p-4 flex items-center cursor-pointer ' tabIndex={1}>
                    <Icon icon="ant-design:mail-outlined" width="30px" color="#e5e5e7" />
                    <span className='ml-2'>Messages</span>
                </div>
              </Link>
             
              <Link href="/">
                <div className='p-4 flex items-center cursor-pointer   'tabIndex={1}>
                    <Icon icon="eva:trending-up-fill" width="30px" color="#e5e5e7" />
                    <span className='ml-2'> Trending posts</span>
                </div>
              </Link>
              <Link href="/">
                <div className='p-4 flex items-center cursor-pointer   'tabIndex={1}>
                    <Icon icon="vs:profile" width="30px" color="#e5e5e7" />
                    <span className='ml-2'> Profile</span>
                </div>
              </Link>
              <Link href="/">
                <div className='p-4 flex items-center cursor-pointer   'tabIndex={1}>
                    <Icon icon="clarity:settings-solid" width="30px" color="#e5e5e7" />
                    <span className='ml-2'>Settings</span>
                </div>
              </Link>
          </div>

              <div className='flex flex-col items-center'> 
                  <span className='flex text-sm items-center'>Made with <Icon className='mx-1' icon="ant-design:heart-filled" width="15" /> by Alex Srebernic 2022</span>
                  <div className='flex my-2'>
                      <a className='mx-2' href="https://github.com/alexsrebernic">
                        <Icon icon="akar-icons:github-fill" width="20" />
                      </a>
                      <a className='mx-2' href="https://www.linkedin.com/in/alex-srebernic-201427213/">
                        <Icon icon="akar-icons:linkedin-fill" width="20" />
                      </a>
                  </div>
              </div>
      </div>
  );
};
export default Sidebar