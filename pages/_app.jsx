import '../styles/globals.css'
import  Layout from '../components/Layout'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'
import { io } from "socket.io-client";
function MyApp({ Component, pageProps }) {
  const hostSocket = 'localhost:3001'
  let socket = io(hostSocket)
  socket.on('connect',(socket) => {
    console.log("user connected")
  })
  if (typeof window !== 'undefined') {
    axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem("token")}` || '{}';
    axios.defaults.headers.post['Content-Type'] = "application/json";
  }
  
  const router = useRouter()
  const [user,setCurrentUser] = useState("")
  const [users,setArrayOfUsers] = useState("")
  const [posts,setArrayOfPosts] = useState("")
  useEffect(() => {
    if((router.pathname === "/" || router.pathname === "/profile" || router.pathname === "/settings" || router.pathname === "messages") && user === ""){
      fetchData()
    } 
   },[router.pathname])
  async function fetchData() {
    try {
      axios.all([
        axios.get('https://vast-citadel-97852.herokuapp.com/api/user/current'),
        axios.get('https://vast-citadel-97852.herokuapp.com/api/users/'),
        axios.get('https://vast-citadel-97852.herokuapp.com/api/posts/')
      ]).then(axios.spread((currentUser,users,posts) => {
        console.log(currentUser.data,users.data,posts.data)
        setCurrentUser(currentUser.data.authData.user)
        setArrayOfUsers(users.data)
        setArrayOfPosts(posts.data)
      }))
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
      <Component {...pageProps} user={user} posts={posts} />
    </Layout>
    </>
  )
}

export default MyApp
