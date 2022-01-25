import React from 'react';
import Avatar from 'react-avatar';
import { Icon } from '@iconify/react';
import Link from 'next/link';
import Dropdown from './Dropdown';
export const Post = ({posts,user}) => {
  return (
    <>
    {posts?(
        <>
            {posts.map((post,index) => {
                return(
                <div key={index} className='border shadow-md my-6 px-5 py-4 bg-white'>
                    <div className='flex items-center justify-between'>
                        <div className='flex items-center'>
                            <div className='cursor-pointer'>
                                {typeof post.author.profile_img === "undefined"?(
                                    <Avatar name={post.author.full_name} color='gray' className='avatar'   size="50" round={true}/>
                                ):(
                                    <img src={post.author.profile_img} alt="profile post" />
                                )}
                            </div>
                            <div className='flex flex-col ml-2'>
                                <Link href={`/profile/${post.author._id}`}>
                                    <span className='cursor-pointer'>{post.author.full_name}</span>

                                </Link>
                                <span className='text-sm text-gray-400'>{post.date}</span>
                            </div>
                        </div>
                        <div>
                            <Dropdown items={[]} name={<Icon icon="bi:three-dots-vertical" width="20px"/>} dropDownIcon={false}/>
                        </div>
                    </div>
                    <div className='py-6'>
                        <div>
                            <span>{post.content}</span>
                        </div>
                        <div>
                            {post.images?(
                                <>

                                </>
                            ):(
                                null
                            )}
                        </div>
                    </div>
                    <div >
                        <div className='flex border-t pt-3'>
                            <span className='mx-3'>
                                <Icon icon="ant-design:like-filled" width="25px" className='cursor-pointer'/>
                            </span>
                            <span className='mx-3'>
                                <Icon icon="ant-design:dislike-filled" width="25px" className='cursor-pointer'/>
                            </span>
                            <span className='mx-3'>
                                <Icon icon="akar-icons:comment" width="25px" className='cursor-pointer'/>
                            </span>

                        </div>
                    </div>
                </div>

                )
            
        })}
        </>
    ):(
        null
    )}
       
    </>
  );
};
export default Post