import client from "../../../db"
import bcrypt from 'bcrypt';
import { Role,Authentication,ChannelType } from "@/Utils/Enums";
import jwt from 'jsonwebtoken'
import { NextRequest,NextResponse } from 'next/server'

interface EventData {
 username:string
  }
export  async function POST(req:NextRequest, res:NextResponse){
 
    try{
    const body:EventData=await req.json();

    const channel= await client.vendor.findMany(
        {
            where:{
        vendorId:body.username
    },
    include:{
        event:true
    }
})
   return NextResponse.json({data:channel,status:200})
}
catch(ex){
    console.log(ex)
    NextResponse.json({message:"Internal server error",status:500})
}
    

} 