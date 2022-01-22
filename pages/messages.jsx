import React from 'react';
import { Icon } from '@iconify/react';
export const messages = () => {
    const chats = []
  return (
  <div className='w-full h-full flex px-10 py-12 '>
    <div className='border rounded-xl flex w-11/12 '>
        <div className='border-r w-2/6'>
            <div>
                <div className='w-full flex items-center justify-center p-3  title-side-chat border-b'><span>Messages</span></div>
                <div className='w-full px-6 py-3   my-1 '>
                    <div className='flex  items-center py-1 rounded-xl justify-between px-5 bg-gray-200'>
                        <input className='bg-gray-200 w-full' placeholder='Search chat' type="text" />
                        <Icon icon="entypo:magnifying-glass" width="18px" color="#bdbcbf"  />

                    </div>
                </div>
            </div>
            <div className={chats.length?'container-chats  px-3 ':'container-chats flex justify-center items-center text-bold'}>
                {chats.length?(
                    <h1>Message random</h1>
                ):(
                    <span className='text-gray-400'>You don't have any chat </span>
                )}
            </div>
        </div>
        <div className='w-4/6'>
            <div className='h-full'>
                <div className='p-3 flex border-b'>
                    <div>IMG</div>
                    <div className='ml-3'>
                        EXAMPLE NAME
                    </div>
                </div>
                <div className='h-5/6 container-chat flex flex-col justify-between'>
                    <div className='h-full container-messages-chat'></div>
                    <div className='h-12 border-t'>
                        <div className='flex px-3'>
                            <input className='bg-gray-200 my-2 w-full rounded-xl p-1 pl-3' placeholder='Message' type="text" />
                            <button className=' send-message-button my-2 px-2 rounded text-white ml-2'>Send</button>
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