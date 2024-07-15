/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        BASEAPI_URL: process.env.BASEAPI_URL,
        FIREBASE_APIKEY:process.env.FIREBASE_APIKEY,
        FIREBASE_AUTHDOMAIN:process.env.FIREBASE_AUTHDOMAIN,
        FIREBASE_STORAGEBUCKET:process.env.FIREBASE_STORAGEBUCKET,
        FIREBASE_APPID:process.env.FIREBASE_APPID,
        MONGO_URI:process.env.MONGO_URI
    }
};

export default nextConfig;
