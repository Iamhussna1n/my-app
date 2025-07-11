import mongoose from "mongoose";

let isConnected = false;

export async function connectToDatabase() {
    if (isConnected) {
        console.log("Using existing database connection");
        return;
    }

    try {
        if (!process.env.MONGO_URI) {
            throw new Error("MONGO_URI environment variable is not defined");
        }

        await mongoose.connect(process.env.MONGO_URI);
        isConnected = true;
        
        const connection = mongoose.connection;
        connection.on('connected', () => {
            console.log("Connected to database successfully");
        });
        
        connection.on('error', (error: unknown) => {
            if (typeof error === 'object' && error !== null && 'message' in error && typeof (error as { message?: unknown }).message === 'string') {
                console.log("Error connecting to the database:", (error as { message: string }).message);
            } else {
                console.log("Error connecting to the database:", error);
            }
            isConnected = false;
        });

        connection.on('disconnected', () => {
            console.log("Disconnected from database");
            isConnected = false;
        });
        
    } catch (error) {
        console.log("Error connecting to the database:", error);
        isConnected = false;
        throw error;
    }
}