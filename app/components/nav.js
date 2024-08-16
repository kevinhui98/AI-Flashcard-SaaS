'use client'
import React from 'react';
import { Grid, AppBar, Toolbar, Typography, Button, Stack, Box } from '@mui/material';
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
// import { NavLink } from 'react-router-dom'
import { Link } from 'next/link'
import { useRouter } from 'next/router'
export const Nav = () => {
    const Router = useRouter
    const navLinks = [
        {
            title: 'Home',
            link: '/Home'
        },
        {
            title: 'About',
            link: '/About'
        },
        {
            title: 'Features',
            link: '/Features'
        },
        {
            title: 'Pricing',
            link: '/Pricing'
        },
        {
            title: 'Contact',
            link: '/Contact'
        }
    ]
    return (
        <AppBar position="sticky" sx={{ "bgcolor": "#008000" }}>
            <Toolbar>
                <Grid container direction={'row'}>
                    <Typography variant="h4" style={{ flexGrow: 1 }} fontFamily={"Montserrat"}>
                        Stock Starter
                    </Typography>
                    <Stack direction="row" spacing={2} style={{ flexGrow: 1 }}>
                        {navLinks.map((navLink, index) => (
                            <Button color="inherit" key={index} onClick={() => alert(`You are entering ${navLink.title} page`)}>
                                {/* <Link href={{ pathname: navLink.link }} key={index}> */}
                                <Typography variant="h6" style={{ color: 'white' }} letterSpacing={1} fontFamily={"Montserrat"}>
                                    {navLink.title}
                                </Typography>
                                {/* </Link> */}
                            </Button>
                        ))}
                    </Stack>
                    <Box>
                        <SignedOut>
                            <Button color="inherit" fontFamily={"Montserrat"}>Login</Button>
                            <Button color="inherit" fontFamily={"Montserrat"}>Sign Up</Button>
                        </SignedOut>
                        <SignedIn><UserButton /></SignedIn>
                    </Box>
                </Grid>
            </Toolbar>
        </AppBar>
    )
}

