import { Icon } from '@iconify/react';
import React, { useState } from 'react';
import Avatar from 'react-avatar';
import axios from 'axios';
export const SideContainerProfile = ({isLoading,userData}) => {
    const [aboutMeInputDisplay,setAboutMeDisplay] = useState(false)
    const [genderInputDisplay,setGenderInputDisplay] = useState(false)
    const [locationInputDisplay,setLocationInputDisplay] = useState(false)
    const [dateOfBirthInputDisplay,setDateOfBirthInputDisplay] = useState(false)
    const displayAboutMeInput = () => {
        if(aboutMeInputDisplay){
            setAboutMeDisplay(false)
        } else {
            setAboutMeDisplay(true)
        }
    }
    const displayGenderInput = () => {
        if(genderInputDisplay){
            setGenderInputDisplay(false)
        } else {
            setGenderInputDisplay(true)
        }
    }
    const displayLocationInput = () => {
        if(locationInputDisplay){
            setLocationInputDisplay(false)
        } else {
            setLocationInputDisplay(true)
        }
    }
    const displayDateOfBirthInput = () => {
        if(dateOfBirthInputDisplay){
            setDateOfBirthInputDisplay(false)
        } else {
            setDateOfBirthInputDisplay(true)
        }
    }
    const updateAboutMe = async () => {
        try{
            const textAboutMe = document.getElementById("input-aboutme").value
            const data = {
                text:textAboutMe,
                user:userData._id
            }
            const request = await axios({
                method: 'post',
                url: 'http://localhost:4000/api/user/update_aboutme',
                data,
                headers:{
                  "Content-Type":"application/json"
                },
              });
              setAboutMeDisplay(false)
        } catch(e){
            console.log(e)
        }
     
    }
    const updateGender = async () => {
        try{
            const genderValue = document.getElementById("gender-options-profile").value
            const data = {
                gender:genderValue,
                user:userData._id
            }
            const request = await axios({
                method: 'post',
                url: 'http://localhost:4000/api/user/update_gender',
                data,
                headers:{
                  "Content-Type":"application/json"
                },
              });
              setGenderInputDisplay(false)
        } catch(e){

        }
    }
    const updateLocation = async () => {
        try{
            const locationValue = document.getElementById("location-input").value
            const data = {
                location:locationValue,
                user:userData._id
            }
            const request = await axios({
                method: 'post',
                url: 'http://localhost:4000/api/user/update_location',
                data,
                headers:{
                  "Content-Type":"application/json"
                },
              });
              setLocationInputDisplay(false)
        } catch(e){

        }
    }
    const updateDateOfBirth = async () => {
        try{
            const dateOfBirthValue = document.getElementById("date-input-profile").value
            const data = {
                date:dateOfBirthValue,
                user:userData._id
            }
            const request = await axios({
                method: 'post',
                url: 'http://localhost:4000/api/user/update_date_of_birth',
                data,
                headers:{
                  "Content-Type":"application/json"
                },
              });
              setDateOfBirthInputDisplay(false)
        } catch(e){

        }
    }
  return (
    <div className='w-1/4 border shadow-md rounded side-container-profile bg-white'>
        <div className='h-96 flex items-center justify-center border-b container-image-profile' >
            <div className='border w-72 h-72 rounded-full shadow flex justify-center items-center'>
            {userData.profile_img?(
                null
            ):(
                <Avatar name={userData.full_name} color='gray' className='avatar' className="text-2xl"   size="288" round={true}/>

            )}        
            </div>
        </div>

     
   
    <div className='mt-8 px-8 border-b pb-6'>
            <>  
            <div className=''>
            <h1 className='text-2xl border-b flex items-center'>About me: 
            <Icon icon="ant-design:edit-filled" className='cursor-pointer hover:text-gray-300 ml-4' onClick={displayAboutMeInput}  width="25px" />
                
            </h1>
            <div className={aboutMeInputDisplay?"hidden":"block"}>
                {userData.about_me}
            </div>
            <div className={aboutMeInputDisplay?"block":"hidden"}>
                    <textarea name="input-aboutme" id="input-aboutme" cols="30" rows="7" className='border mt-2'></textarea>
                    <button onClick={updateAboutMe} className='submit px-2 py-1 rounded'>Submit</button>
                </div>
        </div>
        <div>
            <span className=''>
            <Icon  icon="gg:spinner" className={isLoading? 'block animate-spin bg-red':"hidden"}  width="15px" />
            </span>
        </div>
        <div className='mt-4'>
            <ul>
                <li className='py-1 flex items-center justify-between'>
                    <span>Gender:
                        <Icon  icon="gg:spinner" className={isLoading? 'block animate-spin bg-red':"hidden"}  width="15px" />
                        {genderInputDisplay?(
                            <>
                                <select className='ml-2' name="" id="gender-options-profile">
                                    <option value="Male">Male</option>
                                    <option value="Women">Women</option>
                                    <option value="Other">Other</option>
                                </select>
                                <button onClick={updateGender} className='submit ml-2 px-1 rounded'>Submit</button>
                            </>
                        ):(
                        <span className='ml-1'>{userData.gender}</span>

                        )}
                        </span> 
                        <Icon icon="ant-design:edit-filled" className='cursor-pointer  hover:text-gray-300 ' onClick={displayGenderInput} width="25px" />
                </li>
                <li className='py-1 flex items-center justify-between'>
                    <span>Location/City: 
                        <Icon  icon="gg:spinner" className={isLoading? 'block animate-spin bg-red':"hidden"}  width="15px" />
                        {locationInputDisplay?(
                            <>
                            <input id='location-input' className='border rounded' type="text" />
                            <button onClick={updateLocation} className='submit ml-2 px-1 rounded'>Submit</button>
                            </>
                        ):(
                        <span className='ml-1'>{userData.location}</span> 

                        )}
                    </span> 
                    <Icon icon="ant-design:edit-filled" className='cursor-pointer hover:text-gray-300 ' onClick={displayLocationInput} width="25px" />
                </li>
                <li className='py-1 flex items-center justify-between'>
                    <span>Date of Birth:
                        <Icon  icon="gg:spinner" className={isLoading? 'block animate-spin bg-red':"hidden"}  width="15px" />
                        {dateOfBirthInputDisplay?(
                            <>
                                <input id='date-input-profile' type="date" />
                                <button onClick={updateDateOfBirth} className='submit px-1 rounded' >Submit</button>
                            </>
                        ):(
                        <span className='ml-1'>{userData.date_of_birth}</span> 

                        )}
                    </span> 
                <Icon onClick={displayDateOfBirthInput} icon="ant-design:edit-filled" className='cursor-pointer hover:text-gray-300 '  width="25px" />
                </li>

            </ul>
        </div>
            
            </>
  
      
    </div>
    <div className='mt-8 px-8 border-b pb-6'>
        <div className='flex'>
            <h1 className='text-2xl '>Friends <span>
            {userData.friends?(
            <>
                {userData.friends.length}
            </>
            ):(
                <Icon  icon="gg:spinner" className={isLoading? 'block animate-spin bg-red my-5':"hidden"}  width="15px" />
            )}
            </span></h1>
        </div>
        {isLoading?(
            <div className='flex justify-center items-center'>
            <Icon  icon="gg:spinner" className={isLoading? 'block animate-spin bg-red my-5':"hidden"}  width="55px" />
            </div>
        ):(
            <>
           
            {userData.friends.length?(
            <div className='grid grid-cols-3 grid-rows-3 mt-2'>
                {userData.friends.map((friend,index) => {
                    return (
                <div key={index} className='w-24 h-24 border mb-2 shadow'>
                        <a href={`/profile/${friend._id}`}>
                        {friend.profile_img?(
                            null
                        ):(
                            <Avatar name={friend.full_name} color='gray' className='avatar' className="text-2xl"   size="100" />

                        )}
                        </a>
                </div>
                        
                    )
                })}
               
            </div>
            ):(
                <div className='flex flex-col my-5 justify-center items-center justify-center'>
                    <span>You don't have friends :(</span>
                    <button className='px-3 py-2 submit rounded my-4'>Discover friends here!</button>
                </div>
            )}
                
            </>
          
        )}
            
        <div>

        </div>
    </div>
</div>
  );
};
export default SideContainerProfile