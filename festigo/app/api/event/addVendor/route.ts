import client from "../../../db"
import bcrypt from 'bcrypt';
import { Role,Authentication } from "@/Utils/Enums";
import jwt from 'jsonwebtoken'
import { NextRequest,NextResponse } from 'next/server'
interface RequestData {
    
    eventId: string;
    vendorId:string;
  }
export  async function POST(req:NextRequest){
 
    try{
    const body:RequestData=await req.json();

    const event= await client.vendor.update(
        
        {
            where:{
                vendorId:body.vendorId
            },
            data:{
                event:{
                connect: {
                    id: body.eventId  // Assuming you pass eventId in the request body
                }
                
            }
     
    }})
   return NextResponse.json({data:event,status:200})
}
catch(ex){
    console.log(ex)
    NextResponse.json({message:"Internal server error",status:500})
}
    

}