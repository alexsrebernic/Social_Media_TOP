import React from 'react';
import axios from 'axios';
import Router from 'next/router';
export const EnterAsATestUser = () => {
  const submitLogIn = async (e) => {
    e.preventDefault()
  const data = {
    email:"testUser@gmail.com",
      password:"12345"
  }
    
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
        <input onClick={submitLogIn} type="submit" className='user-button bg-red cursor-pointer'  value={"Enter"}/>
  </div>);
};
export default EnterAsATestUser