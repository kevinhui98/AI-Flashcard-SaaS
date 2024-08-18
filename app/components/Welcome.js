'use client'
import { React, useState, useEffect } from 'react'
import { Box, Button, Typography, Modal, TextField, Divider, Grid, Stack } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';
import Image from 'next/image'
import { db } from '@/firebase';
import { addDoc, collection } from 'firebase/firestore';

// import stockMartketImage from './assets/images/stockmarket.png'
// import stockmarket from '../public/stockmarket.png'
const Welcome = () => {
    const [transitionClass, setTransitionClass] = useState({ transform: 'translateY(25%)' })
    useEffect(() => {
        setTimeout(() => {
            setTransitionClass({
                transform: 'translateY(-30%)',
                transition: 'transform 1.5s ease-in-out'
            })
        }, 1000)
        setTimeout(() => {
            setTransitionClass({
                transform: 'translateY(5%)',
                transition: 'transform 1.5s ease-in-out'
            })
        }, 2500)
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
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = async () => {
        try {
            await addDoc(collection(db, "waitlist"), {
                name: name,
                email: email
            });
            console.log("Document successfully written!");
            handleClose(); // Close the modal upon successful submission
            alert('Thank you for joining the waitlist!');
        } catch (error) {
            console.error("Error adding document: ", error);
            alert('Failed to submit your information. Please try again.');
        }
    };


    return (
        <Box height={'100vh'} pt={20}
            // style={{
            //     backgroundImage: `url("/stockmarket.png")`,
            //     backgroundSize: 'cover',
            //     backgroundPosition: 'center',
            //     backgroundRepeat: 'no-repeat',
            // }}
            sx={{
                textAlign: 'center',
                //use stockmarket.png as background image
                backgroundImage: `linear-gradient(to bottom, transparent, black), url("/assets/images/stockmarket.png")`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                // 'background': 'linear-gradient(to bottom, transparent, black)',
            }}>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Stack direction={"row"} justifyContent={'space-between'} alignContent={"center"} mb={4}>
                        <Typography id="modal-modal-title" variant="h5" component="h2">
                            Join Waitlist
                        </Typography>
                        <CloseIcon onClick={handleClose} sx={{ cursor: 'pointer', '&:hover': { color: 'red' } }} />
                    </Stack>
                    <Stack direction={"column"} spacing={2} >
                        <TextField id="outlined-basic" label="Name" variant="outlined" fullWidth value={name} onChange={(e) => setName(e.target.value)} />
                        <TextField id="outlined-basic" label="Email" variant="outlined" fullWidth value={email} onChange={(e) => setEmail(e.target.value)} />
                        <Divider variant="middle" />
                        <Button onClick={handleSubmit} variant="contained" sx={{ mt: 2, "bgcolor": "#008000" }} size='large' fullWidth>Submit</Button>
                    </Stack>
                </Box>
            </Modal>
            {/* <img src="/assets/images/stockmarket.png" alt="stockmarket" width={500} height={500} /> */}
            <Box style={transitionClass}>
                <Typography variant="h1" fontWeight={'bold'} color={'white'} sx={{ WebkitTextStrokeWidth: '1px', WebkitTextStrokeColor: 'black' }}> Welcome to StockStarter</Typography>
                <Typography variant="h4" fontWeight={'bold'} sx={{ color: 'white' }} mb={10} >
                    The easiest way to learn about Stocks with Flashcards
                </Typography>
                <Button variant="contained" sx={{ mt: 2, "bgcolor": "#2B6653" }} size='large' onClick={handleOpen}>Join Waitlist Now</Button>
            </Box>
        </Box>
    )
}

export default Welcome
