import { useUser } from '@clerk/nextjs';
import { useEffect, useState } from 'react';
import { collection, doc, getDoc, setDoc } from 'firebase/firestore';
import { db } from '@/firebase';
import { useRouter } from 'next/router';
import { Container, Grid, Card, CardContent, CardActionArea, Typography } from '@mui/material';

export default function Flashcards() {
    const { isLoaded, isSignedIn, user } = useUser();
    const [flashcards, setFlashcards] = useState([]);

    useEffect(() => {
        async function getFlashcards() {
            if (!user) return;
            const docRef = doc(collection(db, 'users'), user.id);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                const collections = docSnap.data().flashcards || [];
                setFlashcards(collections);
            } else {
                await setDoc(docRef, { flashcards: [] });
            }
        }

        getFlashcards();
    }, [user]);

    const router = useRouter();
    const handleCardClick = (id) => {
        router.push(`/flashcard?id=${id}`);
    };

    if (!isLoaded || !isSignedIn) {
        return <></>; // Optionally render a loading indicator or null here
    }

    return (
        <Container maxWidth="100vw">
            <Grid container spacing={3} sx={{ mt: 4 }}>
                {flashcards.map((flashcard, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Card>
                            <CardActionArea onClick={() => handleCardClick(flashcard.id)}>
                                <CardContent>
                                    <Typography variant="h6">
                                        {flashcard.name}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                ))}



{flashcards.length > 0 && (
                <Box sx={{mt: 4}}>
                    <Typography variant = 'h5'>Flashcards Preview</Typography> 
                    <Grid container spacing={3}>
                        {flashcards.map((flashcard, index) =>(
                            <Grid item xs = {12} sm = {6} md ={4} key ={index}>
                                <Card>
                                    <CardActionArea onClick={()=>{
                                        handleCardClick(index)
                                    }}
                                    >
                                        <CardContent>
                                            <Box sx={{
                                                perspective: '1000px',
                                                '& > div': {
                                                    transition: 'transform 0.6s',
                                                    transformStyle: 'preserve-3d',
                                                    position: 'relative',
                                                    width: '100%',
                                                    height: '200px',
                                                    boxShadow: '0 4px 8px 0 rgba(0,0,0, 0.2)',
                                                    transform: flipped[index]? 'rotateY(180deg)' : 'roateY(0deg)',
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
                                                },
                                                '& > div > div:nth-of-type(2)': {
                                                    transform: 'rotateY(180deg)',
                                                },
                                            }}>
                                            <div>
                                                <div>
                                                    <Typography variant = 'h5' component = "div">
                                                        {flashcard.front}
                                                    </Typography>
                                                </div>
                                                <div>
                                                    <Typography variant = 'h5' component = "div">
                                                        {flashcard.back}
                                                    </Typography>
                                                </div>
                                            </div>    
                                            </Box>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                    <Box sx={{mt: 4, display: 'flex', justifyContent:'center'}}>
                        <Button variant='contained' color='secondary' onClick={handleOpen}>
                            Save
                        </Button>
                    </Box>
                </Box>
            )}  
            </Grid>
        </Container>
    );
}


