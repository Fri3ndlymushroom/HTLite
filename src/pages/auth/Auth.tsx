import React from 'react'
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth"
const auth = getAuth();
const provider = new GoogleAuthProvider();


type Props = {}
export default function Auth({}: Props) {

    const signInWithGoogle = ()=>{
        signInWithPopup(auth, provider)
    }

  return (
      <div className="body">

          <button onClick={()=>{signInWithGoogle()}}>sign up</button>
      </div>
  )
}