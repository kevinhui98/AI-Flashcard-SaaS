import Image from "next/image";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { Grid, Divider } from '@mui/material'
import Head from 'next/head'
import { Nav } from './components/nav'
import Contact from './components/foot'
import Copyright from "./components/copyright";
import Feature from "./components/feature";
import Welcome from "./components/Welcome";
import Price from "./components/price";
export default function Home() {

  


  // const handleSubmit = async () => {
  //   const checkoutSession = await fetch('/api/checkout_session', {
  //     method: 'POST',
  //     headers: {
  //       origin: 'http://localhost:3000',
  //     },
  //   })
  // }


  // const checkoutSessionJson = await checkoutSession.json();
  // if (checkoutSession.status === 500) {
  //   console.error(checkoutSessionJson.message);
  // }

  return (
    <Grid color={'transparent'}>
      <Head>
        <title>
          Stock Starter
        </title>
        <meta name="description" content='Create flashcard from your text' />
      </Head>
      <Nav />
      <Welcome />
      <Feature />
      <Price />
      <Divider variant="middle" />
      <Contact />
      <Copyright />
    </Grid>
  )
}