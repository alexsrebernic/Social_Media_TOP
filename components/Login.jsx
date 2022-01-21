import React from 'react';
import axios from 'axios';
import Router from 'next/router';
export const Login = () => {
    const submitLogIn = async (e) => {
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
          localStorage.setItem("token",result.data.token)
          Router.push("/")
        }
      } catch (e){
        const errorMessage = document.getElementById("error-message-login-button")
        errorMessage.value = e.response.data.message
        errorMessage.style.backgroundColor = "red"
        errorMessage.style.pointerEvents = "none"
        setTimeout(() => {
        errorMessage.value = "Sign Up"
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
      <input type="submit" className='submit' value={"Log in"} id='error-message-login-button'/>
     

    </form>
    
  </div>
  );
};
export default Login