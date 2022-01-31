import React, { useState,useEffect } from 'react';
import { Icon } from '@iconify/react';
import SideContainerProfile from '../components/SideContainerProfile';
import Post from '../components/Post'
import axios from 'axios';
import InputPost from '../components/InputPost'
export const profile = ({user,posts,setArrayOfPosts}) => {
    const [isLoading,setIsLoading] = useState(true)
    const [userData,setUserData] = useState({})
    const [userPosts,setUserPosts] = useState({})
    useEffect(() => {
        if(user !== ""){
            setIsLoading(false)

        }
        setUserData(user)

    },[user])
   
    useEffect(() => {
        if(posts !== ''){
        setUserPosts(posts.filter(post => post.author._id === user._id))

        }
    },[posts])
  return (
  <div className=' w-full '>
    <div className='profile-container px-12 py-4 flex '>
        <SideContainerProfile userData={userData} isLoading={isLoading}/>
        <div className='w-3/4 mx-5 border shadow-md rounded container-post-profile bg-white'>
            <div className='h-96 border-b w-full flex justify-center items-center banner-profile'>
                <Icon icon="bx:bx-image-alt" className='hidden' width="40px"/>

            </div>
            <div className='px-8 py-4 '>
                <div>
                    <div>
                        <span className='text-2xl border-b'>{
                            userData.full_name
                            }
                            
                            </span>
                    </div> 
                    <div>
                      {userPosts?(
                          <>
                              {userPosts.length?(
                               <>
                                <Post setArrayOfPosts={setArrayOfPosts} user={user} posts={userPosts}/>
                               </>
                              ):(
                            <div className='flex flex-col justify-center items-center my-6'>
                              <h1 className='text-gray-300'>You don't have post's</h1>
                              <button className='px-3 py-2 submit rounded my-4'>Make one here!</button>
                          </div>
                              )}
                          </>
                         
                      ):(
                          <div className='flex justify-center items-center my-6'>
                        <Icon  icon="gg:spinner" className={isLoading? 'block animate-spin bg-red':"hidden"}  width="50px" />

                          </div>
                      )}
                    </div>

                </div>
                
            </div>
        </div>

    </div>
  </div>);
};
export default profile