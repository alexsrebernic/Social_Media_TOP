import React from 'react';

export const EnterAsATestUser = () => {
  return (
  <div className='my-5'>
        <h2>As a Test user you can't do:</h2>
        <ul className='flex flex-col list-style list-cant-do'>
            <li>Post  images,pictures,etc</li>
            <li>Change the profile picture</li>
            <li>Change the banner picture</li>
            <li>Change the name of the user test</li>
            <li>Make friend request's</li>
        </ul>
        <input type="button" className='user-button bg-red cursor-pointer'  value={"Enter"}/>
  </div>);
};
export default EnterAsATestUser