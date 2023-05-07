import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
import { getFirestore } from 'firebase/firestore';
import { GoogleAuthProvider } from 'firebase/auth';
import { getAuth } from 'firebase/auth'; // for authentication
import 'firebase/storage'; // for storage
import 'firebase/database'; // for realtime database
import 'firebase/firestore'; // for cloud firestore
const firebaseConfig = {
    apiKey: "AIzaSyCKRFZ9N-zd253Fmnir_4ZgXh9nZUrSqbI",
    authDomain: "messaging-app-mern-17bf3.firebaseapp.com",
    projectId: "messaging-app-mern-17bf3",
    storageBucket: "messaging-app-mern-17bf3.appspot.com",
    messagingSenderId: "419814309493",
    appId: "1:419814309493:web:53dddf31e46e51aa03823c"
};
const firebaseApp = initializeApp(firebaseConfig)
const db = getFirestore()
const auth = getAuth()
const provider = new GoogleAuthProvider()
provider.setCustomParameters({
    'login-hint': 'user@example.com'
})
export { auth, provider }
export default db