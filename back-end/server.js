import express from 'express'
import { configDotenv } from 'dotenv';
import {connectToDB} from './db/ConnectToDB.js'
import cookieParser from 'cookie-parser';

configDotenv();

const app = express();
const PORT = process.env.PORT || 5000

app.use(express.json());

app.use(cookieParser());


import authRouter from './routes/authRoutes.js';
import messageRouter from './routes/messageRoutes.js';
import userRouter from './routes/userRoutes.js'


import { errorMiddleware, notFound } from './middleware/errorMiddleware.js';

app.use("/api/auth", authRouter);
app.use("/api/message", messageRouter);
app.use("/api/users", userRouter);

app.use(notFound);
app.use(errorMiddleware);


app.listen(PORT, () => {
  connectToDB();
  console.log(`server is running on ${PORT}`)
})
