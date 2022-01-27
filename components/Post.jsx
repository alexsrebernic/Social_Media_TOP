import React from 'react';
import Avatar from 'react-avatar';
import { Icon } from '@iconify/react';
import Link from 'next/link';
import Dropdown from './Dropdown';
import axios from 'axios';
export const Post = ({posts,user,setArrayOfPosts}) => {
    const deletePost = async (id) => {
        try {
        const request = await axios.post(`http://localhost:4000/api/posts/delete/${id}`)
        const newArray = posts.filter(post => post._id !== id)
        setArrayOfPosts(newArray)
        } catch(e){
            console.log(e)
        }
    }
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
                        {user._id === post.author._id?(
                            <div>
                                
                                <Dropdown items={[{name:"Delete",delete:() => deletePost(post._id)}]} name={<Icon icon="bi:three-dots-vertical" width="20px"/>} dropDownIcon={false}/>
                            </div>
                        ):(
                            null
                        )}
                       
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
                            <span className='mx-3 flex'>
                                <Icon icon="ant-design:like-filled" width="25px" className='cursor-pointer'/>
                            </span>
                            <span className='mx-3'>
                                <Icon icon="ant-design:dislike-filled" width="25px" className='cursor-pointer'/>
                            </span>
                            <span className='mx-3'>
                                <Link href={`/post/${post._id}`} id={post._id}>
                                    <Icon icon="akar-icons:comment" width="25px" className='cursor-pointer'/>
                                </Link>
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