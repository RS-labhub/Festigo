import client from "../../../db"
import bcrypt from 'bcrypt';
import { Role,Authentication } from "@/Utils/Enums";
import jwt from 'jsonwebtoken'
import { NextRequest,NextResponse } from 'next/server'
interface EventData {
    eventName: string;
    startDateTime: Date;
    endDateTime: Date;
    hostId: string;
    venueId: string;
  }
export  async function POST(req:NextRequest){
 
    try{
    const body:EventData=await req.json();

    const event= await client.event.create({data:{
        eventName:body.eventName,
        startDateTime:body.startDateTime,
        endDateTime:body.endDateTime,
        hostId:body.hostId,
        venueId:body.venueId
     
    }})
   return NextResponse.json({message:"event created successfully",status:200})
}
catch(ex){
    console.log(ex)
    NextResponse.json({message:"Internal server error",status:500})
}
    

}