import ReturnBtn from "./ReturnBtn";
import img1 from  "./assets/images/falaMusico.jpeg"
import img2 from "./assets/images/falaMusico2.jpeg"
import img3 from  "./assets/images/falaMusico23jpeg.jpeg"
export default function Project5(){
    return(
        <>
        <ReturnBtn/>

         <p className="pProject">
            Site Institucional que desenvolvi para o centro de musica Thiago Gomes.


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
