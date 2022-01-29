import React, { useEffect, useState } from 'react';
import { Icon } from '@iconify/react';
import Link from 'next/link';
import Dropdown from './Dropdown';
import DropdownNMF from './DropdownNMF'
import SearchBox from './SearchBox'
import Avatar from 'react-avatar';
const Header = ( {user,} ) => {
    const [isLoading,setIsLoading] = useState(true)
    const [userData,setUserData] = useState({})
    useEffect(() => {
        if(user !== ""){
            setIsLoading(false)
        }
        setUserData(user)
    },[user])
 
    const itemsProfile = [
        {name:"Profile",url:"/profile"},
        {name:"Settings",url:"/settings"},
        {name:"Sign Out",url:"/sign_out"}

    ]
    return (
      <header className='flex w-full justify-between h-20  px-10 sticky'>
        <div className='flex items-center  justify-around w-3/5 '>
            <div className='logo'>
                <a href="/">
                <Icon icon="brandico:facebook-rect" className='cursor-pointer' color="#3a3b6a" width="40" />
                </a>
            </div>
            <div className='flex items-center mr-20 justify-between input-search w-3/4 h-10'> 
                    <SearchBox/>
                    <Icon icon="entypo:magnifying-glass" width="28px" color="#bdbcbf"  />
            </div>
        </div>
        <div className='flex items-center w-2/5 px-3'>
            <div className='flex items-center px-3 mx-2'>
                {userData?(
                    <>
                        {typeof userData.profileImg !== 'undefined'?(
                            
                            <h1>asdasd</h1>
                        ):(
                            <Avatar name={userData.full_name} color='gray' className='avatar'   size="40" round={true}/>
                        )}
                    </>
                ):(
                    null
                )}
                <Dropdown isLoading={isLoading} name={userData.full_name} items={itemsProfile} dropDownIcon={true}/>

            </div>
            <div className=''>
                <Link href="/">
                <span className='px-3 mr-4 cursor-pointer'>Home</span>

                </Link>

            </div>
            <div className='flex ml-5 interactions-header'>
               {userData.notifications && userData.friends && userData.chats?(
                <>
                    <DropdownNMF name={<Icon icon="fa-brands:facebook-messenger" className={'mx-2 cursor-pointer'} width="25px" color="#e8e8e8" />} title="Messages" items={userData.chats}  noItemsMessage="You don't have any messages"/>
                    <DropdownNMF name={<Icon icon="ci:notification" className={userData.notifications.length?'mx-2 cursor-pointer':'mx-2 cursor-pointer'} width="25px" color="#e8e8e8" />} items={userData.notifications} title="Notifications"  noItemsMessage="You dont have any notification"/>
                    <DropdownNMF name={<Icon icon="fa-solid:user-friends" className='mx-2 cursor-pointer' width="25px" color="#e8e8e8" />} items={userData.friends} title="Friends"  noItemsMessage="You dont have any friends :("/>
                </>
               )
               :(
                   null
               )}

               
                
            </div>
        </div>
      </header>
  );
};
export default Header