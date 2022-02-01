import React, { useState,useEffect } from 'react';
import { Icon } from '@iconify/react';
import {useRouter} from 'next/router';
import Post from '../../components/Post'
import axios from 'axios';
import SideContainerProfileVisitor from '../../components/SideContainerProfileVisitor'

export const profilePage = ({user,posts}) => {
    const router = useRouter()
    console.log(user)
    const { id } = router.query
    const [isLoading,setIsLoading] = useState(true)
    const [userData,setUserData] = useState({})
    const [userPosts,setUserPosts] = useState({})
    useEffect(() => {
        if(typeof id !== 'undefined' && typeof user !== "string"){
            if(id === user._id) return router.push("/profile")
            getUser()

        }
    },[id,user])
    useEffect(() => {
        if(posts !== ''){
        setUserPosts(posts.filter(post => post.author._id === userData._id))

        }
    },[posts])
    const getUser = async () => {
        try{

            const requestUser = await axios.get(`https://vast-citadel-97852.herokuapp.com/api/users/${id}`)
            const result = requestUser.data
            setUserPosts(result.posts)
            setUserData(result)
            setIsLoading(false)
        }catch(e){
            console.log(e)
        }
      
    }
    const createFriendRequest = async () => {
        try {
          const data = {
            author:user._id,
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
  return (
  <div className=' w-full '>
    <div className='profile-container px-12 py-4 flex '>
        <SideContainerProfileVisitor user={user} userData={userData} isLoading={isLoading}/>
        <div className='w-3/4 mx-5 border shadow-md rounded container-post-profile bg-white'>
        {user._id == userData._id?(
            <div className='h-96 border-b w-full flex justify-center items-center banner-profile'>
                <Icon icon="bx:bx-image-alt" className='hidden' width="40px"/>

            </div>
        ):(
            <div className='h-96 border-b w-full flex justify-center items-center '>
                <Icon icon="bx:bx-image-alt" className='hidden' width="40px"/>

            </div>
        )}
            
            <div className='px-8 py-4 '>
                <div>
                    <div className='flex justify-between'>
                        <span className='text-2xl border-b'>{
                            userData.full_name
                            }
                        </span>
                        {user?(
                            <>
                            {[...user.friends].some(friend => friend._id === userData._id)?(
                                <button onClick={() => router.push('/messages')} className='submit px-2 rounded'>Send message!</button>
                            ):(
                                <>
                                {user.friend_requests.some(id => id === userData._id)?(
                                <button className='submit px-2 rounded'>
                                Notification Sended!
                                    
                                </button>
                                ):(
                                    <button onClick={createFriendRequest} className='submit px-2 rounded'>
                                    Send friend request!
                                </button>
                                )
                                }
                                </>
                          
                            )}

                            </>
                        ):(
                            null
                        )}
                    </div> 
                    <div>
                      {userPosts?(
                          <>
                              {userPosts.length?(
                               <>
                                <Post user={user} posts={userPosts}/>
                               </>
                              ):(
                            <div className='flex flex-col justify-center items-center my-6'>
                              <h1 className='text-gray-600'>This user don't have post's...</h1>
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
export default profilePage