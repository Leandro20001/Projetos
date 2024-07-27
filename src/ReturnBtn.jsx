import { useNavigate } from "react-router-dom"

export default function ReturnBtn(){
    const nav = useNavigate()
    return(
        <button onClick={()=>{
            nav('/')
        }} id="returnBtn">
            <img src="assets/returnBtn.png" alt="" />
        </button>
    )
}
