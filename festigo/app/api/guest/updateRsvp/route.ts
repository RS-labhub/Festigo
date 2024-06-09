import client from "../../../db"
import bcrypt from 'bcrypt';
import { Role,Authentication } from "@/Utils/Enums";
import jwt from 'jsonwebtoken'
import { NextRequest,NextResponse } from 'next/server'


export async function  GET(req:NextRequest){
    try {
        const searchParams = req.nextUrl.searchParams;
        const email:string|any=searchParams.get('email');
        const eventId:string|any=searchParams.get('eventId');
        const status:string|any=searchParams.get('status');

        const record=await client.guest_RSVP.update({
            where:{
                guestId:{
                    email:email,
                    eventId:eventId
                }
            },
            data:{
               
               rsvpStatus:status
            
        }
        })
       NextResponse.json({data:record,status:200})
    } catch (error) {
        console.log(error,"Internal error")
        NextResponse.json({message:"Internal server error",status:500})
    }
   
}