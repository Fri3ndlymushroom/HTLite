import React from 'react'

type Props = {}
export default function Auth({auth, firebase, setSignedIn}: any) {

    const signInWithGoogle = ()=>{
        auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then(()=>{
            console.log("ok")
            setSignedIn(true)
        })
    }

  return (
      <div className="body">

          <button onClick={()=>{signInWithGoogle()}}>sign up</button>
      </div>
  )
}