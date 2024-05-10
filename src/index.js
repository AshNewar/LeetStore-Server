import express from 'express';
import router from './routes/route.js';
import connectDB from './connectDB.js';
import dotenv from 'dotenv'
import cors from 'cors'

dotenv.config();


const app= express();
app.use(express.json());

app.use(cors({
    origin: process.env.FRONTEND_URI,
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
  }));

connectDB();

app.get('/',(req,res)=>{
    res.send('Service is Working Fine')
})

app.use(router);

app.listen(process.env.PORT,()=>{
    console.log(`Server Stared At Port ${process.env.PORT}`);
})