import '../styles/globals.css'
import type { AppProps } from 'next/app'
import  Layout from '../components/Layout'
import { useState } from 'react'
function MyApp({ Component, pageProps }: AppProps) {
  const [open, setOpen] = useState(true)
  if(Component.name === "SignUpOrLogin"){
    return(
      <Component {...pageProps}/>
      )
  }
  return(
    <>
    <Layout {...setOpen} >
      <Component {...pageProps} />
    </Layout>
    </>
  )
}

export default MyApp
