import React from 'react';

export const Login = () => {
  return (
    <div className='w-full '>
    <form action="" className='flex flex-col sign-up-form w-full'>
          <input type="email" name='email' placeholder='Email' required/>
          <input type="text" name='password' placeholder='Password' required/>
      <input type="submit" className='submit' value={"Log in"}/>

    </form>
    
  </div>
  );
};
export default Login