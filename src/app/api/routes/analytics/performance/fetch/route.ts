import { NextRequest, NextResponse } from "next/server";
import dbConnect from '@/app/api/utils/dbConn'
import { fetchPerformanceData } from "@/app/api/controllers/performance.controller"


interface searchParams {
    buyerAppId: string;
    start: string;
    end: string;
    mode: number;
}


export async function POST(request: NextRequest){
    const searchQuery = await request.json();
    await dbConnect();

    const res = await fetchPerformanceData(searchQuery);
    return NextResponse.json(res);
}