import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';
import { Stack, TextField, Button, Typography } from '@mui/material'
import SendIcon from '@mui/icons-material/Send'
const Email = () => {
    const form = useRef()
    const sendEmail = (e) => {
        e.preventDefault()

        emailjs
            .sendForm("gmail", "contact_form", form.current, process.env.NEXT_PUBLIC_EMAILJS_API_KEY)
            .then(
                (result) => {
                    alert('Message successfully sent!')
                    // window.location.reload(false)
                    window.location.href = '/'
                    console.log(result)
                },
                (err) => {
                    alert('Failed to send the message, please try again')
                    console.log(err)
                }
            )
    }
    return (
        <div className="contact-form">
            <Typography variant='h4' letterSpacing={1.5} fontFamily={"Narmi matiere, sans-serif"}>Contact Us</Typography>
            <Typography variant='subtitle1' mb={2.5} color={'#c6c6c6'} fontFamily={"Montserrat"}>Send us a message</Typography>
            <form ref={form} onSubmit={sendEmail} bgcolor={'white'}>
                <Stack direction={'column'} gap={1}>
                    <Stack direction={'row'} gap={1}>
                        <TextField label='Name' name='from_name' required variant="outlined" color="success" focused />
                        <TextField label='Email' name='user_email' required variant="outlined" color="success" focused />
                    </Stack>
                    <TextField label='Subject' name='subject' required variant="outlined" color="success" focused />
                    <TextField label='Message' name='message' multiline rows={4} required variant="outlined" color="success" focused />
                    <Button type='submit' variant='contained' sx={{ "bgcolor": "#2B6653" }} endIcon={<SendIcon />} fontFamily={"Montserrat"}>Send</Button>
                </Stack>
            </form>
        </div>
    )
}

export default Email
