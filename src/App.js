import React,{useState,createContext} from 'react'
import LoginConfirmation from './LoginConfirmation';
import LoginPanel from './LoginPanel';

let Newcontext=createContext();

export default function App() {
  let [name,setName]= useState("mohit")
  let [email,setEmail]=useState("m@gmail.com")
  return (
    <>
    <Newcontext.Provider value={name} val={email}>
      <LoginConfirmation/>
      <br/>
      <br/>
      <LoginPanel/>
    </Newcontext.Provider>
    </>
  )
}

export {Newcontext}