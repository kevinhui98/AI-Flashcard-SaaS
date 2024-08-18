import React from 'react'
import { Box, Button, Grid, Typography, Container, Stack } from '@mui/material'
import ShineBorder from "@/components/magicui/shine-border";
const price = () => {
    const style = {
        color: 'white',
        padding: '0.25rem',
        background: 'linear-gradient(to bottom, white, slate-900/10)',
        '@media (min-width: 1024px)': {
            fontSize: 'large',
        },
        mt: 2,
        bgcolor: "#008000"
    };
    const prices = [
        {
            title: 'Basic',
            price: 'Free',
            description: 'Access to basic flashcard features and limited storage'
        },
        {
            title: 'Pro',
            price: '$5 / month',
            description: 'Access to pro flashcard features and increased storage'
        },
        {
            title: 'Professional',
            price: '$10 / month',
            description: 'Unlimited flashcards and storage with priority support'
        }
    ]
    return (
        <Box bgcolor={'white'} id={'pricing'}>
            <Container sx={{ mb: 6, textAlign: 'center' }} py={20} >
                <Typography variant="h2" letterSpacing={3} textAlign={'center'} color={'black'} fontWeight={'bold'} pt={10}> Pricing </Typography>
                <Grid display={'flex'} px={3} py={10} justifyContent={'center'} alignItems={'center'} gap={1}>
                    {prices.map((price, index) => (
                        <Grid item xs={12} md={4} key={index}>
                            <Box
                                sx={{
                                    bgcolor: 'white',
                                    p: 3,
                                    border: '3px solid',
                                    borderColor: 'grey.800',
                                    borderRadius: 1,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    textAlign: 'center',
                                    py: price.title === 'Basic' ? '90px' : '70px',
                                    bgcolor: price.title === 'Basic' ? '#2B6653' : 'white',
                                    '&:hover': {
                                        transform: 'scale(1.15)',
                                        transition: 'transform 0.2s ease-in-out',
                                        bgcolor: '#013B30',
                                        color: 'white',
                                    },
                                }}>
                                <Typography variant="h4" fontWeight={'bold'} color={price.title === 'Basic' ? "white" : '#5A5A5A'} sx={{
                                    '&:hover': {
                                        color: 'white'
                                    }
                                }} mt={'-30px'}>{price.title}</Typography>
                                <Typography variant="subtitle1" color={price.title === 'Basic' ? "white" : '#7E7E7E'}>{price.description}</Typography>
                                <Typography variant="h6" color={price.title === 'Basic' ? "white" : 'gray'} mt={5}>{price.price}</Typography>
                                {/* <Button variant="contained" fontFamily={"Montserrat"} sx={style} >Get Started</Button> */}
                                <Button variant={'contained'} color={'success'}
                                    sx={{ mt: 2, color: 'white', }}>Get Started</Button>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    )
}

export default price
