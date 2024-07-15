import { initializeApp } from "firebase/app";



const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_APIKEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTHDOMAIN,
    projectId: "yardstick-adsense-buyer",
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGEBUCKET,
    messagingSenderId: "758919589527",
    appId: process.env.NEXT_PUBLIC_FIREBASE_APPID,
    measurementId: "G-MN9Q7T572R"
};

const app = initializeApp(firebaseConfig);
export default app;