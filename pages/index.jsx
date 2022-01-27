import Head from 'next/head'
import { Icon } from '@iconify/react'
import { useEffect, useState } from 'react'
import PostLoad from '../components/postLoad'
import Post from '../components/Post'
import InputPost from '../components/InputPost'
import FriendRequestContainer from '../components/FriendRequestContainer'
import axios from 'axios'
export default function Home({user,posts,users,setArrayOfPosts}) {
  const [page,setPage] = useState(0)
  const [isLoading,setIsLoading] = useState(false)
  useEffect(() => {
    if(page === 0) return
    paginatePost()
  },[page])
  const paginatePost = async (e) => {
    setIsLoading(true)
    try {
      const request =await axios.get(`http://localhost:4000/api/posts/${page}`)
      const result = request.data.result
      setIsLoading(false)
      if(result.length > 0){
        setArrayOfPosts(oldArray => [...oldArray,...result])
      } else {
        return 
      }
    } catch(error){
      console.log(error)
      setIsLoading(false)

    }
  }
  return (
    <div className="w-full">
      <div className='px-4 mx-6  home-container flex'>
        <div className="container-posts w-3/5 px-5 my-6 py-3 mx-3 flex flex-col justify-start items-center">
            <div className='w-full   rounded '>
              <InputPost user={user}/>
              <div className='container-posts-users '>
                  {posts !== ""?(
                    <>
                      {posts.length?(
                        <>
                          <Post setArrayOfPosts={setArrayOfPosts} user={user} posts={posts}/>
                        </>
                      ):(
                        <div className='flex justify-center items-center my-6 text-gray-400'>
                          <h1>No posts today.</h1>
                        </div>
                      )}
                    </>
                    
                  ):(

                    <>
                      <PostLoad/>
                      <PostLoad/>
                      <PostLoad/>

                    </>

                  )}
              </div>
              <div className='py-8 flex justify-center '>
                
                <button onClick={(e) =>{ setPage(number => number + 1)}} className='submit w-32 h-12 flex justify-center items-center rounded mx'>
                {isLoading?(
                  <Icon  icon="gg:spinner" className={isLoading? 'block animate-spin bg-red':"hidden"}  width="20px" />
                ):(
                  <span id='text-paginate'>See more</span>
                )}
                </button>
              </div>
            </div>
        </div>
        <FriendRequestContainer users={users} currentUser={user}/>
      </div>
    </div>
  )
}
