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
  
export  async function GET(req:NextRequest){
 
    try{
   

    const venues= await client.venue.findMany();
   return NextResponse.json({data:venues,status:200})
}
catch(ex){
    console.log(ex)
    NextResponse.json({message:"Internal server error",status:500})
}
    

}