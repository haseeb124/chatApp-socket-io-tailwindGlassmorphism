import express from 'express'
import 'dotenv/config'
import {connectToDB} from './db/ConnectToDB.js'
import cookieParser from 'cookie-parser';
import cors from 'cors';
import {app, server} from '../back-end/socket/socket.js'

connectToDB();
// configDotenv();

const PORT = process.env.PORT || 5000


app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true,
 
}));
app.use(express.urlencoded({ extended: false }));





import authRouter from './routes/authRoutes.js';
import messageRouter from './routes/messageRoutes.js';
import userRouter from './routes/userRoutes.js'


import { errorMiddleware, notFound } from './middleware/errorMiddleware.js';

app.use("/api/auth", authRouter);
app.use("/api/message", messageRouter);
app.use("/api/users", userRouter);

app.use(notFound);
app.use(errorMiddleware);


server.listen(PORT, () => {
  console.log(`server is running on ${PORT}`)
})
