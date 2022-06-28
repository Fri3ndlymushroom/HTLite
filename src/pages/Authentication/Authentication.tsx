import React, { useState } from 'react'




type Props = {}
export default function Authentication({Auth}: any) {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [nickname, setNickname] = useState("")
const [status, setStatus] = useState({color: "green", message: ""})

    const SignUp = () =>{
        Auth.signUp({
            username: email,
            password: password,
            attributes: { nickname: nickname }
        }).then((response:any) => {
            setStatus({ color: "green", message: "you have been registered" })
        }).catch((err:any) => {
            setStatus({ color: "red", message: err.message })
        })
    }

    return (
        <div>
            
            <div>
                <p>Sign Up</p>
                <input onChange={(text:any)=>{setEmail(text)}} placeholder="Email"></input>
                <input onChange={(text:any)=>{setPassword(text)}} placeholder="Password"></input>
                <input onChange={(text:any)=>{setNickname(text)}} placeholder="Nickname"></input>
                <button onClick={() => { SignUp()}}>sign up</button>
            </div>
            <div>
                <p>Sign In</p>
                <input onChange={(text:any)=>{setEmail(text)}} placeholder="Nickname"></input>
                <input onChange={(text:any)=>{setPassword(text)}} placeholder="Password"></input>
                <button onClick={() => { }}>sign up</button>
            </div>
            <p style={{color: status.color}}>{status.message}</p>



            
        </div >
    )
}
