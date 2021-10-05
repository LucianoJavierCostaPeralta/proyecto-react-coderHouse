import firebase from "firebase"
import 'firebase/firestore'



const firebaseConfig = {
    apiKey: "AIzaSyDukEtaaaLY4CyGxLfct0d_4JiL6hC7TlE",
    authDomain: "jm-computacion.firebaseapp.com",
    projectId: "jm-computacion",
    storageBucket: "jm-computacion.appspot.com",
    messagingSenderId: "708461508727",
    appId: "1:708461508727:web:bb9f6a7df1155e2d586e72"
}
const app= firebase.initializeApp(firebaseConfig)

// export function getFirebase(){
//     return app
// }

export function getFirestore(){
    return firebase.firestore(app)
}
