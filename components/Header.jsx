import React from 'react';
import { Icon } from '@iconify/react';
import Link from 'next/link';
import Dropdown from './Dropdown';
import DropdownNMF from './DropdownNMF'
import SearchBox from './SearchBox'
const Header = (  ) => {
  return (
      <header className='flex w-full justify-between h-20  px-10 sticky'>
        <div className='flex items-center  justify-around w-3/5 '>
            <div className='logo'>
                <Link href="/">
                <Icon icon="brandico:facebook-rect" className='cursor-pointer' color="#3a3b6a" width="40" />
                </Link>
            </div>
            <div className='flex items-center mr-20 justify-between input-search w-3/4 h-10'> 
                    <SearchBox/>
                    <Icon icon="entypo:magnifying-glass" width="28px" color="#bdbcbf"  />
            </div>
        </div>
        <div className='flex items-center w-2/5 px-3'>
            <div className='flex items-center px-3 mx-2'>
                <Icon icon="carbon:user-avatar" width="45px" className='cursor-pointer' color="#bdbcbf" />
                <Dropdown name="Alex Srebernic" items={["Profile","Settings","Sign Out"]}/>

            </div>
            <div className=''>
                <Link href="/">
                <span className='px-3 mx-1 cursor-pointer' >Create Post</span>
                </Link>
                <Link href="/">
                <span className='px-3 mr-4 cursor-pointer'>Home</span>

                </Link>

            </div>
            <div className='flex ml-5 interactions-header'>
                <DropdownNMF name={<Icon icon="fa-brands:facebook-messenger" className='mx-2 cursor-pointer' width="25px" color="#e8e8e8" />} title="Messages" items={[]} noItemsMessage="You don't have any messages"/>
                <DropdownNMF name={<Icon icon="ci:notification" className='mx-2 cursor-pointer' width="25px" color="#e8e8e8" />} items={[]} title="Notifications" noItemsMessage="You dont have any notification"/>
                <DropdownNMF name={<Icon icon="fa-solid:user-friends" className='mx-2 cursor-pointer' width="25px" color="#e8e8e8" />} items={[]} title="Friends" noItemsMessage="You dont have any friends :("/>

               
                
            </div>
        </div>
      </header>
  );
};
export default Header