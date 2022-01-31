import React from 'react';
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { Icon } from '@iconify/react';
import Avatar from 'react-avatar';
import axios from 'axios';
import Router, { useRouter } from 'next/router';
import Link from 'next/link';

export const DropdownNMF = (props) => {
  const router = useRouter()
  const acceptFriendRequest = async (idAuthor,idNotification) => {
    try {
      const data = {
        author:idAuthor,
        user:props.user,
        idNotification,
      }
      const request = await axios({
        method: 'post',
        url: 'http://localhost:4000/api/notifications/accept_friend_request',
        data,
        headers:{
          "Content-Type":"application/json"
        },
      })
    } catch(e){
      console.log(e)
    }
  
  }
  const refuseFriendRequest = (idNotification) => {
    updateNotification(idNotification)

  }
  const updateNotification =async (id,post) => {
    console.log("start")
    try {
      const data = {
        user:props.user
      }
      const request = axios.post(`http://localhost:4000/api/notification/${id}`,data).then(() => {
        console.log("asd")
      })

    } catch(e){
      console.log(e)
    }
  }
  return (
    <Menu as="div" className="relative inline-block text-left">
    <div>
      <Menu.Button className="inline-flex justify-center w-full    px-1 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none   focus:ring-offset-gray-100 ">
        {props.name}
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
      <Menu.Items className=" origin-top-right overflow-y-auto  over absolute right-0 mt-2 w-96  h-96 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
        <div className='bg-gray-200 text-bold flex items-center justify-center py-2'><span className='text-white'>{props.title}</span></div>
        {props.items?(
          <div className={props.items.length?"py-1 ":"py-1 h-full flex flex-col items-center justify-center text-bold"}>
        {props.items.length?(
            <>
            {props.items.map((object,index) => {
              if(object.comment){
                return(
                  <Menu.Item   key={index}> 
                      {({ active }) => (
                        <Link  href={`/post/${object.post}`}
                         >

                        <div onClick={() => {updateNotification(object._id)}}  className={!(object.clicked)?"bg-gray-100":"bg-white ",'block px-4 h-16 text-sm py-2 border-b flex items-center'}>
                         
                        <>
                        <Avatar name={object.author.full_name} color='gray' className='avatar'   size="40" round={true}/>
                        <span className='ml-3'>{object.author.full_name} has commented in your post</span>
                        <span className={!(object.clicked)?"ml-3 w-2 h-2 rounded-full bg-blue-500":"hidden"}></span>
                        </>
                        </div>
                        </Link>

                      )}
                  
                  </Menu.Item>
                ) 
              }else if(object.like){
                return(
                  <Menu.Item  key={index}> 
                  {({ active }) => (
                    <Link
                          href={`/post/${object.post}`}
                          className={
                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                            'block px-4 h-16 text-sm py-2 border-b flex items-center'
                          }
                        >
                        <div onClick={() => {updateNotification(object._id)}} className={!(object.clicked)?"bg-gray-100":"bg-white ",'block px-4 h-16 text-sm py-2 border-b flex items-center'}>
                      
                        <>
                        <Avatar name={object.author.full_name} color='gray' className='avatar'   size="40" round={true}/>
                        <span className='ml-3'>{object.author.full_name} has liked your post</span>
                        <span className={!(object.clicked)?"ml-3 w-2 h-2 rounded-full bg-blue-500":"hidden"}></span>
                        </>
                        </div>
                        </Link>

                      )}
                  </Menu.Item>
                )
              } else if(object.friend_request){

                return(
                  <Menu.Item  key={index}> 
                  {({ active }) => (
                        <div className={!(object.clicked)?"bg-gray-100":"bg-white "}>
                        <div
                          className={
                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                            'block px-4 h-16 text-sm py-2 border-b flex items-center'
                          }
                        >
                        <Avatar name={object.author.full_name} color='gray' className='avatar'   size="40" round={true}/>
                        <span className='ml-3'>{object.author.full_name} has send you a friend request</span>
                        <span className={!(object.clicked)?"block flex":"hidden"}>
                        <button onClick={() =>{ acceptFriendRequest(object.author._id,object._id)}} className='mr-3'><Icon icon="charm:tick" width="25px" className='cursor-pointer' color="#74c667"/></button>
                        <button onClick={() => refuseFriendRequest(object._id)}><Icon className='cursor-pointer' icon="bi:x" width="25px" color="#d64828" /></button>
                        </span>
                        </div>
                        </div>
                      )}
                  </Menu.Item>
                )
              }
              return (
                <Menu.Item   key={index}> 
                      {({ active }) => (
                        <div className="bg-white ">
                        <a
                          href={`/profile/${object._id}`}
                          className={
                            active ? 'bg-gray-100 text-gray-900 w-full' : 'text-gray-700',
                            'block px-4 h-16 text-sm py-2 border-b flex items-center w-full flex justify-between'
                          }
                        >
                        <span>
                        <Avatar name={object.full_name} color='gray' className='avatar'   size="40" round={true}/>
                        <span className='ml-3'>{object.full_name} </span>

                        </span>
                     
                        <button onClick={() => router.push('/messages')} className='submit py-2 px-1 rounded text-sm'>Send a message!</button>
                        </a>
                        </div>
                      )}
                  
                  </Menu.Item>
              )
        })}

            </>
        ):(
            <span className='text-gray-400'>{props.noItemsMessage}</span>
        )}
        </div>
        ):(
          <div className='py-1 h-full flex flex-col items-center justify-center text-bold'>
        <Icon  icon="gg:spinner" className='block animate-spin bg-red'  width="24px" />
        </div>
        )}
       
      </Menu.Items>
    </Transition>
  </Menu>
  );
};
export default DropdownNMF