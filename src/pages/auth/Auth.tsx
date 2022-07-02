import React from 'react'

type Props = {}
export default function Auth({ auth, firebase, setSignedIn, signedIn }: any) {

    const signInWithGoogle = () => {
        auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then(() => {
            setSignedIn(true)
        })
    }

    return (
        <div className="window">
            {signedIn &&
                <button onClick={() => { signInWithGoogle() }}>sign up</button>
            }
            {!signedIn &&
                <span>signed in</span>
            }
        </div>
    )
}