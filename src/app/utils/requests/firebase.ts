import { initializeApp } from "firebase/app";



const firebaseConfig = {
    apiKey: process.env.FIREBASE_APIKEY,
    authDomain: process.env.FIREBASE_AUTHDOMAIN,
    projectId: "yardstick-adsense-buyer",
    storageBucket: process.env.FIREBASE_STORAGEBUCKET,
    messagingSenderId: "758919589527",
    appId: process.env.FIREBASE_APPID,
    measurementId: "G-MN9Q7T572R"
};

const app = initializeApp(firebaseConfig);
export default app;