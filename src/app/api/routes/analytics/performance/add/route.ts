import { NextRequest, NextResponse } from "next/server";
import dbConnect from '@/app/api/utils/dbConn'
import { savePerformanceData } from "@/app/api/controllers/performance.controller";




export async function POST(request: NextRequest){
    const performanceData = await request.json();
    await dbConnect();

    try{
        const newEntry = await savePerformanceData(performanceData)
        return NextResponse.json({
            performanceID: newEntry
        }, { status: 201 });
    }
    catch(err: any){
        console.error('Error in POST handler:', err);
        return NextResponse.json({
            error: err.message
        }, { status: 500 });
    }
}

