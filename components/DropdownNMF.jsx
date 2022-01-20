import React from 'react';
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { Icon } from '@iconify/react';

export const DropdownNMF = (props) => {
    console.log(props)
  return (
    <Menu as="div" className="relative inline-block text-left">
    <div>
      <Menu.Button className="inline-flex justify-center w-full   shadow-sm px-1 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none   focus:ring-offset-gray-100 ">
        {props.name}
      </Menu.Button>
    </div>

    <Transition
      as={Fragment}
      enter="transition ease-out duration-100"
      enterFrom="transform opacity-0 scale-95"
      enterTo="transform opacity-100 scale-100"
      leave="transition ease-in duration-75"
      leaveFrom="transform opacity-100 scale-100"
      leaveTo="transform opacity-0 scale-95"
    >
      <Menu.Items className=" origin-top-right overflow-y-auto  over absolute right-0 mt-2 w-96  h-96 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
        <div className='bg-gray-200 text-bold flex items-center justify-center py-2'><span className='text-white'>{props.title}</span></div>
        <div className={props.items.length?"py-1 ":"py-1 h-full flex flex-col items-center justify-center text-bold"}>
        {props.items.length?(
            <>
            {props.items.map((name,index) => {
            return(
                <Menu.Item key={index}> 
            {({ active }) => (
              <a
                href="#"
                className={
                  active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                  'block px-4 h-16 text-sm py-2 border-b flex items-center'
                }
              >
               <span>{name}</span>
              </a>
            )}
          </Menu.Item>
            )
        })}

            </>
        ):(
            <span className='text-gray-400'>{props.noItemsMessage}</span>
        )}
  
        
         
      
        </div>
      </Menu.Items>
    </Transition>
  </Menu>
  );
};
export default DropdownNMF