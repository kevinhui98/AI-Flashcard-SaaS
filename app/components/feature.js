import React from 'react'
import { Box, Grid, Typography, Container } from '@mui/material'
import { BorderBeam } from "@/components/magicui/border-beam";
import Marquee from "react-fast-marquee";
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
        },

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
        },
        {
            title: 'Index Funds',
            description: 'Create flashcards for index funds'
        }
    ]
    return (
        <Box pb={10} id={'features'}
            bgcolor={'#0F2A23'}>
            <Typography variant="h1" letterSpacing={3} textAlign={'center'} mb={6} pt={10} color={'white'} fontWeight={'bold'}>
                Features
            </Typography>
            <Grid container spacing={1} px={20}>
                {features.map((feature, index) => (
                    <Grid item xs={12} md={4} key={index} textAlign={'center'} >
                        <Box
                            sx={{
                                p: 3,
                                border: '3px solid',
                                borderColor: 'grey.800',
                                borderRadius: 2,
                                bgcolor: '#2B6653',
                                '&:hover': {
                                    transform: 'scale(1.15)',
                                    transition: 'transform 0.2s',
                                    bgcolor: '#013B30',

                                },
                            }}
                            height={{ xs: '25vh', sm: '25vh', md: '50vh', lg: '40vh' }}
                        >
                            <Typography variant="h4" color={'white'} fontWeight={'bold'} mb={2}>{feature.title}</Typography>
                            <Typography variant="h6" color={'white'}>{feature.description}</Typography>
                        </Box>
                        <BorderBeam size={250} />
                    </Grid>
                ))}
            </Grid>
            <Typography variant="h3" letterSpacing={3} textAlign={'center'} mt={15} mb={6} color={'white'} fontWeight={'bold'}>
                Future Features
            </Typography>
            <Grid container>
                <Marquee pauseOnHover={true} autoFill={true} gradient={true} gradientWidth={80} gradientColor={'#013B30'}>
                    {futureFeatures.map((feature, index) => (
                        <Grid item xs={12} md={4} key={index} width={{ sm: '50vw', md: '40vw', lg: '30vw' }} >
                            <Box
                                sx={{
                                    p: 3,
                                    border: '3px solid',
                                    borderColor: 'grey.800',
                                    borderRadius: 2,
                                    bgcolor: '#2B6653',
                                }}
                                textAlign={'center'}
                                height={{ xs: '30vh', sm: '28vh', md: '26vh', lg: '25vh' }}
                                display={'flex'}
                                flexDirection={'column'}
                                justifyContent={'center'}
                                alignContent={'center'}
                                minWidth={'28vw'}>
                                <Typography variant="h4" color={'white'}>{feature.title}</Typography>
                                <Typography variant="h6" color={'white'}>{feature.description}</Typography>
                            </Box>
                            <BorderBeam size={250} duration={12} delay={9} />
                        </Grid>
                    ))}
                </Marquee>
            </Grid>
        </Box >
    )
}

export default features
