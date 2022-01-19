import React from 'react';
import { Icon } from '@iconify/react';
export const Register = () => {
  return (
    <div className='w-full '>
    <form action="" className='flex flex-col sign-up-form w-full'>
          <input type="email" name='email' placeholder='Email*' required/>
          <input type="text" name='first_name' placeholder='First Name*'required />
          <input type="text" name='last_name' placeholder='Last name*'required />
          <input type="text" name='password' placeholder='Password*' />
          <input type="text" name='second_password' placeholder='Confirm Password*' required/>
        <label htmlFor="gender">Gender</label>
        <select name="gender" id="">
          <option value="male">Male</option>
          <option value="male">Women</option>
          <option value="male">Other</option>
        </select>
        <label htmlFor="date_of_birth">Date of birth</label>
        <input name='date_of_birth' type="date" required/>
      <input type="submit" className='submit' value={"Sign Up"}/>
    </form>
    
  </div>
  );
};
export default Register