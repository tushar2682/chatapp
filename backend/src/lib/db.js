import mongoose from 'mongoose';

import { ENV } from './env.js';

export const connectDB = async () => {
    try {
        if (!ENV.DB_URL) throw new Error('DB_URL is not defined in environment variables');
        const conn = await mongoose.connect(ENV.DB_URL);
        console.log('MONGODB CONNECTED:', conn.connection.host);
    } catch (error) {
        console.log(`Error: ${error.message}`);
        // don't exit in debug mode; rethrow so caller can handle
        throw error;
    }
}