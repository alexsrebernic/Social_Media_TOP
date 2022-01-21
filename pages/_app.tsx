import '../styles/globals.css'
import type { AppProps } from 'next/app'
import  Layout from '../components/Layout'
import { useEffect, useState } from 'react'
import axios from 'axios'
function MyApp({ Component, pageProps }: AppProps) {
  const [user,setCurrentUser] = useState()
  useEffect(() => {
    getCurrentUser()
  },[])
  const getCurrentUser = async () => {
    try {
      const request = await axios.get('http://localhost:4000/api/user/current',
      {headers:{Authorization:`Bearer ${localStorage.getItem("token")}` || '{}'}})
      const result = request.data
      console.log(result)
    } catch(e){

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
