import React,{useContext} from 'react'
import {Newcontext} from './App'

export default function LoginPanel() {
    let logincontext= useContext(Newcontext);
  return (
    <>
    {logincontext}
    
    </>
  )
}
