import '../styles/globals.css'
import type { AppProps } from 'next/app'
import  Layout from '../components/Layout'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'
function MyApp({ Component, pageProps, }: AppProps) {
  const router = useRouter()
  const [user,setCurrentUser] = useState("")
  useEffect(() => {
    pageProps.user = user
    getCurrentUser()
  },[router.pathname])
  const getCurrentUser = async () => {
    try {
      const request = await axios.get('https://vast-citadel-97852.herokuapp.com/api/user/current',
      {headers:{Authorization:`Bearer ${localStorage.getItem("token")}` || '{}'}})
      const result = request.data
      if(result.authData.user){
        setCurrentUser(result.authData.user)
      }
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
    <Layout  >
      <Component {...pageProps} />
    </Layout>
    </>
  )
}

export default MyApp
