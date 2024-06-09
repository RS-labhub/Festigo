import client from "../../../db"
import bcrypt from 'bcrypt';
import { Role,Authentication,ChannelType } from "@/Utils/Enums";
import jwt from 'jsonwebtoken'
import { NextRequest,NextResponse } from 'next/server'

interface EventData {
 eventId:string
  }
export  async function POST(req:NextRequest, res:NextResponse){
 
    try{
    const body:EventData=await req.json();

    const channel= await client.event.findMany(
        {
            where:{
        id:body.eventId
    },
    include:{
        vendors:true
    }
})
   return NextResponse.json({data:channel,status:200})
}
catch(ex){
    console.log(ex)
    NextResponse.json({message:"Internal server error",status:500})
}
    

} 