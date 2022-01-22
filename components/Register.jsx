import React, { useEffect, useState } from 'react';
import { Icon } from '@iconify/react';
import axios from 'axios';
import Router from 'next/router';
export const Register = () => {
  const [isLoading,setIsLoading] = useState(false)

   
  const submitRegister = async (e) => {
    const errorMessage = document.getElementById("message-button")
    const textMessage = document.getElementById('text-message')
    textMessage.textContent = ""
    setIsLoading(true)
    e.preventDefault()
    const emailValue = document.getElementById("email-sign-up-input").value
    const firstNameValue = document.getElementById("first-name-sign-up-input").value
    const lastNameValue = document.getElementById("last-name-sign-up-input").value
    const passwordValue = document.getElementById("password-sign-up-input").value
    const secondPasswordValue = document.getElementById("second-password-sign-up-input").value

    const dateValue = document.getElementById("date-sign-up-input").value
    const data = {
      "email":emailValue,
      "first_name":firstNameValue,
      "last_name":lastNameValue,
      "password":passwordValue,
      "secondpassword":secondPasswordValue,
      "gender":"Male",
      "date_of_birth":dateValue
    }
    try {
      const request = await axios({
        method: 'post',
        url: 'https://vast-citadel-97852.herokuapp.com/api/users/sign_up',
        data,
        headers:{
          "Content-Type":"application/json"
        },
      });
      const result = request
      console.log(result.status)
      if(result.status === 201){
          setIsLoading(false)
          textMessage.textContent = "Done!, please Log In"
          errorMessage.style.backgroundColor = "green"
          errorMessage.style.pointerEvents = "none"
          setTimeout(() => {
          textMessage.textContent = "Sign Up"
          errorMessage.style.pointerEvents = "all"
          errorMessage.style.backgroundColor = "#3a3b6a"
  
        }, 2000);
     
      }
    } catch (e){
      setIsLoading(false)
        textMessage.textContent = e.response.data.message
        errorMessage.style.backgroundColor = "red"
        errorMessage.style.pointerEvents = "none"
        setTimeout(() => {
        textMessage.textContent = "Sign Up"
        errorMessage.style.pointerEvents = "all"
        errorMessage.style.backgroundColor = "#3a3b6a"

      }, 2000);
    }
  }
 
  return (
    <div className='w-full '>
    <form onSubmit={submitRegister} method='POST' action="" className='flex flex-col sign-up-form w-full'>
          <input id='email-sign-up-input' type="email" name='email' placeholder='Email*' required/>
          <input id='first-name-sign-up-input' type="text" name='first_name' placeholder='First Name*'required />
          <input id='last-name-sign-up-input' type="text" name='last_name' placeholder='Last name*'required />
          <input id='password-sign-up-input' type="password" name='password' placeholder='Password*' />
          <input id='second-password-sign-up-input' type="password" name='secondpassword' placeholder='Confirm Password*' required/>
        <label htmlFor="gender">Gender</label>
        <select id="gender-sign-up-input" name="gender" id="">
          <option value="Male">Male</option>
          <option value="Women">Women</option>
          <option value="Other">Other</option>
        </select>
        <label htmlFor="date_of_birth">Date of birth</label>
        <input id='date-sign-up-input' name='date_of_birth' type="date" required/>
        <button  type="submit" className='submit rounded py-2 mt-3 flex justify-center items-center' value={"Sign Up"} id='message-button'>
          <Icon  icon="gg:spinner" className={isLoading? 'block animate-spin':"hidden"}  width="24px" />
          <span id='text-message'> 
            Sign Up
          </span>
        </button>
    </form>
  
  </div>
  );
};
export default Register