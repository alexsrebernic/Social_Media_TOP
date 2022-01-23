import React, { useState,useEffect } from 'react';
import { Icon } from '@iconify/react';
export const profile = ({user}) => {
    const [isLoading,setIsLoading] = useState(true)
    const [userData,setUserData] = useState({})
    useEffect(() => {
        if(user !== ""){
            setIsLoading(false)
        }
        setUserData(user)
    },[user])
  return (
  <div className=' w-full '>
    <div className='profile-container px-12 py-4 flex '>
        <div className='w-1/4 border shadow-md rounded side-container-profile bg-white'>
            <div className='h-96 flex items-center justify-center border-b container-image-profile' >
                <div className='border w-72 h-72 rounded-full shadow flex justify-center items-center'>
                <Icon icon="bx:bx-image-alt" className='hidden' width="40px"/>
                </div>
            </div>
            <div className='mt-8 px-8 border-b pb-6'>
                <div className=''>
                    <h1 className='text-2xl border-b flex items-center'>About me: 
                    <Icon icon="ant-design:edit-filled" className='cursor-pointer hover:text-gray-300 ml-4'  width="25px" />
                    
                    </h1>
                </div>
                <div>
                    <span className=''>
                    <Icon  icon="gg:spinner" className={isLoading? 'block animate-spin bg-red':"hidden"}  width="15px" />
                    </span>
                </div>
                <div className='mt-4'>
                    <ul>
                        <li className='py-1 flex items-center justify-between'><span>Gender:
                        <Icon  icon="gg:spinner" className={isLoading? 'block animate-spin bg-red':"hidden"}  width="15px" />
                        
                        <span>{userData.gender}</span></span> <Icon icon="ant-design:edit-filled" className='cursor-pointer  hover:text-gray-300 ' width="25px" /></li>
                        <li className='py-1 flex items-center justify-between'>
                        <span>Location/City: 
                        <Icon  icon="gg:spinner" className={isLoading? 'block animate-spin bg-red':"hidden"}  width="15px" />
                        <span></span> </span> <Icon icon="ant-design:edit-filled" className='cursor-pointer hover:text-gray-300 ' width="25px" /></li>
                        <li className='py-1 flex items-center justify-between'>
                        <span>Date of Birth:
                        <Icon  icon="gg:spinner" className={isLoading? 'block animate-spin bg-red':"hidden"}  width="15px" />
                        <span >{userData.date_of_birth}</span> </span> <Icon icon="ant-design:edit-filled" className='cursor-pointer hover:text-gray-300 '  width="25px" /></li>

                    </ul>
                </div>
            </div>
            <div className='mt-8 px-8 border-b pb-6'>
                <div className='flex'>
                    <h1 className='text-2xl '>Friends <span>
                    {userData.friends?(
                    <>
                        {userData.friends.length}
                    </>
                    ):(
                        <Icon  icon="gg:spinner" className={isLoading? 'block animate-spin bg-red my-5':"hidden"}  width="15px" />
                    )}
                    </span></h1>
                </div>
                {isLoading?(
                    <div className='flex justify-center items-center'>
                    <Icon  icon="gg:spinner" className={isLoading? 'block animate-spin bg-red my-5':"hidden"}  width="55px" />
                    </div>
                ):(
                    <>
                    {userData.friends.length?(
                    <div className='grid grid-cols-3 grid-rows-3 mt-2'>
                        <div className='w-24 h-24 border mb-2 shadow'></div>
                        <div className='w-24 h-24 border shadow'></div>
                        <div className='w-24 h-24 border shadow'></div>
                        <div className='w-24 h-24 border shadow'></div>
                        <div className='w-24 h-24 border shadow'></div>
                        <div className='w-24 h-24 border shadow'></div>
                        <div className='w-24 h-24 border shadow'></div>
                        <div className='w-24 h-24 border shadow'></div>
                        <div className='w-24 h-24 border shadow'></div>
                    </div>
                    ):(
                        <div className='flex flex-col my-5 justify-center items-center justify-center'>
                            <span>You don't have friends :(</span>
                            <button className='px-3 py-2 submit rounded my-4'>Discover friends here!</button>
                        </div>
                    )}
                        
                    </>
                  
                )}
                    
                <div>

                </div>
            </div>
        </div>
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
                            <Icon  icon="gg:spinner" className={isLoading? 'block animate-spin bg-red':"hidden"}  width="24px" />
                            
                            </span>
                    </div>
                    <div>
                      {userData.posts?(
                          <>
                              {userData.posts.length?(
                                userData.posts.map(() => {
                              <div>

                              </div>
                          })
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