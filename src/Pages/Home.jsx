
import { postLogin } from "../Redux/app/action";
import { useState } from "react";
 import { useDispatch } from "react-redux";

function Home() {
    const dispatch=useDispatch()
    const inState={
        email:"",
        password:""
        }
        const [inp,setInput]=useState(inState)
        const handleChange=(e)=>{
         const{id,value}=e.target;
         setInput({
             ...inp,
             [id]:value
         })
        }
    const handleClick=()=>{
      console.log(inp.email,inp.password)
      dispatch(postLogin(inp.email,inp.password))
    }
    return (
      <>
      <input type="text" onChange={handleChange} placeholder="email" id="email"/>
      <input type="password" onChange={handleChange} placeholder="password" id="password"/>.
      <button onClick={()=>handleClick()}>login</button>
       </>
    )}
    export default Home