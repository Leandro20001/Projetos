import ReturnBtn from "./ReturnBtn";
import img1 from  "./assets/images/fm.png"
import img2 from "./assets/images/fm2.png"
import img3 from  "./assets/images/fm3.png"
export default function Project5(){
    return(
        <>
        <ReturnBtn/>

         <p className="pProject">
        Site Institucional que desenvolvi para a empresa Fala Musico.


        </p>
       <div className="showProjectsImg">
       <div className="lorem"  id="showLshop">
            <img src={img1} alt="" />
        </div>

        <div className="lorem" id="showLshop">
            <img src={img2} alt="" />
        </div>

        <div className="lorem" id="showLshop">
            <img src={img3} alt="" />
        </div>

    
       </div>
        </>
    )
}
