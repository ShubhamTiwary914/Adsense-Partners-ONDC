import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGO_URI
if(!MONGODB_URI)
    console.error('MONGODB_URI not found!')


//@ts-ignore
let cache = global.mongoose;
if(!cache)
    //@ts-ignore
    cache = global.mongoose = { 
        conn: null,
        promise: null
    }


async function dbConnect(){
    if(cache.conn)
        return cache.conn

    if (!cache.promise) {
        cache.promise = mongoose.connect(MONGODB_URI!).then((mongoose) => {
            return mongoose;
        });
    }
    cache.conn = await cache.promise;
    return cache.conn;
}



export default dbConnect;