import { initializeApp } from 'firebase/app'
// authentication
import { getAuth } from 'firebase/auth'
// storage bucket
import { getStorage } from 'firebase/storage'
// firestore
import { getFirestore} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyADuGXjV4qfXE_uUCIFzImOYI6iN3QahtA",
    authDomain: "react-chat-24.firebaseapp.com",
    databaseURL: "https://react-chat-24-default-rtdb.firebaseio.com",
    projectId: "react-chat-24",
    storageBucket: "react-chat-24.appspot.com",
    messagingSenderId: "68093123037",
    appId: "1:68093123037:web:9f5c5986ef231640ecbe34",
    measurementId: "G-P56SL2RL5P"
}

// firebase instance
export const app = initializeApp(firebaseConfig)
// auth instance
export const auth = getAuth()
// storage
export const store = getStorage()
// firestore
export const db = getFirestore()