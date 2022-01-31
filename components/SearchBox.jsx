import { Fragment, useEffect, useState } from 'react'
import { Menu, Transition } from '@headlessui/react'
import React from 'react';
import Avatar from 'react-avatar';

export const SearchBox = ({users}) => {
    const [isOpen,setSearchBox] = useState(false)
    const [inputValue,setInputValue] = useState("")
    const [filteredUsers,setFilterUsers] = useState([])
    const handleInput = (e) => {
      setInputValue(e.target.value)
  }
  useEffect(() => {
    if(users !== ''){
    if(inputValue === '')return setFilterUsers([])
    setFilterUsers(users.filter(user => user.full_name.includes(inputValue)))

    }
  },[inputValue])
    return (
    <Menu as="div" className="w-full" >

    <div  className="relative w-full inline-block text-left">
    <div className='w-full'>
      <input onClick={() => setSearchBox((isShowing) => !isShowing)} onChange={(e) => handleInput(e)} id='search-input' type="text" placeholder='Search' className='p-2 w-full ' aria-haspopup="true" aria-expanded="true" aria-controls="headlessui-menu-items-300"/>
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
        <div className={filteredUsers.length?"py-1 ":"py-1 h-full flex flex-col items-center justify-center text-bold"}>
        {filteredUsers.length?(
            <>
            {filteredUsers.map((object,index) => {
            return(
                <Menu.Item key={index}> 
            {({ active }) => (
              <a
                href={`/profile/${object._id}`}
                className={
                  active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                  'block px-4 h-16 text-sm py-2 border-b flex items-center'
                }
              >
                <Avatar name={object.full_name} color='gray' className='avatar'   size="40" round={true}/>
               <span className='ml-2'>{object.full_name}</span>
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
  </Menu>

  );
};
export default SearchBox