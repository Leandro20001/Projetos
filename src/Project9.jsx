import ReturnBtn from "./ReturnBtn";
import img1 from  "./assets/images/lorem1.png"
import img2 from "./assets/images/lorem2.png"
import img3 from  "./assets/images/lorem3.png"
import img4 from "./assets/images/lorem4.png"
export default function Project5(){
    return(
        <>
        <ReturnBtn/>
        <span id="inDevelopment">(Em Desenvolvimento)</span>
         <p className="pProject">
         Hotel Lorem é um projeto de site de agendamente de quartos. Nele está sendo desenvolvido boas praticas de desing responsivo voltado aos dispositivos moveis. Está sendo utilizado Javascript,APIs de pagamento,API do google maps e banco de dados FireBase


        </p>
        <div className="lorem hotel"  id="showLshop">
            <img src={img1} alt="" />
        </div>

        <div className="lorem" id="showLshop">
            <img src={img2} alt="" />
        </div>

        <div className="lorem hotel" id="showLshop">
            <img src={img3} alt="" />
        </div>

        <div  className="lorem hotel" id="showLshop">
            <img src={img4} alt="" />
        </div>
        </>
    )
}
