import client from "../../../db"
import bcrypt from 'bcrypt';
import { Role,Authentication } from "@/Utils/Enums";
import jwt from 'jsonwebtoken'
import { NextRequest,NextResponse } from 'next/server'

interface ChatData {
    id: string;
    senderId: string;
    receiverId: string;
    message: string;
    timestamp: Date;
    isEdited: boolean;
    isDeleted: boolean;
    eventId: string;
    event: string;
  }
export  async function POST(req:NextRequest, res:NextResponse){
 
    try{
    const body:ChatData=await req.json();

    const message= await client.chat.create({data:{
        senderId:body.senderId,
        receiverId:body.receiverId,
        message:body.message,
        timestamp:body.timestamp,
        isEdited:body.isEdited,
        isDeleted:body.isDeleted,
        eventId:body.eventId
    }})
   return NextResponse.json({message:"message sent successfully",status:200})
}
catch(ex){
    console.log(ex)
    NextResponse.json({message:"Internal server error",status:500})
}
    

}