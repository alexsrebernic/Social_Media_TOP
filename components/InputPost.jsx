import React, { useEffect, useState } from 'react';
import { Icon } from '@iconify/react'
import Avatar from 'react-avatar';
import PostLoad from './postLoad'
import axios from 'axios';

export const InputPost = ({user}) => {
  const [inputValue,setInputValue] = useState("")
  const handleInput = (e) => {
    setInputValue(e.target.value)
  }
 
  const submitPost = async (e) => {
        e.preventDefault()

        const data = {
          content: inputValue,
          author: user._id,
          date: new Date
        }
        try {
          const request = await axios({
            method: 'post',
            url: 'http://localhost:4000/api/posts',
            data,
            headers:{
              "Content-Type":"application/json"
            },
          });
          const result = request.data
          setInputValue("")
        } catch(e){
          console.log(e)
        }
      
      }
  return (
      <>
        {user !== ''?(
            <form onSubmit={submitPost} action="" method="post" className='flex flex-col justify-between h-44  shadow-md bg-white'>
        <div className='flex h-5/6 px-5'>
        <div className='flex justify-center items-center w-12'>
        {user?(
            <>
                {typeof user.profileImg !== 'undefined'?(                          
                    <h1>asdasd</h1>
                ):(
                    <Avatar name={user.full_name} color='gray' className='avatar'    size="50" round={true}/>
                )}
            </>
        ):(
            <Icon  icon="gg:spinner" className='block animate-spin bg-red my-5' width="15px" />
        )}
        </div>
        <div className='flex  items-center px-4 w-full'>
            <input  type="text" id='post-input-home' minLength="5" required className='w-full py-2 ' value={inputValue} onChange={handleInput} placeholder={user !== ""?`What's on your mind ${user.first_name}`:"What's on your mind..."} />
        </div>
        </div>
        <div className='flex bg-white border-t py-3 px-5 justify-between items-cente'>
        <div className='flex items-center defaultanimation hover:bg-gray-200 rounded py-1 px-1 cursor-pointer'>
        <Icon icon="bi:image-fill" color="#39a9e8" width="28px"/>
        <span className='ml-3'>Photo</span>
        </div>
        <div>
            <button type='submit' className='submit px-3 py-2 rounded'>Submit</button>
        </div>
        </div>
    </form>
        ):(
            <PostLoad/>
        )}
      </>
  );
  
};
export default InputPost