"use client"
import RegisterForm from "./RegisterForm";
import OnboardForm from "./OnboardForm";
import { useState } from "react";


export default function Register(){

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [credAuth, setCredAuth] = useState(false)
  const [mode, setMode] = useState(0)

  const RegisterComponents = [
      <RegisterForm email={email} setEmail={setEmail} password={password} 
              setPassword={setPassword} setMode={setMode} setCredAuth={setCredAuth} key={0}/>,
      <OnboardForm email={email} password={password} credAuth={credAuth} setMode={setMode} key={1}/>
  ]

  return(
    <div>
      { RegisterComponents[mode] }
    </div>
  )
}