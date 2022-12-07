// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const config = {
    apiKey: "AIzaSyDD0BTP42pDLT2CkEoicPYlVXQIrCyrBys",
    authDomain: "exquisite-verse.firebaseapp.com",
    projectId: "exquisite-verse",
    storageBucket: "exquisite-verse.appspot.com",
    messagingSenderId: "30232681675",
    appId: "1:30232681675:web:21d72792b0656cee98cf4e"
};

// Initialize Firebase
const firebase = initializeApp(config);
// const app = initializeApp(firebaseConfig);

export default firebase