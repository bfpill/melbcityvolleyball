import { addDoc, collection, getDocs } from "firebase/firestore";
import { db } from "../firebaseConfig";



const docRef = await addDoc(collection(db, "players"), {
    name: ,
    age: ,
    gender: ,
    rating: ,
});