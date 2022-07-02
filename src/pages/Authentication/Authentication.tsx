import React, { useState } from 'react'




type Props = {}
export default function Authentication({Auth}: any) {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [nickname, setNickname] = useState("")
const [status, setStatus] = useState({color: "green", message: ""})

    const SignUp = () =>{
        console.log(email, password, nickname)
        Auth.signUp({
            username: email,
            password: password,
            attributes: { nickname: nickname }
        }).then((response:any) => {
            setStatus({ color: "green", message: "you have been registered" })
        }).catch((err:any) => {
            console.error(err)
            setStatus({ color: "red", message: err.message })
        })
    }

    const signUpWithTest = () =>{
        Auth.signUp({
            username: "test@test.test",
            password: "testpassword",
            attributes: { nickname: "testuser" }
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
                <input onChange={(text:any)=>{setEmail(text.target.value)}} placeholder="Email"></input>
                <input onChange={(text:any)=>{setPassword(text.target.value)}} placeholder="Password"></input>
                <input onChange={(text:any)=>{setNickname(text.target.value)}} placeholder="Nickname"></input>
                <button onClick={() => { SignUp()}}>sign up</button>
            </div>
            <div>
                <p>Sign In</p>
                <input onChange={(text:any)=>{setEmail(text.target.value)}} placeholder="Nickname"></input>
                <input onChange={(text:any)=>{setPassword(text.target.value)}} placeholder="Password"></input>
                <button onClick={() => { }}>sign up</button>
                <button onClick={()=>signUpWithTest()}>signin with test account</button>
            </div>
            <p style={{color: status.color}}>{status.message}</p>



            
        </div >
    )
}
