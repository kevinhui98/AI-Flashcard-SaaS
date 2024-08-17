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
