import React from 'react'
import { Box, Grid, Typography, Container } from '@mui/material'
const features = () => {
    const features = [
        {
            title: 'Easy text Input',
            description: 'Simply input your text and let our software do the rest. Creating flashcards has never been'
        },
        {
            title: 'Smart Flashcards',
            description: 'Our AI intelligently breaks down your text into concise flashcards, perfect for studying'
        },
        {
            title: 'Accessible Anywhere',
            description: 'Study on the go, wherever you want'
        }
    ]
    const futureFeatures = [
        {
            title: 'Customizable Flashcards',
            description: 'Change the look of your flashcards'
        },
        {
            title: 'Flashcard Sharing',
            description: 'Share your flashcards with friends'
        },
        {
            title: 'Flashcard Export',
            description: 'Export your flashcards to other platforms'
        },
        {
            title: 'Flashcard Import',
            description: 'Import flashcards from other platforms'
        }
    ]
    return (
        <Container sx={{ my: 6 }} height={'100vh'} bgcolor={'black'}>
            <Typography variant="h3" letterSpacing={3} textAlign={'center'} mb={6} fontFamily={"Montserrat"} color={'white'} >
                Features
            </Typography>
            <Grid container spacing={4} px={3}>
                {features.map((feature, index) => (
                    <Grid item xs={12} md={4} key={index} textAlign={'center'}>
                        <Box
                            sx={{
                                p: 3,
                                border: '1px solid',
                                borderColor: 'grey.300',
                                borderRadius: 2,
                            }}>
                            <Typography variant="h5" fontFamily={"Montserrat"} color={'white'}>{feature.title}</Typography>
                            <Typography variant="subtitle1" fontFamily={"Montserrat"} color={'white'}>{feature.description}</Typography>
                        </Box>
                    </Grid>
                ))}
            </Grid>
            <Typography variant="h4" letterSpacing={3} textAlign={'center'} mt={15} mb={6} fontFamily={"gotham"} color={'white'}>
                Future Features
            </Typography>
            <Grid container spacing={4} px={3}>
                {futureFeatures.map((feature, index) => (
                    <Grid item xs={12} md={4} key={index}>
                        <Box
                            sx={{
                                p: 3,
                                border: '1px solid',
                                borderColor: 'grey.300',
                                borderRadius: 2,
                            }}>
                            <Typography variant="h5" fontFamily={"Montserrat"} color={'white'}>{feature.title}</Typography>
                            <Typography variant="subtitle1" fontFamily={"Montserrat"} color={'white'}>{feature.description}</Typography>
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </Container>
    )
}

export default features
