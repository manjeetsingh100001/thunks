
const initState={

}
import { useDispatch } from "react-redux";
const dispatch=useDispatch()
function Home() {
    return (
      <>
      <input type="text" placeholder="email" id="email"/>
      <input type="password" placeholder="password" id="password"/>.
      <button onClick={()=>dispatch(login)}></button>
       </>
    )}
    export default Home