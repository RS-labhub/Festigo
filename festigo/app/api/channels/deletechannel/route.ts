import client from "../../../db"
import bcrypt from 'bcrypt';
import { Role,Authentication,ChannelType } from "@/Utils/Enums";
import jwt from 'jsonwebtoken'
import { NextRequest,NextResponse } from 'next/server'

interface ChannelData {
    channelId:string;
  channelName:string;
  channelType:string;
  channelDescription:string;
  }
export  async function POST(req:NextRequest, res:NextResponse){
 
    try{
   // const body:ChannelData=await req.json();

    const channel= await client.channel.deleteMany();
   return NextResponse.json({data:"deleted",status:200})
}
catch(ex){
    console.log(ex)
    NextResponse.json({message:"Internal server error",status:500})
}
    

} 