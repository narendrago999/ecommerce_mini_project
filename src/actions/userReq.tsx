// src/controllers/UserController.ts
import axios from 'axios';
import { error } from 'console';
import { Request, Response } from 'express';
const URL:string|undefined = process.env.REACT_APP_URL || 'http://localhost:8000'
class UserReq {
  // User Registration
    public async createUser(data: any){
        URL? 
        await axios.post(URL+'/signup',data).then((response)=>{
          console.log('response data',response.data);
        }).catch((error)=>{
          console.log(error);
        })
        :console.log("url not found");
        console.log("URL",URL,data);
        
        
    } 
}
export const userReq = new UserReq();