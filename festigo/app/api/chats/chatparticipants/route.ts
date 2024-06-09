import client from "../../../db"
import bcrypt from 'bcrypt';
import { Role, Authentication } from "@/Utils/Enums";
import jwt from 'jsonwebtoken'
import { NextRequest, NextResponse } from 'next/server'
interface ChatParticipant {

  senderId: string;
  receiverId: string;

}

export async function GET(req: NextRequest) {

  try {
    const searchParams = req.nextUrl.searchParams;
    const username: any = searchParams.get('username');
    const eventid: any = searchParams.get('eventid');

    const chats = await client.chat.findMany({
      where: {
        OR: [
          { senderId: username },
          { receiverId: username }
        ],
        AND: [{ eventId: eventid }],

      },
      orderBy: {
        timestamp: 'desc' // Order by timestamp in descending order
      }
    });
    const mySet = new Set<string>();
    const result: any[] = []
    const filtered = chats.forEach((chat) => {
      const oneway: string = `${chat.senderId}_${chat.receiverId}`
      const otherway: string = `${chat.receiverId}_${chat.senderId}`

      if (!mySet.has(oneway) && !mySet.has(otherway)) {
        result.push(chat);
        mySet.add(otherway)
        mySet.add(oneway);
      }
    })
    return NextResponse.json({ data: result, status: 200 })
  }
  catch (ex) {
    console.log(ex)
    NextResponse.json({ message: "Internal server error", status: 500 })
  }


}