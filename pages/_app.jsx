import '../styles/globals.css'
import  Layout from '../components/Layout'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'
import { io } from "socket.io-client";
const hostSocket = 'localhost:3001'
let socket = io(hostSocket)
function MyApp({ Component, pageProps }) {
 
  if (typeof window !== 'undefined') {
    axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem("token")}` || '{}';
    axios.defaults.headers.post['Content-Type'] = "application/json";
  }
  
  const router = useRouter()
  const [user,setCurrentUser] = useState("")
  const [users,setArrayOfUsers] = useState("")
  const [posts,setArrayOfPosts] = useState("")
  useEffect(() => {
    socket.once('connect',(socket) => {
      console.log("User connected")
    })
  
  },[])
  
   
  socket.once('post:create',post => {
    addPost(post)
  })
 
  const addPost = (post) => { 
    console.log(post)
    console.log(posts)
    if(posts.length >= 10){
      console.log("passed")
    setArrayOfPosts([post,...posts])

    }
  }
  useEffect(() => {
    if((router.pathname === "/" || router.pathname === "/profile" || router.pathname === "/settings" || router.pathname === "messages") && user === ""){
      fetchData()
    } 
   },[router.pathname])

  async function fetchData() {
    try {
      const request = await axios.get('http://localhost:4000/api/user/current').then((response) => {
        axios.all([
          axios.get(`http://localhost:4000/api/users/${response.data.userId}`),
          axios.get('http://localhost:4000/api/users/'),
          axios.get('http://localhost:4000/api/posts/')
        ]).then(axios.spread((user,users,posts) => {
          setCurrentUser(user.data)
          setArrayOfUsers(users.data.users)
          setArrayOfPosts(posts.data)
        }))
      })
     
    } catch(e){

      console.log(e)
    }
  }
  if(Component.name === "SignUpOrLogin"){
    return(
      <Component {...pageProps}/>
      )
  }

  return(
    <>
    <Layout user={user}  >
      <Component users={users} {...pageProps} user={user} posts={posts} />
    </Layout>
    </>
  )
}


export default MyApp
