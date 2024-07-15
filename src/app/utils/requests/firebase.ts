import { initializeApp } from "firebase/app";



const firebaseConfig = {
    apiKey: "AIzaSyBG6d6_SlUIXOPO2SP8m98s6T9bVqF_ICc",
    authDomain: "yardstick-adsense-buyer.firebaseapp.com",
    projectId: "yardstick-adsense-buyer",
    storageBucket: "yardstick-adsense-buyer.appspot.com",
    messagingSenderId: "758919589527",
    appId: "1:758919589527:web:2c7f150e66d6c6262003d2",
    measurementId: "G-MN9Q7T572R"
};

const app = initializeApp(firebaseConfig);
export default app;