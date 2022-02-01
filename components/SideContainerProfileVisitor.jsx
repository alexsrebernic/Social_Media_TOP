import { Icon } from '@iconify/react';
import React from 'react';
import Avatar from 'react-avatar';
 const SideContainerProfileVisitor = ({isLoading,userData,user}) => {
  return (
    <div className='w-1/4 border shadow-md rounded side-container-profile bg-white'>
   
        <div className='h-96 flex items-center justify-center border-b container-image-profile-visiter' >
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
            
            </h1>
            <div>
                {userData.about_me}
            </div>
        </div>
        <div>
            <span className=''>
            <Icon  icon="gg:spinner" className={isLoading? 'block animate-spin bg-red':"hidden"}  width="15px" />
            </span>
        </div>
        <div className='mt-4'>
            <ul>
                <li className='py-1 flex items-center justify-between'><span>Gender:
                <Icon  icon="gg:spinner" className={isLoading? 'block animate-spin bg-red':"hidden"}  width="15px" />
                
                <span>{userData.gender}</span></span> </li>
                <li className='py-1 flex items-center justify-between'>
                <span>Location/City: 
                <Icon  icon="gg:spinner" className={isLoading? 'block animate-spin bg-red':"hidden"}  width="15px" />
                <span></span> </span> </li>
                <li className='py-1 flex items-center justify-between'>
                <span>Date of Birth:
                <Icon  icon="gg:spinner" className={isLoading? 'block animate-spin bg-red':"hidden"}  width="15px" />
                <span >{userData.date_of_birth}</span> </span> </li>

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
export default SideContainerProfileVisitor