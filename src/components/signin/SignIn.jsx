import React, { useState } from 'react'
import "./SignIn.css"
import {createUserWithEmailAndPassword} from "firebase/auth"
import {auth} from "../firebase/firebase"

import App from '../../App';

function SignIn() {
  const [password, setPassword] = useState('');
  const [mail, setMail] = useState('');

  // console.log({password , mail})
  // const auth = getAuth(app);
  const signInHandler = async ()=>{
    try {
        const res = await createUserWithEmailAndPassword(auth, mail, password);
        console.log(res)
        console.log('Successfully signed in');
      } catch (error) {
        console.log(error);
        
      }
      
  }
  return (
    <section className='signIn'>
      <div>
        
        <input type="text" placeholder='Enter Your Male Here...' className='input' onChange={(e)=>{setMail(e.target.value)}}/>
        <input type="password" placeholder='Create Your Password' className='input' onChange={(e)=>{setPassword(e.target.value)}}/>
        <button onClick={signInHandler}>Submit</button>
      </div>
    </section>
  )
}

export default SignIn
