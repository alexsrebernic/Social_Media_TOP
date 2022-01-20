import '../styles/globals.css'
import type { AppProps } from 'next/app'
import  Layout from '../components/Layout'
import { useState } from 'react'
function MyApp({ Component, pageProps }: AppProps) {
  const [isOpenModal,setModal] = useState(false)
  if(Component.name === "SignUpOrLogin"){
    return(
      <Component {...pageProps}/>
      )
  }
  return(
    <>
    <Layout {...setModal} >
      <Component {...pageProps} />
    </Layout>
    </>
  )
}

export default MyApp
