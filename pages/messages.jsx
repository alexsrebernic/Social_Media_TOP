import React, { useEffect, useState } from 'react';
import { Icon } from '@iconify/react';
import Avatar from 'react-avatar';
import axios from 'axios';
export const messages = ({user,userChats}) => {
    const [userChatId,setUserChatId] = useState('')
    const [chat,setChat] = useState('')
    useEffect(() => {
        console.log(userChats)
        if(userChats !== ''){
            setChat(userChats.filter(chat => {
                if(chat.user1 === userChatId || 
                 chat.user2 === userChatId){
                     return chat
                 }
             }))
        }
       
    },[userChatId,userChats])
    console.log(chat)
    const sendMessage = async () => {
        if(userChatId === '') return
        const messageValue = document.getElementById("input-message").value
        try {

            const data = {
                user1:user._id,
                user2:userChatId,
                message:messageValue
            }
            const request = await axios({
                method: 'post',
                url: 'http://localhost:4000/api/message/send',
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
  <div className='w-full h-full flex px-10 py-12 '>
    <div className='border rounded-xl flex w-11/12 bg-white shadow-md'>
        <div className='border-r w-2/6'>
            <div>
                <div className='w-full  flex items-center justify-center p-3  title-side-chat border-b'><span>Messages</span></div>
                <div className='w-full px-6 py-3   my-1 '>
                    <div className='flex  items-center py-1 rounded-xl justify-between px-5 bg-gray-200'>
                        <input className='bg-gray-200 w-full' placeholder='Search chat' type="text" />
                        <Icon icon="entypo:magnifying-glass" width="18px" color="#bdbcbf"  />

                    </div>
                </div>
            </div>
            {user.chats?(

            <div className={user.friends.length?'container-chats   ':'container-chats flex justify-center items-center text-bold'}>
                 <>
                 {user.friends.length?(
                     <>
                        {user.friends.map((friend,index) => {
                            return(
                            <div onClick={() => setUserChatId(friend._id)} key={index} className={index === 0?"py-2 px-2  border-b border-t cursor-pointer hover:bg-gray-200 defaultanimation flex":"px-2 py-2  border-b cursor-pointer hover:bg-gray-200 defaultanimation flex"}>
                                <div>
                                    {friend.profile_img?(
                                        null
                                    ):(
                                        <Avatar name={friend.full_name} color='gray' className='avatar'   size="50" round={true}/>

                                    )}
                                </div>
                                <div className='h-full flex flex-col ml-2'>
                                    <span className=' '>{friend.full_name}</span>
                                    <span className='text-gray-500'>last message</span>
                                </div>
                            </div>
                            )
                         
                        })} 
                    </>
                ):(
                    <span className='text-gray-400'>You don't have any chat </span>
                )}
                 </>
            </div>
             ):(
                 <div className='container-chats flex justify-center items-center text-bold'>
                <Icon  icon="gg:spinner" className='block animate-spin bg-red my-5' width="35px" />

                 </div>

             )}
               
        </div>
        <div className='w-4/6 h-full'>
            <div className='h-full'>
                <div className='p-3 flex border-b top-chat-user'>
                {userChatId === ''?(
                    null
                ):(
                    <>
                    {user.friends.map((friend,index) => {
                        if(friend._id === userChatId){
                            return(
                                <>

                                    <div key={index}>  
                                    {friend.profile_img?(
                                        null
                                    ):(
                                        <>
                                        <a href={`/profile/${friend._id}`}>
                                        <Avatar name={friend.full_name} color='gray' className='avatar'   size="40" round={true}/>
                                        </a>
                                        </>
                                    )}</div>
                                    <a href={`/profile/${friend._id}`}>
                                    <div className='ml-3'>
                                        <span className=' '>{friend.full_name}</span>
                                    </div>
                                    </a>
                                </>
                            )
                        }
                    })}
                  
                    </>
                )}
                   
                </div>
                <div className='h-5/6  container-chat flex flex-col justify-between'>
                    <div className=' h-full overflow-auto container-messages-chat flex flex-col  justify-end  py-6'>
                        {chat.length?(
                            <>
                                {chat.map((chat) => {
                                    return (
                                        <div className='overflow-y-auto px-16'>
                                        {chat.messages.map((message,index) => {
                                            return(
                                                <>
                                                    {message.author === user._id?(
                                                        <div className='w-full flex justify-end items-center'>
                                                        <span className='flex justify-end items-center text-white bg-blue-500 my-2 px-2 py-2 rounded w-fit'>
                                                            {message.message}
                                                        </span>
                                                        </div>
                                                    ):(
                                                        <div className='w-full flex justify-start items-center'>
                                                        <span className='flex justify-end items-center text-white  bg-gray-500 my-4 px-2 py-3 rounded w-fit'>
                                                            {message.message}
                                                        </span>
                                                        </div>
                                                    )}
                                                </>
                                            )
                                        })}
                                        </div>
                                    )
                                })}
                            </>
                        ):(
                            null
                        )}
                    </div>
                    <div className='h-12 border-t'>
                        <div className='flex px-3'>
                            <input className='bg-gray-200 my-2 w-full rounded-xl p-1 pl-3' placeholder='Message' type="text" id='input-message' />
                            <button onClick={sendMessage} className=' send-message-button my-2 px-2 rounded text-white ml-2'>Send</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
  </div>
  );
};
export default messages