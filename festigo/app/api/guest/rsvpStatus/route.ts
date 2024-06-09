import client from "../../../db"
import bcrypt from 'bcrypt';
import { Role,Authentication } from "@/Utils/Enums";
import jwt from 'jsonwebtoken'
import { NextRequest,NextResponse } from 'next/server'
interface RequestData {
    eventId: string;
    emailId:string;
    rsvpstatus:string;
    id:string;
  }
export  async function POST(req:NextRequest){
 
    try{
    const body:RequestData=await req.json();

    const event= await client.guest_RSVP.update({
        where:{
        
            guestId:{
         
               eventId: body.eventId,

               email: body.emailId
            }
        
    },
data:{
    rsvpStatus:body.rsvpstatus
}
})
   return NextResponse.json({message:"event created successfully",status:200})
}
catch(ex){
    console.log(ex)
    NextResponse.json({message:"Internal server error",status:500})
}
    

}