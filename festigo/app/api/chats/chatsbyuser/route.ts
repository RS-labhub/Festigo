import client from "../../../db"
import bcrypt from 'bcrypt';
import { Role,Authentication } from "@/Utils/Enums";
import jwt from 'jsonwebtoken'
import { NextRequest,NextResponse } from 'next/server'
interface ChatParticipant {
   
    senderId: string;
    receiverId: string;
    eventId:string;
  }
  
export  async function POST(req:NextRequest){
 
    try{
        const body:ChatParticipant = await req.json();
    
        
    const chats= await client.chat.findMany({where: {
        OR:[{
           AND:[ {senderId:body.senderId},
            {receiverId:body.receiverId},
        {eventId:body.eventId}]
           },{
            AND:[
            {senderId:body.receiverId},
            {receiverId:body.senderId},
        {eventId:body.eventId}]
       
            
        }]

    },
 orderBy: {
    timestamp: 'asc' // Order by timestamp in descending order
  }});
   
   return NextResponse.json({data:chats,status:200})
}
catch(ex){
    console.log(ex)
    NextResponse.json({message:"Internal server error",status:500})
}
    

}