import React from 'react';
import { Icon } from '@iconify/react';
import axios from 'axios';
import Router from 'next/router';
export const Register = () => {
  const submitRegister = async (e) => {
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
      const result = request.data
      if(result.status === 200){
        const data = {
          email:emailValue,
          password:passwordValue
        }
        try {
          const request =await axios({
            method: 'post',
            url: 'https://vast-citadel-97852.herokuapp.com/api/users/log_in',
            data,
            headers:{
              "Content-Type":"application/json"
            },
          });
          const result =  request.data
          if(result.status === 200){
            localStorage.setItem("token",result.data.token)
            Router.push('/')
          }
        } catch(e){
          const errorMessage = document.getElementById("error-message")

          console.log(e.response)
            errorMessage.style.display = "block"
            errorMessage.textContent = e.response.data.message
            setTimeout(() => {
            errorMessage.style.display = "none"
          }, 3000);
        }
     
      }
    } catch (e){
      const errorMessage = document.getElementById("error-message-button")
      console.log(e)
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
      <input  type="submit" className='submit' value={"Sign Up"} id='error-message-button'/>
    </form>
  
  </div>
  );
};
export default Register