'use client'

import { useRouter } from "next/navigation"
import { useUser } from '@clerk/nextjs'
import { Button, Container, Grid, Card, Box, Typography, Paper, TextField, CardActionArea, CardContent, Dialog, DialogActions, DialogContentText, DialogContent, DialogTitle, Stack } from "@mui/material"
import { useState } from "react"
import { db } from '@/firebase'
import { doc, collection, setDoc, getDoc, writeBatch } from 'firebase/firestore'
import { Nav } from '../components/nav'
import Contact from '../components/foot'
export default function Generate() {
    const { isLoaded, isSignedIn, user } = useUser()
    const [flashcards, setFlashcards] = useState([])
    const [flipped, setFlipped] = useState([])
    const [text, setText] = useState('')
    const [name, setName] = useState('')
    const [open, setOpen] = useState(false)
    const router = useRouter()
    const [cardIdx, setCardIdx] = useState(0)

    const handleSubmit = async (text) => {
        fetch('api/generate', {
            method: 'POST',
            body: text,
        })
            .then((res) => res.json())
            .then((data) => setFlashcards(data))
    }
    const handleCardSelect = () => {
        // console.log(front, back)
        console.log(flashcards[cardIdx].front, flashcards[cardIdx].back)
    }

    const handleCardClick = (id) => {
        setFlipped((prev) => ({
            ...prev,
            [id]: !prev[id],
        }))
    }
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)
    const saveFlashcards = async (name) => {
        if (!name) {
            alert('Please enter a name')
            return
        }
        const batch = writeBatch(db)
        const userDocRef = doc(collection(db, 'users'), user.id)
        const docSnap = await getDoc(userDocRef)
        if (docSnap.exists()) {
            const collections = docSnap.data().flashcards || []
            if (collections.find((f) => f.name === name)) {
                alert("Flashcard collection with the same name already exists.")
                return
            }
            else {
                collections.push({ name })
                batch.set(userDocRef, { flashcards: collections }, { merge: true })
            }
        }
        else {
            batch.set(userDocRef, { flashcards: [{ name }] })
        }
        const colRef = collection(userDocRef, name)
        flashcards.forEach((flascard) => {
            const cardDocRef = doc(colRef)
            batch.set(cardDocRef, flascard)
        })
        await batch.commit()
        handleClose()
        router.push('/flashcards')
    }
    return (
        <Box>
            <Nav />
            <Box
                sx={{
                    mt: 10, mb: 15, display: 'flex', flexDirection: 'column', alignItems: 'center', px: 30, width: '100%',

                }}>
                <Typography variant="h4">Generate Flashcards</Typography>
                <Paper sx={{ p: 4, width: "100%" }}>
                    <TextField
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        label="Enter text"
                        fullWidth
                        multiline
                        rows={4}
                        variant="outlined"
                        sx={{
                            mb: 2,
                        }}
                    />
                    <Button
                        variant="contained"
                        onClick={() => {
                            handleSubmit(text)
                            router.push('#preview')
                        }}
                        fullWidth
                        sx={{ "bgcolor": "#0F2A23" }}

                    >
                        Submit
                    </Button>
                </Paper>
            </Box>
            {flashcards.length > 0 && (
                <Box sx={{ my: 15 }} id={'preview'}>
                    <Stack justifyContent={'space-between'} alignItems={'center'} direction='row' mx={5}>
                        <Typography variant='h5'>Flashcards Preview</Typography>
                        <Button variant='contained' color='secondary' onClick={handleOpen}>
                            Save
                        </Button>
                    </Stack>
                    <Stack spacing={2} mt={1} direction={'row'} mx={5}
                        sx={{ 'border': 'black' }}>
                        <Stack direction={'column'} gap={1} height={'70vh'} overflow={'auto'}>
                            {flashcards.map((flashcard, index) => (
                                <Card height={'20vh'} key={index} onClick={() => {
                                    setCardIdx(index)
                                }}>
                                    <CardContent textAlign={'center'}>
                                        <Typography variant='subtitle1' component='div' textOverflow={'ellipsis'} overflow={'hidden'} whiteSpace={'nowrap'}>
                                            {flashcard.front}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            ))}
                        </Stack>
                        {/* show single flashcard corresponding from the list of flashcards */}
                        <Box justifyContent={'center'} alignItems={'center'} display={'flex'} width={'63%'}>
                            {flashcards.map((flashcard, index) => (
                                <Box key={index} display={index === cardIdx ? 'block' : 'none'} width={'100%'} height={'50%'} paddingLeft={10} >
                                    <Card >
                                        <CardActionArea onClick={() => {
                                            handleCardClick(index)
                                        }}>
                                            <CardContent>
                                                <Box sx={{

                                                    perspective: '1000px',
                                                    '& > div': {
                                                        transition: 'transform 0.6s',
                                                        transformStyle: 'preserve-3d',
                                                        position: 'relative',
                                                        width: '100%',
                                                        height: '300px',
                                                        boxShadow: '0 4px 8px 0 rgba(0,0,0, 0.2)',
                                                        transform: flipped[index] ? 'rotateY(180deg)' : 'roateY(0deg)',
                                                        'z-index': 3,
                                                    },
                                                    '& > div > div': {
                                                        position: 'absolute',
                                                        width: '100%',
                                                        height: '100%',
                                                        backfaceVisibility: 'hidden',
                                                        display: 'flex',
                                                        justifyContent: 'center',
                                                        alignItems: 'center',
                                                        padding: 2,
                                                        boxSizing: 'border-box',
                                                        'background-color': '#f0f0f0',
                                                        'backgroundImage': 'linear-gradient(transparent, transparent 28px, #b0cfe8 22px)',
                                                        'backgroundSize': '100% 30px',
                                                        'z-index': 3,
                                                    },
                                                    '& > div > div:nth-of-type(2)': {
                                                        transform: 'rotateY(180deg)',
                                                    },
                                                }}>
                                                    <div>
                                                        <div>
                                                            <Typography variant='h4' component="div" textAlign={'center'}>
                                                                {flashcard.front}
                                                            </Typography>
                                                        </div>
                                                        <div>
                                                            <Typography variant='h4' component="div" textAlign={'center'}>
                                                                {flashcard.back}
                                                            </Typography>
                                                        </div>
                                                    </div>
                                                </Box>
                                            </CardContent>
                                        </CardActionArea>
                                    </Card>
                                </Box>
                            ))}
                        </Box>
                    </Stack>
                </Box >
            )
            }

            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Save Flashcards</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Please enter a name for your flashcards collection
                    </DialogContentText>
                    <TextField
                        autoFocus
                        placeholder={text}
                        label="Collection Name"
                        margin="dense"
                        type="text"
                        fullWidth
                        value={name}
                        variant="outlined"
                        required
                        onChange={(e) => setName(e.target.value)}
                    >
                    </TextField>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={() => { saveFlashcards(name) }}>
                        Save
                    </Button>
                </DialogActions>
            </Dialog>
            <Contact />
        </Box >
    )
}