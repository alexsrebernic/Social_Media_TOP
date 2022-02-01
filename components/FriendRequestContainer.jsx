import React, { useEffect, useState } from 'react';
import Avatar from 'react-avatar';
import { Icon } from '@iconify/react';
import Link from 'next/link';
import axios from 'axios';
export const FriendRequestContainer = ({users,currentUser}) => {
  const [arrayOfFriends,setArrayOfFriends] = useState([])
  const createFriendRequest = async (id) => {
    try {
      const data = {
        author:currentUser._id,
        user:id
      }
      console.log(data)
      const request = await axios({
        method: 'post',
        url: 'https://vast-citadel-97852.herokuapp.com/api/notifications/send_friend_request',
        data,
        headers:{
          "Content-Type":"application/json"
        },
      });
    } catch(e){
      console.log(e)
    }
  
  }
  useEffect(() => {
    if(users !== ""){
      const friendsArray = [...currentUser.friends]
      setArrayOfFriends(users.filter(o1 => !friendsArray.some(o2 => o1._id === o2._id)).splice(0,3))
    }
  },[users,currentUser])
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
                            {}
                              <button onClick={() => createFriendRequest(user._id)}>
                              {currentUser.friend_requests.some(id => id === user._id)?(
                                <span>Notification sended!</span>
                              ):(
                                <Icon icon="majesticons:user-add" width="30px" className='cursor-pointer defaultanimation hover:text-gray-400' />

                              )}
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
            <div className='flex items-center justify-center text-blue-500'>
              <Link href={"/all_users"}>See more</Link>
            </div>
        </div>
      </div>
  );
};
export default FriendRequestContainer