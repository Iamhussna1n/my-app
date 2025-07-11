import {connectToDatabase} from "@/dbConfig/dbConfig";
import { NextResponse } from "next/server";
import {Comment} from "@/models/commentModel";
import {sendEmail} from "@/helpers/mailer"


export async function POST(request: Request) {
    try {
        // Connect to database
        await connectToDatabase();
        
        const body = await request.json();
        const { name, email, comment } = body;
        console.log("Received data:", body);

        // Validate required fields
        if (!name || !email || !comment) {
            console.log("Missing fields:", { name: !!name, email: !!email, comment: !!comment });
            return NextResponse.json({ 
                error: "All fields are required",
                received: { name: !!name, email: !!email, comment: !!comment }
            }, { status: 400 });
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return NextResponse.json({ error: "Invalid email format" }, { status: 400 });
        }

        const newComment = new Comment({ name, email, comment });
        const savedComment = await newComment.save();
        console.log("Comment saved successfully:", savedComment);

        sendEmail(
            {
                email : email,
                comment : comment
            }
        );

        return NextResponse.json({ 
            message: "Comment added successfully",
            commentId: savedComment._id
        }, { status: 201 });
    } catch (error : unknown) {
        console.error("Error adding comment:", error);
        
        // Check if it's a MongoDB validation error
        if (
            typeof error === 'object' && error !== null && 'name' in error &&
            typeof (error as { name?: unknown }).name === 'string' && (error as { name: string }).name === 'ValidationError'
        ) {
            return NextResponse.json({ 
                error: "Validation error", 
                details: (error as { message?: string }).message 
            }, { status: 400 });
        }
        
        return NextResponse.json({ error: "Failed to add comment" }, { status: 500 });
    }
}