'use client'
import { React, useState, useEffect } from 'react'
import { Box, Button, Typography, Modal, TextField, Divider } from '@mui/material'
import Image from 'next/image'
// import stockmarket from '../public/stockmarket.png'
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
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <Box height={'80vh'} pt={20}
            // style={{
            //     backgroundImage: `url("/stockmarket.png")`,
            //     backgroundSize: 'cover',
            //     backgroundPosition: 'center',
            //     backgroundRepeat: 'no-repeat',
            // }}
            sx={{
                textAlign: 'center',
                mb: 4,
                //use stockmarket.png as background image
                // backgroundImage: `url("/stockmarket.png")`,
                background: 'linear-gradient(to bottom, green, white)',
            }}>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <TextField id="outlined-basic" label="Name" variant="outlined" fullWidth />
                    <TextField id="outlined-basic" label="Email" variant="outlined" fullWidth />
                    <Divider variant="middle" />
                    <Button variant="contained" sx={{ mt: 2 }} size='large' fullWidth>submit</Button>
                </Box>
            </Modal>
            {/* <Image src="/stockmarket.png" alt="stockmarket" width={500} height={500} /> */}
            <Box style={transitionClass}>
                <Typography variant="h1" fontWeight={'bold'} fontFamily={"Anton"} color={'white'}> Welcome to StockStarter</Typography>
                <Typography variant="h4" fontWeight={'bold'} sx={{ color: 'white' }} fontFamily={"Montserrat"} mb={10} >
                    The easiest way to make flashcards for your stocks
                </Typography>
                <Button variant="contained" fontFamily={"Montserrat"} sx={{ mt: 2, "bgcolor": "#008000" }} size='large' onClick={handleOpen}>join waitlist</Button>
            </Box>
        </Box>
    )
}

export default Welcome
