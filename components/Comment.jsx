import React from 'react';
import Avatar from 'react-avatar';
import { Icon } from '@iconify/react';
import Link from 'next/link';
import Dropdown from './Dropdown';
import axios from 'axios';

export const Comment = ({user,comments,setComments}) => {
    const deleteComment = async (id) => {
        try {
        const request = await axios.post(`http://localhost:4000/api/comments/delete/${id}`)
        const newArray = comments.filter(comment => comment._id !== id)
        setComments(newArray)
        } catch(e){
            console.log(e)
        }
    }
  return (
    <>
    {comments?(
        <>
            {comments.map((comment,index) => {
                return(
                <div key={index} className='border shadow-md my-6 px-5 py-4 bg-white'>
                    <div className='flex items-center justify-between'>
                        <div className='flex items-center'>
                            <div className='cursor-pointer'>
                                {typeof comment.author.profile_img === "undefined"?(
                                    <Avatar name={comment.author.full_name} color='gray' className='avatar'   size="50" round={true}/>
                                ):(
                                    <img src={comment.author.profile_img} alt="profile post" />
                                )}
                            </div>
                            <div className='flex flex-col ml-2'>
                                <Link href={`/profile/${comment.author._id}`}>
                                    <span className='cursor-pointer'>{comment.author.full_name}</span>

                                </Link>
                                <span className='text-sm text-gray-400'>{comment.date}</span>
                            </div>
                        </div>
                        {user._id === comment.author._id?(
                            <div>
                                
                                <Dropdown items={[{name:"Delete",delete:() => deleteComment(comment._id)}]} name={<Icon icon="bi:three-dots-vertical" width="20px"/>} dropDownIcon={false}/>
                            </div>
                        ):(
                            null
                        )}
                       
                    </div>
                    <div className='py-6'>
                        <div>
                            <span>{comment.content}</span>
                        </div>
                        <div>
                            {comment.images?(
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
export default Comment