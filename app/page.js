import Image from "next/image";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { Grid, Divider } from '@mui/material'
import Head from 'next/head'
import { Nav } from './components/nav'
import { Foot } from './components/foot'
import Copyright from "./components/copyright";
import Feature from "./components/feature";
import Welcome from "./components/Welcome";
import Price from "./components/price";
export default function Home() {
  return (
    <Grid fontFamily={'gotham'} bgcolor={'black'}>
      <Head>
        <title>
          Stock Starter
        </title>
        <meta name="description" content='Create flashcard from your text' />
      </Head>
      <Nav />
      <Welcome />
      <Divider variant="middle" />
      <Feature />
      <Divider variant="middle" />
      <Price />
      <Divider variant="middle" />
      <Foot />
      <Copyright />
    </Grid>
  )
}
