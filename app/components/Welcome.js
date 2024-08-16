import React from 'react'
import { Box, Button, Typography } from '@mui/material'
const Welcome = () => {
    return (
        <Box height={'60vh'} pt={10}
            sx={{
                textAlign: 'center',
                my: 4,
            }}>
            <Typography variant="h1" gutterBottom fontFamily={"Montserrat"} color={'white'}> Welcome to Stock Starter</Typography>
            <Typography variant="h4" sx={{ color: '#c6c6c6' }} fontFamily={"Montserrat"} color={'white'}>
                The easiest way to make flashcards from your text
            </Typography>
            <Button variant="contained" fontFamily={"Montserrat"} sx={{ mt: 2, "bgcolor": "#008000" }}>Get Started</Button>
        </Box>
    )
}

export default Welcome
