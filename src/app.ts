import  {NextFunction, Request, Response} from "express";
import mongoose from "mongoose";
const express = require("express");



import {configs} from "./configs/";
import {authRouter, userRouter} from "./routers/";
import {IError} from "./types/";



const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/users', userRouter);
app.use('/auth', authRouter);


app.use((err:IError, req:Request, res:Response, next:NextFunction) =>{

  const status = err.status;

 return  res.status(status).json({
    message:err.message,
    status
  });
})

app.get("/welcome", (req: Request, res: Response) => {
  res.send("WELCOME");
});


app.listen(configs.PORT, () => {
    // @ts-ignore
    mongoose.connect(configs.DB_URL)
  console.log(`Server has started on PORT ${configs.PORT} 🚀🚀🚀`);
});
