import client from "../../../db"
import bcrypt from 'bcrypt';
import { Role,Authentication,ChannelType } from "@/Utils/Enums";
import jwt from 'jsonwebtoken'
import { NextRequest,NextResponse } from 'next/server'

interface ChannelData {
  channelId:string;

  }
export  async function POST(req:NextRequest, res:NextResponse){
 
    try{
    const body:ChannelData=await req.json();

    const joinedData = await client.channel.findFirst(
        {
            where:{
                id:body.channelId
            },
            include:{
                messages:true
            }
        }
    );
      
    
        
   return NextResponse.json({data:joinedData,status:200})
}
catch(ex){
    console.log(ex)
    NextResponse.json({message:"Internal server error",status:500})
}
    

} 