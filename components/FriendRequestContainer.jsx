import React, { useEffect, useState } from 'react';
import Avatar from 'react-avatar';
import { Icon } from '@iconify/react';
import Link from 'next/link';
export const FriendRequestContainer = ({users,currentUser}) => {
  const [arrayOfFriends,setArrayOfFriends] = useState([])
  useEffect(() => {
    if(users !== ""){
      setArrayOfFriends(users.slice(0,4))
    }
  },[users])
return (
<div className="container-friend-request  px-12 w-2/5 my-6 py-3 ">
        <div className='border w-11/12 h-80 shadow-xl rounded-md bg-white'>
            <div className='px-6 py-4 flex justify-center items-center bg-first text-white text-xl rounded-t-md'>
              <h1>Meet people!</h1>
            </div>
            <div>
              {arrayOfFriends?(
                <>
                  {arrayOfFriends.length?(
                    <>
                      {arrayOfFriends.map((user,index) => {
                        if(user._id === currentUser._id) return null
                        return (
                          <div key={index} className='flex items-center justify-between py-5 px-6'>
                            <Link href={`/profile/${user._id}`}>
                              <div  className='cursor-pointer'>
                                {typeof user.profile_img === "undefined"?(
                                  <Avatar name={user.full_name} color='gray' className='avatar'   size="40" round={true}/>

                                ):(
                                  <img src={user.profile_img} alt="" />
                                )}
                                <span className='ml-3'>{user.full_name}</span>
                              </div>
                            </Link>
                            <div>
                              <button>
                                <Icon icon="majesticons:user-add" width="30px" className='cursor-pointer defaultanimation hover:text-gray-400' />
                              </button>
                            </div>
                          </div>
                        )
                      })}
                    </>
                  ):(
                    null
                  )}
                </>
              ):(
                <Icon  icon="gg:spinner" className='block animate-spin bg-red' width="50px" />

              )}
            </div>
        </div>
      </div>
  );
};
export default FriendRequestContainer