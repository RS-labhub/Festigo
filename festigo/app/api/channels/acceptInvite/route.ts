import client from "../../../db"
import bcrypt from 'bcrypt';
import { Role,Authentication,ChannelType,ChannelRoleTypes } from "@/Utils/Enums";
import jwt from 'jsonwebtoken'
import { NextRequest,NextResponse } from 'next/server'

interface RequestData {
 id:string
  
  }
export  async function POST(req:NextRequest, res:NextResponse){
 
    try{
    const body:RequestData=await req.json();
    
    const joinedData = await client.channelParticipant.update({
        where: {
            id:body.id
        },
        data: {
            isInviteAccepted: true
        }
    });
    
      
    
        
   return NextResponse.json({data:joinedData,status:200})
}
catch(ex){
    console.log(ex)
    NextResponse.json({message:"Internal server error",status:500})
}
    

} 