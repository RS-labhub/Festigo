import client from "../../../db"
import bcrypt from 'bcrypt';
import { Role,Authentication } from "@/Utils/Enums";
import jwt from 'jsonwebtoken'
import { NextRequest,NextResponse } from 'next/server'

export  async function GET(req:NextRequest){
 
    try{
        const searchParams = req.nextUrl.searchParams;
        const username:any=searchParams.get('username');
    const events=await client.event.findMany({
        where:{
            hostId:username
        }
    })
     
  
   return NextResponse.json({data:events,status:200})
}
catch(ex){
    console.log(ex)
    NextResponse.json({message:"Internal server error",status:500})
}
    

}