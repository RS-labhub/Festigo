import client from "../../../db"
import bcrypt from 'bcrypt';
import { Role,Authentication,ChannelType } from "@/Utils/Enums";
import jwt from 'jsonwebtoken'
import { NextRequest,NextResponse } from 'next/server'

interface ChannelData {
  channelName:string;
  channelType:string;
  channelDescription:string;
  eventId:string;
  }
export  async function POST(req:NextRequest, res:NextResponse){
 
    try{
    const body:ChannelData=await req.json();

    const channel= await client.channel.create({data:{
        channelName:body.channelName,
        channelType:ChannelType.GENERAL,
        channelDescription:body.channelDescription,
        eventId:body.eventId
    }})
   return NextResponse.json({data:channel,status:200})
}
catch(ex){
    console.log(ex)
    NextResponse.json({message:"Internal server error",status:500})
}
    

} 