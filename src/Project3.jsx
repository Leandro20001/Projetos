import ReturnBtn from "./ReturnBtn";
import img2 from "./assets/images/project1.png"
import img3 from "./assets/images/project2.png"
export default function Project3(){
    return(
        <>
        <ReturnBtn/>
         <p className="pProject">
         Esse é um exemplo de layout que posso fazer em seu site


        </p>
        <div id="showLshop">
            <img src={img2} alt="" />
        </div>

        <div id="showLshop">
            <img src={img3} alt="" />
        </div>
        </>
    )
}
