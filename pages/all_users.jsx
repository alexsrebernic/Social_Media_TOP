import Link from 'next/link';
import React from 'react';
import Avatar from 'react-avatar';
import { Icon } from '@iconify/react';
import axios from 'axios';
const all_users = ({users,user}) => {
    const createFriendRequest = async (id) => {
        try {
          const data = {
            author:user._id,
            user:id
          }
          console.log(data)
          const request = await axios({
            method: 'post',
            url: 'http://localhost:4000/api/notifications/send_friend_request',
            data,
            headers:{
              "Content-Type":"application/json"
            },
          });
        } catch(e){
          console.log(e)
        }
      
      }
  return (
    <div className='w-full h-full flex justify-center items-start mt-24'>
        <div className='border rounded w-1/2 h-fit shadow flex flex-col'>
        {users !== ''?(
            <>
                {users.map((userList,index) => {
                    if(userList._id === user._id) return null
                    return(
                            <div key={index} className='flex items-center justify-between px-6'>
                        <Link href={`/profile/${userList._id}`}>

                            <div className=' py-3 cursor-pointer'>
                                <Avatar name={userList.full_name} color='gray' className='avatar'   size="50" round={true}/>
                                <span className='ml-2'>{userList.full_name}</span>
                            </div> 
                        </Link>

                            <div>
                                {user.friends.some(friend => friend._id === userList._id)?(
                                    "Friend"

                                ):(
                                    <button onClick={() => createFriendRequest(userList._id)}>
                                        {user.friend_requests.some(id => id === userList._id)?(
                                            <span>Notification sended!</span>
                                        ):(
                                            <Icon icon="majesticons:user-add" width="30px" className='cursor-pointer defaultanimation hover:text-gray-400' />

                                        )}
                              </button>
                                )}
                            </div>
                            </div>
                    )
                })}
            </>
        ):(
            null
        )}
           
        </div>
    </div>
    );
};
export default all_users