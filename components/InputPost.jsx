import React, { useEffect, useState } from 'react';
import { Icon } from '@iconify/react'
import Avatar from 'react-avatar';
import PostLoad from './postLoad'
import axios from 'axios';

export const InputPost = ({user}) => {
  const [isLoading,setIsLoading] = useState(false)
  const [inputValue,setInputValue] = useState("")
  const [wait,setWait] = useState(false)
  const handleInput = (e) => {
    setInputValue(e.target.value)
  }
  useEffect(() => {
    return(() => {
      setWait(false)
    })
  })
  const submitPost = async (e) => {
      e.preventDefault()
      if(wait){
        return  e.preventDefault()
      } 
      setIsLoading(true)

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
          setIsLoading(false)
          setWait(true)
          setTimeout(() => {
            setWait(false)
          }, 5000);
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
        <div className='flex'>
        <span id='error-message' className={wait?'mr-3 hidden pt-2 bg-red-400 text-white px-4 rounded defaultanimation':'hidden'}>{wait?"Please wait a moment":null}</span>

              <button id='button-submit' type='submit' className='submit w-20 flex items-center justify-center h-10 rounded'>
            {isLoading?(
              <Icon  icon="gg:spinner" className='block animate-spin bg-red  ' width="15px" />
              ):(
                "Submit"
                )}
                
              
              </button>
             


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