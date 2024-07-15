import { NextRequest, NextResponse } from "next/server";
import dbConnect from './../../../utils/dbConn'
import { fetchOrg } from './../../../controllers/organisation.controller'



export async function POST(request: NextRequest){
    const searchQuery = await request.json();
    await dbConnect();
    
    const row = await fetchOrg(searchQuery);
    if(row != null)
        return NextResponse.json({ row: row }, { status: 201 })
    return NextResponse.json({ row: null, err: 'Error finding organisation by Search Parameters Given' }, { status: 401 })
}



