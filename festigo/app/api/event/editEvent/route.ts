import client from "../../../db"
import bcrypt from 'bcrypt';
import { Role,Authentication } from "@/Utils/Enums";
import jwt from 'jsonwebtoken'
import { NextRequest,NextResponse } from 'next/server'
interface EventData {
    eventId:string;
    eventName: string;
    startDateTime: Date;
    endDateTime: Date;

    venueId: string;
  }
export  async function POST(req:NextRequest){
 
    try{
    const body:EventData=await req.json();

    const event= await client.event.update(
        
        {
            
            where:{
                id:body.eventId
            },
            data:{
        eventName:body.eventName,
        startDateTime:body.startDateTime,
        endDateTime:body.endDateTime,
        venueId:body.venueId
     
    }})
   return NextResponse.json({data:event,status:200})
}
catch(ex){
    console.log(ex)
    NextResponse.json({message:"Internal server error",status:500})
}
    

}