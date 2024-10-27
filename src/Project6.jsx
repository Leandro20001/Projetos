import ReturnBtn from "./ReturnBtn";
import siteRevista from './assets/images/siteRevista.png'
import siteRevista2 from './assets/images/siteRevista2.png'
export default function Project5(){
    return(
        <>
        <ReturnBtn/>
         <p className="pProject">
         Desenvolvi o Layout de um Template para sites de revista usando NextJS em conjunto com um cliente passado.



        </p>
        <div className="showProjectsImg">
        <div className="lorem"  id="showLshop">
            <img src={siteRevista} alt="" />
        </div>

        <div className="lorem" id="showLshop">
            <img src={siteRevista2} alt="" />
        </div>
        </div>


        </>
    )
}
