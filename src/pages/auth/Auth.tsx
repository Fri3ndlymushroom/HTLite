import React from 'react'
import { signInWithPopup, GoogleAuthProvider  } from "firebase/auth";
const provider = new GoogleAuthProvider();

type Props = {}
export default function Auth({auth, setSignedIn}: any) {

    const signInWithGoogle = ()=>{
        signInWithPopup(auth, provider).then((result:any)=>{
            setSignedIn(true)
        })
    }

  return (
      <div className="body">

          <button onClick={()=>{signInWithGoogle()}}>sign up</button>
      </div>
  )
}