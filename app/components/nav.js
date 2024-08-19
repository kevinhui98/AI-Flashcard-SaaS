'use client'
import React from 'react';
import { Grid, AppBar, Toolbar, Typography, Button, Stack, Box } from '@mui/material';
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
export const Nav = () => {
    const router = useRouter();
    const path = usePathname();
    const navLinks = [
        {
            title: 'Home',
            link: '/'
        },
        {
            title: 'Features',
            link: '/#features'
        },
        {
            title: 'Pricing',
            link: '/#pricing'
        },
        {
            title: 'Contact',
            link: '/#contact'
        }
    ]
    return (
        <AppBar position="sticky" sx={{ background: '#0F2A23' }} >
            <Toolbar>
                <Grid container direction={'row'}>
                    <Typography variant="h4" style={{ flexGrow: 1 }} color={'#B7EA95'} onClick={() => router.push('/')} sx={{ cursor: 'pointer' }}>
                        StockStarter
                    </Typography>
                    <Stack direction="row" spacing={2} style={{ flexGrow: 1 }}>
                        {navLinks.map((navLink, index) => (
                            <Link href={navLink.link} className={`link ${path === navLinks.link ? 'active' : ''}`} key={index} scroll={true} style={{ "textDecoration": "none", scrollBehavior: 'smooth' }}>
                                <Typography variant="h6" letterSpacing={1} color={'#B7EA95'}>
                                    {navLink.title}
                                </Typography>
                            </Link>
                        ))}
                    </Stack>
                    <Box mt={0.5}>
                        <SignedOut>
                            <Button variant="contained" sx={{ bgcolor: "#2B6653", color: 'white' }} onClick={() => router.push('/sign-in')} >Login</Button>
                        </SignedOut>
                        <SignedIn>
                            <Stack direction={'row'} gap={3} >
                                <Button variant="contained" sx={{ bgcolor: "#2B6653", color: 'white' }} onClick={() => router.push('/generate')} >Generate</Button>
                                <UserButton />
                            </Stack>
                        </SignedIn>
                    </Box>
                </Grid>
            </Toolbar>
        </AppBar>
    )
}

