import Head from 'next/head'
import { Icon } from '@iconify/react'
export default function Home({user}) {
  return (
    <div className='px-4 mx-6 h-full home-container flex'>
      <div className="container-posts w-3/5 px-5 my-6 py-3 mx-3 flex flex-col justify-start items-center">
          <div className='w-full h-44 border rounded '>
            <form action="" method="post" className='flex flex-col justify-between h-full shadow-md bg-white'>
              <div className='flex h-5/6 px-5'>
                <div className='flex justify-center items-center w-12'>
                    img
                </div>
                <div className='flex  items-center px-4 w-full'>
                  <input type="text" className='w-full py-2 ' placeholder={`What's on your mind ${user.first_name}`} />
                </div>
              </div>
              <div className='flex bg-white border-t py-3 px-5 justify-between items-cente'>
                <div className='flex items-center defaultanimation hover:bg-gray-200 rounded py-1 px-1 cursor-pointer'>
                <Icon icon="bi:image-fill" color="#39a9e8" width="28px"/>
                <span className='ml-3'>Photo</span>
                </div>
                <div>
                  <button className='submit px-3 py-2 rounded'>Submit</button>
                </div>
              </div>

            </form>
          </div>
      </div>
      <div className="container-friend-request  px-12 w-2/5 my-6 py-3 ">
      <div className='border w-11/12 h-80 shadow-xl rounded-md bg-white'>
          <div className='px-6 py-4 flex justify-center items-center bg-first text-white text-xl rounded-t-md'>
            <h1>Meet people!</h1>
          </div>
      </div>

        </div>
    </div>
  )
}
