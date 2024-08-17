'use client'
import React from 'react';
import { Grid, AppBar, Toolbar, Typography, Button, Stack, Box } from '@mui/material';
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Link from 'next/link';
export const Nav = () => {

    const navLinks = [
        {
            title: 'Home',
            link: '/'
        },
        {
            title: 'Features',
            link: '#Features'
        },
        {
            title: 'Pricing',
            link: '#Pricing'
        },
        {
            title: 'Contact',
            link: '#generate'
        }
    ]
    return (
        <AppBar position="sticky" sx={{ background: 'green' }} >
            <Toolbar>
                <Grid container direction={'row'}>
                    <Typography variant="h4" style={{ flexGrow: 1 }} fontFamily={"Montserrat"} color={'white'}>
                        StockStarter
                    </Typography>
                    <Stack direction="row" spacing={2} style={{ flexGrow: 1 }}>
                        {navLinks.map((navLink, index) => (
                            <Button color="inherit" key={index} onClick={() => alert(`You are entering ${navLink.title} page`)} >
                                <Link href={navLink.link} key={index} scroll={true} style={{ "textDecoration": "none", scrollBehavior: 'smooth', color: 'black' }}>
                                    <Typography variant="h6" letterSpacing={1} fontFamily={"Montserrat"} color={'white'}>
                                        {navLink.title}
                                    </Typography>
                                </Link>
                            </Button>
                        ))}
                    </Stack>
                    <Box mt={0.5}>
                        <SignedOut>
                            <Button variant="contained" sx={{ bgcolor: "white", color: 'black' }} fontFamily={"Montserrat"}>Login/Signup</Button>
                        </SignedOut>
                        <SignedIn><UserButton /></SignedIn>
                    </Box>
                </Grid>
            </Toolbar>
        </AppBar>
    )
}

