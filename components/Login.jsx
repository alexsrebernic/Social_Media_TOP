import React from 'react';
import axios from 'axios';

export const Login = () => {
  return (
    <div className='w-full '>
    <form  method='POST' action="https://vast-citadel-97852.herokuapp.com/api/users/log_in" className='flex flex-col sign-up-form w-full'>
          <input type="email" name='email' placeholder='Email' required/>
          <input type="password" name='password' placeholder='Password' required/>
      <input type="submit" className='submit' value={"Log in"}/>

    </form>
    
  </div>
  );
};
export default Login