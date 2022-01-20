import { Fragment, useEffect, useState } from 'react'
import { Menu, Transition } from '@headlessui/react'
import React from 'react';

export const SearchBox = () => {
    const [isOpen,setSearchBox] = useState(false)
    const items = []
  return (
    <div  className="relative w-full inline-block text-left">
    <div>
      <input onClick={() => setSearchBox((isShowing) => !isShowing)} type="text" placeholder='Search' className='p-2 w-full ' aria-haspopup="true" aria-expanded="true" aria-controls="headlessui-menu-items-300"/>
    </div>

    <Transition
      show={isOpen}
      as={Fragment}
      enter="transition ease-out duration-100"
      enterFrom="transform opacity-0 scale-95"
      enterTo="transform opacity-100 scale-100"
      leave="transition ease-in duration-75"
      leaveFrom="transform opacity-100 scale-100"
      leaveTo="transform opacity-0 scale-95"
    >
      <div id='box-search-query' className="block origin-top-right overflow-y-auto  over absolute right-120 mt-2 container-query-box h-96 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
        <div className={items.length?"py-1 ":"py-1 h-full flex flex-col items-center justify-center text-bold"}>
        {items.length?(
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
            <span className='text-gray-400'>No search's</span>
        )}
        </div>
      </div>
    </Transition>
  </div>
  );
};
export default SearchBox