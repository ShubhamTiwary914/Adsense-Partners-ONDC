import { NextRequest, NextResponse } from "next/server";
import dbConnect from '@/app/api/utils/dbConn'
import { saveEarningsData } from "@/app/api/controllers/analytics.controller";



export async function POST(request: NextRequest){
    const earningsData = await request.json();
    await dbConnect();

    try{
        const newEntry = await saveEarningsData(earningsData)
        return NextResponse.json({
            performanceID: newEntry._id
        }, { status: 201 });
    }
    catch(err){
        return NextResponse.json({
            error: err
        }, { status: 501 });
    }
}

