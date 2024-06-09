import client from "../../../db"
import bcrypt from 'bcrypt';
import { Role,Authentication } from "@/Utils/Enums";
import jwt from 'jsonwebtoken'
import { NextRequest,NextResponse } from 'next/server'
interface VenueData {
   
    venueName: string;
    location: string;
    capacity: number;
  }
  
export  async function POST(req:NextRequest){
 
    try{
    const body:VenueData=await req.json();

    const message= await client.venue.create({data:{
        venueName:body.venueName,
        location:body.location,
        capacity:body.capacity
      
     
    }})
   return NextResponse.json({message:"venue created successfully",status:200})
}
catch(ex){
    console.log(ex)
    NextResponse.json({message:"Internal server error",status:500})
}
    

}