import React from 'react';

export const profile = () => {
  return (
  <div className=' w-full '>
    <div className='profile-container px-12 py-4 flex '>
        <div className='w-1/4 border shadow-md rounded side-container-profile'>
            <div className='h-96 flex items-center justify-center border-b container-image-profile' >
                <div className='border w-72 h-72 rounded-full shadow'></div>
            </div>
            <div className='mt-8 px-8 border-b pb-6'>
                <div className=''>
                    <h1 className='text-2xl border-b'>About me:</h1>
                </div>
                <div>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum, magnam. Optio quos fugit quaerat nam, officiis, hic est vero, voluptatibus a numquam at quas totam doloremque reprehenderit cum corrupti rem.
                    </p>
                </div>
                <div className='mt-4'>
                    <ul>
                        <li className='py-1'>Gender:</li>
                        <li className='py-1'>Location/City:</li>
                        <li className='py-1'>Date of Birth:</li>

                    </ul>
                </div>
            </div>
            <div className='mt-8 px-8 border-b pb-6'>
                <div>
                    <h1 className='text-2xl '>Friends</h1>
                </div>
                    <div className='grid grid-cols-3 grid-rows-3 mt-2'>
                        <div className='w-24 h-24 border mb-2 shadow'></div>
                        <div className='w-24 h-24 border shadow'></div>
                        <div className='w-24 h-24 border shadow'></div>
                        <div className='w-24 h-24 border shadow'></div>
                        <div className='w-24 h-24 border shadow'></div>
                        <div className='w-24 h-24 border shadow'></div>
                        <div className='w-24 h-24 border shadow'></div>
                        <div className='w-24 h-24 border shadow'></div>
                        <div className='w-24 h-24 border shadow'></div>
                    </div>
                <div>

                </div>
            </div>
        </div>
        <div className='w-3/4 mx-5 border shadow-md rounded container-post-profile'>
            <div className='h-96 border-b w-full'>

            </div>
            <div className='px-8 py-4'>
                <div>
                    <div>
                        <span className='text-2xl border-b'>Example User</span>
                    </div>
                    <div>
                      
                    </div>

                </div>
                
            </div>
        </div>

    </div>
  </div>);
};
export default profile