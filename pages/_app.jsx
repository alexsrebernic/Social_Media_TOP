import '../styles/globals.css'
import  { AppProps } from 'next/app'
import  Layout from '../components/Layout'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'
import { io } from "socket.io-client";
function MyApp({ Component, pageProps }) {
  const hostSocket = 'localhost:3001'
  let socket = io(hostSocket)
  socket.on('connect',(socket) => {
    console.log("asd")

  
  })
  const router = useRouter()
  const [user,setCurrentUser] = useState("")
  useEffect(() => {
    getUserId()
  },[router.pathname])
  async function getUserId() {
    try {
      const request = await axios.get('https://vast-citadel-97852.herokuapp.com/api/user/current',
      {headers:{Authorization:`Bearer ${localStorage.getItem("token")}` || '{}'}})
      const result = request.data
      setCurrentUser(result.authData.user)
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
      <Component {...pageProps} user={user}  />
    </Layout>
    </>
  )
}

export default MyApp
