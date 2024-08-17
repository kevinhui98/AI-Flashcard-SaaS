import React from 'react'
import { Box, Button, Grid, Typography, Container } from '@mui/material'
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
            price: '$5 / month',
            description: 'Access to basic flashcard features and limited storage'
        },
        {
            title: 'Professional',
            price: '$10 / month',
            description: 'Unlimited flashcards and storage with priority support.'
        }
    ]
    return (
        <Box height={'80vh'}>
            <Container sx={{ my: 6, textAlign: 'center' }} py={20} >
                <Typography variant="h2" letterSpacing={3} textAlign={'center'} fontFamily={"Montserrat"} color={'black'} fontWeight={'bold'} pt={10}> Pricing </Typography>
                <Grid container spacing={8} px={3} py={10}>
                    {prices.map((price, index) => (
                        <Grid item xs={12} md={6} key={index}>
                            <ShineBorder
                                color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
                            >
                                <Box
                                    sx={{
                                        bgcolor: 'white',
                                        p: 3,
                                        border: '3px solid',
                                        borderColor: 'grey.800',
                                        borderRadius: 2,
                                        boxShadow: price.title === 'Basic' ? '' : 'green 0px 10px 30px 5px',
                                    }}>
                                    <Typography variant="h4" fontWeight={'bold'} fontFamily={"Montserrat"} color={'black'}>{price.title}</Typography>
                                    <Typography variant="subtitle1" fontFamily={"Montserrat"} color={'gray'}>{price.description}</Typography>
                                    <Typography variant="h6" fontFamily={"Montserrat"} color={'black'} mt={3}>{price.price}</Typography>
                                    {/* <Button variant="contained" fontFamily={"Montserrat"} sx={style} >Get Started</Button> */}
                                    <Button variant={price.title === 'Basic' ? "outlined" : 'contained'} color={price.title === 'Basic' ? "info" : 'success'} fontFamily={"Montserrat"}
                                        sx={{ mt: 2, color: price.title === 'Basic' ? 'black' : 'white', }}>Get Started</Button>
                                </Box>
                            </ShineBorder>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    )
}

export default price
