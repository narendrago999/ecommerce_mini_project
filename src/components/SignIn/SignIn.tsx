import React from 'react'
import { userReq } from '../../actions/userReq'



const SignIn:React.FC = () => {

  userReq.createUser({name:"naren",email:"naren@gmail.com"})
  return(
    <>
    <div>signin</div>
    </>
  )
}

export default SignIn