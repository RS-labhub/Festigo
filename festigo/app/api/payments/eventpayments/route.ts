import client from "../../../db"
import bcrypt from 'bcrypt';
import { Role,Authentication } from "@/Utils/Enums";
import jwt from 'jsonwebtoken'
import { NextRequest,NextResponse } from 'next/server'
interface RequestData {
    vendorId: string;
   
  }
export  async function POST(req:NextRequest){
 
    try{
    const body:RequestData=await req.json();

    const event= await client.vendor.findMany({
        where:{
        
         vendorId:body.vendorId
        
    },
    include:{
        paymentsLedger:true
    }

})
   return NextResponse.json({message:"event created successfully",status:200})
}
catch(ex){
    console.log(ex)
    NextResponse.json({message:"Internal server error",status:500})
}
    

}