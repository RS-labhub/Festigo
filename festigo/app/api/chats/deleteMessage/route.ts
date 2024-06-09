import client from "../../../db"
import bcrypt from 'bcrypt';
import { Role,Authentication } from "@/Utils/Enums";
import jwt from 'jsonwebtoken'
import { NextRequest,NextResponse } from 'next/server'

interface ChatData {
    id: string;
  
  
 
  }
export  async function POST(req:NextRequest, res:NextResponse){
 
    try{
    const body:ChatData=await req.json();

    const updateChat = await client.chat.update({
        where: {
          id:body.id 
        },
        data: {
         
         
          isDeleted:true
        },
      })
  
   return NextResponse.json({data:updateChat,status:200})
}
catch(ex){
    console.log(ex)
    NextResponse.json({message:"Internal server error",status:500})
}
    

}