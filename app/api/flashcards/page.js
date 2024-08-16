'use client'
import {useUser} from '@clerk/nextjs'
import {useEffect, useState} from 'react'


import {CollectionReference, doc, getdoc, setdoc} from 'firebase/firestore'
import { db } from '@/firebase'
import { useRouter } from 'next/navigation'



export default function flashcards() {
    const {isLoaded, isSign, user } = useUser()
    const [flashcards, setflashcards] = useState[[]]


    useEffect (() => {

        async function getflashcards() {

            if (!user) return
            const docRef = doc(collection(db, 'users'), user.id)
            const docSnap = await getdoc(docRef)


            if (docSnap.exists()) {
                const collections = docSnap.data().flashcards || []
                setflashcards(collections)

            }   else {
                await setdoc(docRef, {flashcards: []})
            }

        }


        getdoc(flashcards)()


    },    [user])



    if (!isLoaded || !isSignedIn) {
        return <></> 
    }

    const handleCardClick = (id) => {

        useRouter.push ('/flashcard?id=${id}')


    }

    return <Container maxWidth= "100vw">

        



    </Container>

}







