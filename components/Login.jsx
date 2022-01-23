import React from 'react';
import axios from 'axios';
import Router from 'next/router';
import { Icon } from '@iconify/react';
import { useState } from 'react';
export const Login = () => {
  const [isLoading,setIsLoading] = useState(false)

    const submitLogIn = async (e) => {
      const errorMessage = document.getElementById("message-button-log-in")
      const spanMessage = document.getElementById("text-message-login")
      spanMessage.textContent = ""
      setIsLoading(true)
      e.preventDefault()
      const email = document.getElementById("email-log-in-input")
      const password = document.getElementById("password-log-in-input")
    const data = {
      email:email.value,
        password:password.value
    }
      try {
        const request = axios({
          method: 'post',
          url: 'https://vast-citadel-97852.herokuapp.com/api/users/log_in',
          data,
          headers:{
            "Content-Type":"application/json"
          },
        });
        const result = await request
        console.log(result)
        if(result.status === 200){
          setIsLoading(false)
          localStorage.setItem("token",result.data.token)
          spanMessage.textContent = "Log in"
          Router.push("/")
        }
      } catch (e){
        setIsLoading(false)
        spanMessage.value = e.response.data.message
        errorMessage.style.backgroundColor = "red"
        errorMessage.style.pointerEvents = "none"
        setTimeout(() => {
          spanMessage.value = "Log In"
        errorMessage.style.pointerEvents = "all"
        errorMessage.style.backgroundColor = "#3a3b6a"

      }, 2000);
      }
    }
  return (
    <div className='w-full '>
    <form onSubmit={submitLogIn}   method='POST' action="" className='flex flex-col sign-up-form w-full'>
          <input id='email-log-in-input' type="email" name='email' placeholder='Email' required/>
          <input id='password-log-in-input' type="password" name='password' placeholder='Password' required/>
        <button  type="submit" className='submit rounded py-2 mt-3 flex justify-center items-center' value={"Sign Up"} id='message-button-log-in'>
          <Icon  icon="gg:spinner" className={isLoading? 'block animate-spin':"hidden"}  width="24px" />
          <span id='text-message-login'> 
            Log In
          </span>
        </button>

    </form>
    
  </div>
  );
};
export default Login