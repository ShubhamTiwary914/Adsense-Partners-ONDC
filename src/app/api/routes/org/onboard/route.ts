import { NextRequest, NextResponse } from "next/server";
import dbConnect from '@/app/api/utils/dbConn';
import { createOrg } from '@/app/api/controllers/organisation.controller';



export async function POST(request: NextRequest){
    const orgData = await request.json();
    await dbConnect();
    
    try{
        const newOrg = await createOrg(orgData)
        return NextResponse.json({
            org: newOrg
        }, { status: 201 });
    }
    catch(err){
        return NextResponse.json({
            error: err
        }, { status: 501 });
    }
}

