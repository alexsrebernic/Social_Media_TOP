import '../styles/globals.css'
import  Layout from '../components/Layout'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'
import { io } from "socket.io-client";


const hostSocket = 'https://vast-citadel-97852.herokuapp.com'
let socket = io(hostSocket,{transports: ['websocket'],upgrade:false})
function MyApp({ Component, pageProps }) {
 
  if (typeof window !== 'undefined') {
    axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem("token")}` || '{}';
    axios.defaults.headers.post['Content-Type'] = "application/json";
  }
  
  const router = useRouter()
  const [comments,setComments] = useState('')
  const [user,setCurrentUser] = useState("")
  const [users,setArrayOfUsers] = useState("")
  const [posts,setArrayOfPosts] = useState("")
  const [userChats,setArrayOfUserChats] = useState('')
  useEffect(() => {
      socket.once('connect',(socket) => {
        console.log("User connected"+ socket)
      })
      socket.on('post:create',post => {
      addPost(post)
    })
    socket.on('post:update',post => {
      updatePost(post)
    })
    socket.on('user:update',user => {
      socket.emit('user:update',user)
    })
    socket.on('user:update:response',user => {
      setCurrentUser(user)
    })
    socket.on('comment:create',comment => {
      addComment(comment)
    })
    socket.on('chat:update',chat => {
      socket.emit("chat:update",chat)
    })
    socket.on('chat:update:response',chat => {
      console.log(chat)
      updateChat(chat)
    })
    socket.on('chat:create',chat => {
      socket.emit('chat:create',chat)
    })
    socket.on("chat:create:response",chat => {
      console.log(chat)
      addChat(chat)
    })
  },[])
 
  const addChat = (chat) => {
    setArrayOfUserChats(oldArray => [chat,...oldArray])
   }
  const addComment = (comment) => {
    setComments(comments => [comment,...comments])
  }
  const addPost = (post) => { 
    setArrayOfPosts(posts => [post,...posts])
  }
  const updatePost = (post) => {
    setArrayOfPosts(oldPosts => oldPosts.map((oldPost) => {return oldPost._id === post._id?post:oldPost}))
  }
  const updateChat = (chat) => {
    setArrayOfUserChats(oldChats => oldChats.map(oldChat => {return oldChat._id === chat._id?chat:oldChat}))
  }
  useEffect(() => {
    if(router.pathname !== "/sign_up_or_login" && user === "" && localStorage.getItem('token')){
      console.log("request data")
      fetchData()
    } 
   },[router.pathname])

  async function fetchData() {
    
      try {
        const request = await axios.get('https://vast-citadel-97852.herokuapp.com/api/user/current').then((response) => {
          axios.all([
            axios.get(`https://vast-citadel-97852.herokuapp.com/api/users/${response.data.userId}`),
            axios.get('https://vast-citadel-97852.herokuapp.com/api/users/'),
            axios.get(`https://vast-citadel-97852.herokuapp.com/api/posts/`)
          ]).then(axios.spread((user,users,posts) => {
            console.log("requesting data")
            setCurrentUser(user.data)
            setArrayOfUserChats(user.data.chats)
            setArrayOfUsers(users.data.users)
            setArrayOfPosts(posts.data)
            socket.emit('online',user.data)
          }))
        })
       
      } catch(e){
        console.log(e)

      }

  }
  useEffect(() => {
    if(!(localStorage.getItem("token"))){
      console.log("No token")
        router.push('/sign_up_or_login')
    }
  },[])
  if(router.pathname === "/sign_up_or_login"){
    return(
      <Component {...pageProps}/>
      )
  }
  return(
    <>
    <Layout user={user}  users={users}>
      <Component userChats={userChats} comments={comments} setComments={setComments} setArrayOfPosts={setArrayOfPosts}  users={users} {...pageProps} user={user} posts={posts} />
    </Layout>
    </>
  )
}


export default MyApp
