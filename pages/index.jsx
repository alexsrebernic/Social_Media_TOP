import Head from 'next/head'


import PostLoad from '../components/postLoad'
import Post from '../components/Post'
import InputPost from '../components/InputPost'
import FriendRequestContainer from '../components/FriendRequestContainer'
export default function Home({user,posts,users}) {

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
                          <Post posts={posts}/>
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
                    </>

                  )}
              </div>
              <div className='py-8'>
                <h1  className='text-gray-400 w-full text-center final-text'> <span>The beginning of the social media</span></h1>
              </div>
            </div>
        </div>
        <FriendRequestContainer users={users} currentUser={user}/>
      </div>
    </div>
  )
}
