// src/controllers/UserController.ts
import axios from 'axios';
import { Request, Response } from 'express';
const URL:string|undefined = process.env.REACT_APP_URL
class UserReq {
  // User Registration
    public async createUser(data: any){
        // URL? const response =  await axios.post(URL):console.log("url not found");
        console.log("URL",URL,data);
        
        
    } 
}
export const userReq = new UserReq();