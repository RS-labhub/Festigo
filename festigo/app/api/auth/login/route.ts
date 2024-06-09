import client from "../../../db";
import bcrypt from 'bcrypt';
import { cookies } from 'next/headers';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { NextRequest, NextResponse } from "next/server";

dotenv.config();

interface User {
    
    username: string;
    password: string;
    email: string;
}

export async function POST(req: NextRequest) {
    try {
        // Parse request body
        const userdata: User = await req.json();

        // Find user by username or email
        const user = await client.users.findFirst({
            where: {
                OR: [
                    { username: userdata.username },
                    { email: userdata.email }
                ]
            },
        });

        if (user) {
            // Compare passwords
            const isPasswordValid: boolean = await bcrypt.compare(userdata.password, user.password);
            if (isPasswordValid) {
                const result = {
                    email: user.email,
                    username: user.username,
                    phonenumber: user.phoneNumber,
                    role: user.role,
                    authentication: user.authenticationType
                };

                const secretKey: string = process.env.SECRET_KEY || "";
                const token: string = jwt.sign(result, secretKey, { expiresIn: '15d' });

                cookies().set("token", token, {
                    maxAge: 15 * 24 * 60 * 60 * 1000, // 15 days
                    httpOnly: true,
                    secure: true
                });

                return NextResponse.json({ data: result, status: 200 });
            } else {
                return NextResponse.json({ message: "Incorrect password", status: 401 });
            }
        } else {
            return NextResponse.json({ message: "User does not exist", status: 400 });
        }

    } catch (error:any) {
        console.error("Error processing request:", error);
        return NextResponse.json({ message: "Internal server error", status: 500 });
    }
}




