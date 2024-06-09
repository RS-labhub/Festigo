import client from "../../../db"
import bcrypt from 'bcrypt';
import { Role,Authentication } from "@/Utils/Enums";
import jwt from 'jsonwebtoken'
import { NextRequest,NextResponse } from 'next/server'
import sendmail from '../../../../Utils/sendMail'
interface GuestData {
    name:string;
    phone:string;
    emailId:string;
    rsvpstatus:string;
 
  }
  interface RequestData{
      guestdata:GuestData[]
      eventid:string;
  }
export  async function POST(req:NextRequest){
 
    try{
    const body:RequestData=await req.json();
    const result = await client.$transaction(async ($transaction) => {
    body.guestdata.forEach(async (element) =>  {
        const record=await $transaction.guest_RSVP.create({
            data:{
               
                eventId:body.eventid,
                email:element.emailId,
                name:element.name,
                phone:element.phone
            
        }
        })
        sendmail("niharikagoulikar526@gmail.com",element.emailId,"wedding party","come to the party");
    });
})
   
   return NextResponse.json({message:"event created successfully",status:200})
}
catch(ex){
    console.log(ex)
    NextResponse.json({message:"Internal server error",status:500})
}

    

}