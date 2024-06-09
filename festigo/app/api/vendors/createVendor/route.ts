import client from "../../../db"
import bcrypt from 'bcrypt';
import { Role,Authentication,ChannelType } from "@/Utils/Enums";
import jwt from 'jsonwebtoken'
import { NextRequest,NextResponse } from 'next/server'

interface EventData {
 vendorId:string,
 vendorservice:string,
 vendorName:string,
 contactInfo:string
  }
export  async function POST(req:NextRequest, res:NextResponse){
 
    try{
    const body:EventData=await req.json();

    const channel= await client.vendor.create({
        data:{
        vendorId:body.vendorId,
        serviceType:body.vendorservice,
        vendorName:body.vendorName,
        contactInfo:body.contactInfo
    
}})
   return NextResponse.json({data:channel,status:200})
}
catch(ex){
    console.log(ex)
    NextResponse.json({message:"Internal server error",status:500})
}
    

} 