import axios from 'axios';
import {useRouter} from 'next/router';
import React, { useEffect, useState } from 'react';
import Post from "../../components/Post"
import PostLoad from "../../components/postLoad"
import InputComment from '../../components/inputComment';
import Comment from '../../components/Comment'
const commentPage = ({user,setArrayOfPosts,setComments,comments,posts}) => {
    const router = useRouter()
    const { id } = router.query
    const [post,setPost] = useState('')
    useEffect(() => {
        if(typeof id !== 'undefined'){
         getPost()

        }
    },[id])
    const getPost = async () => {
        try{
            const request = await axios.get(`https://vast-citadel-97852.herokuapp.com/api/post/${id}`)
            const postResponse = request.data.post
            const commentsResponse = request.data.comments
            if(request.status === 200){
                setPost(postResponse)
                setComments(commentsResponse)
            }
        } catch(e){
            console.log(e)
        }
    }
    return (
      <div className='w-full flex justify-center'>
            <div className='px-24 mx-12 w-4/5'>
                {post !== ""?(
                    <Post setArrayOfPosts={setArrayOfPosts} post={post} posts={posts} user={user} id={id}/>

                ):(
                    <PostLoad/>
                )}
                <div className='border-l border-r mt-3 px-6 py-3'>
                    <InputComment post={post} user={user} idPost={id}/>
                    <Comment setComments={setComments} comments={comments} user={user} />

                </div>
                <div>
                </div>
            </div>
      </div>
  );
};
export default commentPage