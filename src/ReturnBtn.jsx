import { useNavigate } from "react-router-dom"
import returnPhoto from "./assets/images/returnbtn.png"
export default function ReturnBtn(){
    const nav = useNavigate()
    return(
        <button onClick={()=>{
            nav('/')
        }} id="returnBtn">
            <img src={returnPhoto} alt="" />
        </button>
    )
}
