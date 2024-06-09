import client from "../../../db"
import bcrypt from 'bcrypt';
import { Role,Authentication } from "@/Utils/Enums";
import jwt from 'jsonwebtoken'
import { NextRequest,NextResponse } from 'next/server'
interface EventData {
    eventId: string;
   
  }
export  async function POST(req:NextRequest){
 
    try{
    const body:EventData=await req.json();

    const event= await client.event.findMany({where:{
        eventName:body.eventId,
        
     
    },
include:{
    guestRsvps:true
}
})
   return NextResponse.json({message:"event created successfully",status:200})
}
catch(ex){
    console.log(ex)
    NextResponse.json({message:"Internal server error",status:500})
}
    

}