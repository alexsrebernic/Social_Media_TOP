import React from 'react';
import axios from 'axios';
import Router from 'next/router';
import { useState } from 'react';
import { Icon } from '@iconify/react';
export const EnterAsATestUser = () => {
  const [isLoading,setIsLoading] = useState(false)
  
  const submitLogIn = async (e) => {
    const spanMessage = document.getElementById("text-message-test")
    spanMessage.textContent = ""
    setIsLoading(true)
    e.preventDefault()
  const data = {
    email:"testUser@gmail.com",
      password:"12345"
  }
    
      const request = axios({
        method: 'post',
        url: 'http://localhost:4000/api/users/log_in',
        data,
        headers:{
          "Content-Type":"application/json"
        },
      });
      const result = await request
      console.log(result)
      if(result.status === 200){
        localStorage.setItem("token",result.data.token)
        Router.push("/")
      }
  }
  return (
  <div className='my-5'>
        <h2>As a Test user you can't do:</h2>
        <ul className='flex flex-col list-style list-cant-do'>
            <li>Post  images,pictures</li>
            <li>Change the profile picture</li>
            <li>Change the banner picture</li>
            <li>Change the name of the user test</li>
            <li>Make friend request's</li>
        </ul>
        <button onClick={submitLogIn}  type="submit" className='submit rounded py-2 mt-3 flex justify-center items-center w-full' value={"Sign Up"} id='message-button-test'>
          <Icon  icon="gg:spinner" className={isLoading? 'block animate-spin':"hidden"}  width="24px" />
          <span id='text-message-test'> 
            Enter
          </span>
        </button>  </div>);
};
export default EnterAsATestUser