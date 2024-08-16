'use client'
import { React, useState, useEffect } from 'react'
import { Box, Button, Typography } from '@mui/material'
const Welcome = () => {
    const [transitionClass, setTransitionClass] = useState({ transform: 'translateY(25%)' })
    useEffect(() => {
        setTimeout(() => {
            setTransitionClass({
                transform: 'translateY(-25%)',
                transition: 'transform 2s ease-in-out'
            })
        }, 1000)
    }
        , [])

    return (
        <Box height={'80vh'} pt={20}
            sx={{
                textAlign: 'center',
                mb: 4,
                background: 'linear-gradient(to bottom, green, white)',
            }}>
            <Box style={transitionClass}>
                <Typography variant="h1" fontWeight={'bold'} fontFamily={"Anton"} color={'white'}> Welcome to Stock Starter</Typography>
                <Typography variant="h4" fontWeight={'bold'} sx={{ color: 'white' }} fontFamily={"Montserrat"} mt={4} mb={8} >
                    The easiest way to make flashcards for your stocks
                </Typography>
                <Button variant="contained" fontFamily={"Montserrat"} sx={{ mt: 2, "bgcolor": "#008000" }} size='large'>Get Started</Button>
            </Box>
        </Box>
    )
}

export default Welcome
