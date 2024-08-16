import React from 'react'
import { Box, Button, Grid, Typography } from '@mui/material'
const price = () => {
    const prices = [
        {
            title: 'Basic',
            price: '$5 / month',
            description: 'Access to basic flashcard features and limited storage'
        },
        {
            title: 'Pro',
            price: '$10 / month',
            description: 'Unlimited flashcards and storage with priority support.'
        }
    ]
    return (
        <Box sx={{ my: 6, textAlign: 'center' }} py={10}>
            <Typography variant="h3" letterSpacing={3} textAlign={'center'} mb={6} fontFamily={"Montserrat"} color={'white'}> Pricing </Typography>
            <Grid container spacing={4} px={3} >
                {prices.map((price, index) => (
                    <Grid item xs={12} md={6} key={index}>
                        <Box
                            sx={{
                                p: 3,
                                border: '1px solid',
                                borderColor: 'grey.300',
                                borderRadius: 2,
                            }}>
                            <Typography variant="h5" fontFamily={"Montserrat"} color={'white'}>{price.title}</Typography>
                            <Typography variant="h6" fontFamily={"Montserrat"} color={'white'}>{price.price}</Typography>
                            <Typography variant="subtitle1" fontFamily={"Montserrat"} color={'white'}>{price.description}</Typography>
                            <Button variant="contained" fontFamily={"Montserrat"} sx={{ mt: 2, "bgcolor": "#008000" }} >Get Started</Button>
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </Box>
    )
}

export default price
