import client from "../../../db"
import bcrypt from 'bcrypt';
import { Role,Authentication,ChannelType,ChannelRoleTypes } from "@/Utils/Enums";
import jwt from 'jsonwebtoken'
import { NextRequest,NextResponse } from 'next/server'

interface RequestData {
  eventid:string;
  participantid:string;
  channelId:string;
  role:string;
  }
export  async function POST(req:NextRequest, res:NextResponse){
 
    try{
    const body:RequestData=await req.json();
    const accepted=body.role==="admin"?true:false;
    const joinedData = await client.channelParticipant.create(
        {
       data: {
           channelId:body.channelId,
           participantId:body.participantid,
           eventId:body.eventid,
           role:ChannelRoleTypes.ADMIN,
           isInviteAccepted:accepted
           
        }}
    );
      
    
        
   return NextResponse.json({data:joinedData,status:200})
}
catch(ex){
    console.log(ex)
    NextResponse.json({message:"Internal server error",status:500})
}
    

} 