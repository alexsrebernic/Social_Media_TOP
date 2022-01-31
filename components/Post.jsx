import React, { useState } from 'react';
import Avatar from 'react-avatar';
import { Icon } from '@iconify/react';
import Link from 'next/link';
import Dropdown from './Dropdown';
import axios from 'axios';
import { useRouter } from 'next/router'

export const Post = ({posts,user,setArrayOfPosts,id}) => {
    const router = useRouter()
  
    const deletePost = async (id) => {
        try {
        const request = await axios.post(`http://localhost:4000/api/posts/delete/${id}`)
        const newArray = posts.filter(post => post._id !== id)
        setArrayOfPosts(newArray)
        if(router.pathname !== '/profile'){
            router.push('/')
        }
        } catch(err){
            console.log(err)
        }
    }
    const createLike = async (id,creator_of_post) => {
        const data = {
            author:user._id,
        }
        try{
            const request = await axios({
                method: 'post',
                url: `http://localhost:4000/api/post/like/${id}/${creator_of_post}`,
                data,
                headers:{
                  "Content-Type":"application/json"
                },
              });
        }catch(err){
            console.log(err)
        }
    }
    const createDislike = async(id) => {
        const data = {
            author:user._id,
        }
        try{
            const request = await axios({
                method: 'post',
                url: `http://localhost:4000/api/post/dislike/${id}`,
                data,
                headers:{
                  "Content-Type":"application/json"
                },
              });
        }catch(err){
            console.log(err)
        }
    }
    const undoLike = async(id) => {
        try{
            const data = {author:user._id}
            const request = await axios({
                method: 'post',
                url: `http://localhost:4000/api/post/undolike/${id}`,
                data,
                headers:{
                  "Content-Type":"application/json"
                },
              });
        } catch(err){
            console.log(err)
        }
    }
    const undoDislike = async(id) => {
        try{
            const data = {author:user._id}

            const request = await axios({
                method: 'post',
                url: `http://localhost:4000/api/post/undodislike/${id}`,
                data,
                headers:{
                  "Content-Type":"application/json"
                },
              });
        } catch(err){
            console.log(err)
        }
    }
  return (
    <>
    {posts?(
        <>
            {posts.map((post,index) => {
                if(id){
                    if(id === post._id){
                        return(
                                <div key={index}  className='border shadow-md my-6 px-5 py-4 bg-white'>
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
                                        <span className='mx-3 flex items-center'>
                                <Icon icon="ant-design:like-filled" width="25px" onClick={() => {
                                    if(post.likes.indexOf(user._id) > -1){
                                        undoLike(post._id)
                                    } else if(post.dislikes.indexOf(user._id) > -1){
                                        undoDislike(post._id)
                                        createLike(post._id,post.author._id)
                                    } else {
                                        createLike(post._id,post.author._id)
                                    }

                                }} className={post.likes.indexOf(user._id) > -1?'text-blue-500 cursor-pointer':' cursor-pointer'}/>
                                        <span className='ml-2'>{post.likes.length}</span>
                                        </span>
                                        <span className='mx-3 flex items-center'>
                                            <Icon icon="ant-design:dislike-filled" width="25px" onClick={() => {
                                                if(post.dislikes.indexOf(user._id) > -1){
                                                    undoDislike(post._id)                                       
                                                } else if(post.likes.indexOf(user._id) > -1){
                                                    undoLike(post._id)
                                                    createDislike(post._id)
                                                } else {
                                                    createDislike(post._id)
                                                }
                                            }} className={post.dislikes.indexOf(user._id) > -1?'text-blue-500 cursor-pointer':' cursor-pointer'}/>
                                            <span className='ml-2'>{post.dislikes.length}</span>
                                        </span>
                                        <span className='mx-3 flex items-center'>
                                            <Link href={`/post/${post._id}`} id={post._id}>
                                                <Icon icon="akar-icons:comment" width="25px" className='cursor-pointer'/>
                                            </Link>
                                            <span className='ml-2'>{post.comments.length}</span>
                                        </span>
                                        </div>
                                    </div>
                                </div>
                            
                        )
                    } else {
                        return null
                    }
                }
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
                            <span className='mx-3 flex items-center'>
                                <Icon id="likebutton" className="defaultanimation" icon="ant-design:like-filled" width="25px" onClick={() => {
                                
                                    if(post.likes.indexOf(user._id) > -1){
                                        undoLike(post._id)
                                    } else if(post.dislikes.indexOf(user._id) > -1){
                                        undoDislike(post._id)
                                        createLike(post._id,post.author._id)
                                    } else {
                                        createLike(post._id,post.author._id)
                                    }
                                }} className={post.likes.indexOf(user._id) > -1?'text-blue-500 cursor-pointer':' cursor-pointer'}/>
                                <span className='ml-2'>{post.likes.length}</span>
                            </span>
                            <span className='mx-3 flex items-center'>
                                <Icon id="dislikebutton" className="defaultanimation" icon="ant-design:dislike-filled" width="25px" onClick={() => {
                                 
                                    if(post.dislikes.indexOf(user._id) > -1){
                                        console.log("first option")
                                        undoDislike(post._id)                                       
                                    } else if(post.likes.indexOf(user._id) > -1){
                                        undoLike(post._id)
                                        createDislike(post._id)
                                    } else {
                                        createDislike(post._id)
                                    }
                                }} className={post.dislikes.indexOf(user._id) > -1?'text-blue-500 cursor-pointer':' cursor-pointer'}/>
                                <span className='ml-2'>{post.dislikes.length}</span>
                            </span>
                            <span className='mx-3 flex items-center'>
                                <Link href={`/post/${post._id}`} id={post._id}>
                                    <Icon icon="akar-icons:comment" width="25px" className='cursor-pointer'/>
                                </Link>
                                <span className='ml-2'>{post.comments.length}</span>
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