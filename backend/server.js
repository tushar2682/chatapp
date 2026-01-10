import express from 'express'
import dotenv from 'dotenv'
import { ENV } from './src/lib/env.js';
import { connectDB } from './src/lib/db.js';

dotenv.config();

const app = express();

console.log(ENV.PORT)
console.log(ENV.DB_URL)


app.get("/", (req, res) => {
    res.status(200).json({
        message: "success"
    })

})

app.listen(ENV.PORT, () => {
    connectDB();
    console.log(`server is running on port ${ENV.PORT}`);
})

export default app;