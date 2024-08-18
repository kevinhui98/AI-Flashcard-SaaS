import Image from "next/image";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import {Box, Button, Container, Toolbar, Typography, AppBar, Grid} from '@mui/material'
import Head from 'next/head'

export default function Home() {



  const handleSubmit = async () => {
    const checkoutSession = await fetch('/api/checkout_session', {
      method: 'POST',
      headers: {
        origin: 'http://localhost:3000',
      },
    })
  }

  
  const checkoutSessionJson = await checkoutSession.json();
  if (checkoutSession.status === 500) {
    console.error(checkoutSessionJson.message);
  }
  
  return (
    <Container maxWidth="100vw">
      <Head>
        <title>
          Flashcard Saas
        </title>
        <meta name = "description" content = 'Create flashcard from your text'/>
      </Head>

      <AppBar position="static">
        <Toolbar>
          <Typography variant = "h6" style = {{flexGrow: 1}}>
            Flashcard Saas
          </Typography>
          <SignedOut>
            <Button color="inherit">
              Login
            </Button>
            <Button color="inherit">
              Sign Up
            </Button>
          </SignedOut>
          <SignedIn>
            <UserButton/>
          </SignedIn>
        </Toolbar>
      </AppBar>

      <Box
        sx={{
          textAlign: 'center',
          my: 4,
        }}>
        <Typography variant ="h2" gutterBottom> Welcome to Flashcard Saas</Typography>
        <Typography variant ="h5" gutterBottom> 
          {''}
          The easiest way to make flashcards from your text
        </Typography>
        <Button variant="contained" color="primary" sx = {{mt:2}}>Get Started</Button>
      </Box>
      <Box sx = {{my: 6}}>
        <Typography variant="h4" gutterBottom>
          Features
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Easy text Input
            </Typography>
            <Typography> 
              {''}
              Simply input your text and let our software do the rest. Creating flashcards has never been
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Smart Flashcards
            </Typography>
            <Typography> 
              {''}
              Our AI intelligently breaks down your text into concise flashcards, perfect for studying
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Accessible Anywhere
            </Typography>
            <Typography> 
              {''}
              Study on the go, wherever you want
            </Typography>
          </Grid>
        </Grid>
      </Box>

      <Box sx={{my: 6, textAlign: 'center'}}>
        <Typography variant="h4" gutterBottom> Pricing </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Box 
              sx={{
                p: 3,
                border: '1px solid',
                borderColor: 'grey.300',
                borderRadius: 2,
            }}> 
              <Typography variant="h5" gutterBottom>Basic</Typography>
              <Typography variant="h6" gutterBottom>$5 / month</Typography>
              <Typography> 
                {''}
                Access to basic flashcard features and limited storage
              </Typography>
              <Button variant="contained" color="primary" sx={{mt: 2}}>
                Choose Basic Plan
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
          <Box 
              sx={{
                p: 3,
                border: '1px solid',
                borderColor: 'grey.300',
                borderRadius: 2,
            }}> 
              <Typography variant="h5" gutterBottom>Pro</Typography>
              <Typography variant="h6" gutterBottom>$10 / month</Typography>
              <Typography> 
                {''}
                Unlimited flashcards and storage with priority support.
              </Typography>
              <Button variant="contained" color="primary" sx={{mt: 2}}>
                Choose Pro Plan
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  )
}
