import React from 'react';
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { Icon } from '@iconify/react';

export const Dropdown = (props) => {
  return (
    <Menu as="div" className="relative inline-block text-left">
    <div>
      <Menu.Button className="inline-flex justify-center w-full    px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none   focus:ring-offset-gray-100 ">
       
        <Icon  icon="gg:spinner" className={props.isLoading? 'block animate-spin bg-red':"hidden"}  width="24px" />
         {props.name}
         
        {props.dropDownIcon?(
          <Icon icon="bx:bxs-down-arrow" className='ml-2' className="-mr-1 ml-2 mt-1" aria-hidden="true" width="10" />
        ):(
          null
        )}
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
      <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
        <div className="py-1 ">
        {props.items.map((object,index) => {
            if(object.name === "Sign Out"){
                return (
                    <form key={index} method="POST" action="#">
                        <Menu.Item >
                        {({ active }) => (
                            <button
                            type="submit"
                            className={
                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                'block w-full text-left px-4 py-2 text-sm '
                            }
                            >
                            Sign out
                            </button>
                        )}
                        </Menu.Item>
                    </form>
                )
            }
            return(
                <Menu.Item key={index}> 
            {({ active }) => (
              <a
                onClick={() => object.delete()}
                href={object.url}
                className={
                  active ? 'bg-gray-100 text-gray-900 cursor-pointer' : 'text-gray-700',
                  'block px-4 py-2 text-sm cursor-pointer'
                }
              >
                {object.name}
              </a>
            )}
          </Menu.Item>
            )
           
        })}
        
         
      
        </div>
      </Menu.Items>
    </Transition>
  </Menu>
  );
};
export default Dropdown