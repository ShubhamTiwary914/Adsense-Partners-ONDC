import { NextRequest, NextResponse } from "next/server";
import dbConnect from '@/app/api/utils/dbConn'
import { fetchEarnings } from "@/app/api/controllers/analytics.controller";



export async function POST(request: NextRequest){
    const searchQuery = await request.json();
    await dbConnect();

    const res = await fetchEarnings(searchQuery);
    return NextResponse.json(res);
}